<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:47:59
-->
<template lang="">
  <div v-if="false"></div>
</template>

<script lang="ts">
import LineString from 'ol/geom/LineString'
import useGeometry from '@/hooks/useGeometry'

export default {
  name: 'ol-geom-line-string',
  setup(props) {
    const { geometry } = useGeometry(LineString, props)

    return {
      geometry,
    }
  },
  props: {
    coordinates: {
      type: Array,
    },
    opt_layout: {
      type: String,
      default: 'XY',
    },
  },
}
</script>

<style lang=""></style>
