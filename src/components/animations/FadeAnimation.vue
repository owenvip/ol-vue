<template lang="">
  <slot></slot>
</template>

<script lang="ts">
import FeatureAnimation from './FeatureAnimation'
import Fade from 'ol-ext/featureanimation/Fade'
import useAnimation from '@/hooks/useAnimation'
export default {
  name: 'ol-animation-fade',
  extends: FeatureAnimation,

  setup(props) {
    const { map, vectorLayer, properties } = useAnimation(Fade, props)

    return {
      map,
      vectorLayer,
      properties,
    }
  },
}
</script>

<style lang=""></style>
