<template lang="">
  <slot></slot>
</template>

<script lang="ts">
import FeatureAnimation from './FeatureAnimation'
import Slide from 'ol-ext/featureanimation/Slide'
import useAnimation from '@/hooks/useAnimation'
export default {
  name: 'ol-animation-slide',
  extends: FeatureAnimation,

  setup(props) {
    const { map, vectorLayer, properties } = useAnimation(Slide, props)

    return {
      map,
      vectorLayer,
      properties,
    }
  },
  props: {
    speed: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang=""></style>
