<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-09 00:14:04
-->
<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 100vh"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer ref="jawgLayer" title="JAWG">
      <ol-source-xyz
        crossOrigin="anonymous"
        url="https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
      />
    </ol-tile-layer>

    <ol-scaleline-control />
    <ol-zoom-control />

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature ref="animationPath">
          <ol-geom-line-string :coordinates="path" />
          <ol-style-pathline
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F43%2F43%2F5811d36639a7b_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639564684&t=f5f6a2f71bd3df966f7df4d0410e93ce"
            :scale="0.05"
            :step="100"
            color="green"
            :width="20"
          />
        </ol-feature>
        <ol-animation-path
          v-if="animationPath"
          :path="animationPath.feature"
          :duration="4000"
          :repeat="10"
        >
          <ol-feature>
            <ol-geom-point :coordinates="path[0]"></ol-geom-point>
            <ol-style>
              <ol-style-circle :radius="10">
                <ol-style-fill color="blue"></ol-style-fill>
                <ol-style-stroke color="blue" :width="2"></ol-style-stroke>
              </ol-style-circle>
            </ol-style>
          </ol-feature>
        </ol-animation-path>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// import markerIcon from './icon/marker.png'

export default defineComponent({
  name: 'Home',
  setup() {
    const center = ref([34, 39.13])
    const projection = ref('EPSG:4326')
    const zoom = ref(6)
    const rotation = ref(0)
    const animationPath = ref(null) as any
    const path = ref([
      [25.6064453125, 44.73302734375001],
      [27.759765625, 44.75500000000001],
      [28.287109375, 43.32677734375001],
      [30.55029296875, 46.40294921875001],
      [31.69287109375, 43.04113281250001],
    ])

    return {
      center,
      projection,
      zoom,
      rotation,
      path,
      animationPath,
    }
  },
})
</script>
<style lang="css" scoped>
.overlay-content {
  background: red !important;
  color: white;
  box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
  padding: 10px 20px;
  font-size: 16px;
}
</style>
