<template lang="">
  <div v-if="false"></div>
</template>

<script lang="ts">
import Point from 'ol/geom/Point'
import useGeometry from '@/hooks/useGeometry'

export default {
  name: 'ol-geom-point',
  setup(props) {
    const { geometry } = useGeometry(Point, props)

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
