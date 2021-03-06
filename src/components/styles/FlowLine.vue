<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:47:59
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { inject, watch, onUnmounted, onMounted, computed } from 'vue'

import FlowLine from 'ol-ext/style/FlowLine'
import Draw from 'ol/interaction/Draw'
import Modify from 'ol/interaction/Modify'
import usePropsAsObjectProperties from '@/hooks/usePropsAsObjectProperties'

export default {
  name: 'ol-style-flowline',
  setup(props) {
    const styledObj = inject('stylable', null)

    const { properties } = usePropsAsObjectProperties(props)

    let style = computed(() => new FlowLine(properties))

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
      type: [String, Function],
    },
    color2: {
      type: String,
    },
    width: {
      type: [Number, Function],
    },
    width2: {
      type: Number,
    },
    arrow: {
      type: Number,
    },
    arrowColor: {
      type: String,
    },
  },
}
</script>

<style lang=""></style>
