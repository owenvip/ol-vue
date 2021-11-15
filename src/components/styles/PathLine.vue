<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:47:59
-->
<template>
  <div><slot></slot></div>
</template>

<script lang="ts">
import { inject, watch, onUnmounted, onMounted, computed } from 'vue'

import Draw from 'ol/interaction/Draw'
import { LineString, Point } from 'ol/geom'
import { Style, Icon, Stroke } from 'ol/style'
import Modify from 'ol/interaction/Modify'
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
  name: 'ol-style-pathline',
  setup(props) {
    const initStyle = (params) =>
      function (feature, res) {
        let geometry = feature.getGeometry()
        let styles: Style[] = [
          new Style({
            stroke: new Stroke({
              color: params.color || '#41b983',
              width: params.width || 2,
            }),
          }),
        ]
        // 如果几何体不是线条，这返回默认样式
        if (!(geometry instanceof LineString)) return styles
        // 得到线条长度
        const length = geometry.getLength()
        // 内部箭头间隔距离（像素）
        const step = params.step || 50
        // 将间隔像素距离转换成地图的真实距离
        // res 是 OL 自动传入的地图比例系数
        const geoStep = step * res
        // 得到一共需要绘制多少个 箭头
        const arrowNum = Math.floor(length / geoStep)
        const rotations = []
        const distances = [0]
        // 分割线条，将折线根据坐标进行分割，并遍历
        // 回调函数将传入开始坐标和结束坐标
        // 利用开始距离和结束距离，得到每段线条的距离和方向信息
        geometry.forEachSegment(function (start, end) {
          let dx = end[0] - start[0]
          let dy = end[1] - start[1]
          let rotation = Math.atan2(dy, dx)
          distances.unshift(Math.sqrt(dx ** 2 + dy ** 2) + distances[0])
          rotations.push(rotation)
        })
        // 利用之前计算得到的线段矢量信息，生成对应的点样式塞入默认样式中
        // 从而绘制内部箭头
        for (let i = 1; i < arrowNum; ++i) {
          const arrowCoord = geometry.getCoordinateAt(i / arrowNum)
          const d = i * geoStep
          const grid = distances.findIndex((x) => x <= d)

          styles.push(
            new Style({
              geometry: new Point(arrowCoord),
              image: new Icon({
                src: params.src || '',
                opacity: params.opacity,
                anchor: [0.5, 0.5],
                rotateWithView: true,
                // 读取 rotations 中计算存放的方向信息
                rotation: -rotations[distances.length - grid - 1],
                scale: params.scale || 0.06,
              }),
            })
          )
        }
        return styles
      }

    const styledObj = inject('stylable', null)

    const { properties } = usePropsAsObjectProperties(props)

    let style = computed(() => initStyle(properties))

    const setStyle = (val) => {
      if (styledObj instanceof Draw || styledObj instanceof Modify) {
        styledObj.getOverlay().setStyle(val)
        styledObj.value.dispatchEvent('styleChanged')
        return
      }
      try {
        styledObj.value.setStyle(val)
        styledObj.value.changed()
        styledObj.value.dispatchEvent('styleChanged')
      } catch (error) {
        styledObj.value.style_ = val
        styledObj.value.values_.style = val

        styledObj.value.changed()
        styledObj.value.dispatchEvent('styleChanged')
      }
    }

    const styleFunc = computed(() => {
      return (feature) => {
        if (properties.overrideStyleFunction != null) {
          properties.overrideStyleFunction(feature, style.value)
        }
        return style.value
      }
    })

    watch(properties, () => {
      if (properties.overrideStyleFunction == null) {
        setStyle(style.value)
      } else {
        setStyle(styleFunc.value)
      }
    })

    onMounted(() => {
      if (properties.overrideStyleFunction == null) {
        setStyle(style.value)
      } else {
        setStyle(styleFunc.value)
      }
    })

    onUnmounted(() => {
      setStyle(null)
    })

    return {
      style,
    }
  },
  props: {
    color: {
      type: String,
    },
    src: {
      type: String,
    },
    opacity: {
      type: Number,
    },
    scale: {
      type: Number,
    },
    step: {
      type: Number,
    },
    width: {
      type: Number,
    },
  },
}
</script>

<style lang=""></style>
