<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:47:59
-->
<template lang="">
  <slot></slot>
</template>

<script lang="ts">
import FeatureAnimation from './FeatureAnimation'
import Drop from 'ol-ext/featureanimation/Drop'
import useAnimation from '@/hooks/useAnimation'
export default {
  name: 'ol-animation-drop',
  extends: FeatureAnimation,

  setup(props) {
    const { map, vectorLayer, properties } = useAnimation(Drop, props)

    return {
      map,
      vectorLayer,
      properties,
    }
  },
  props: {
    side: {
      type: Number,
      default: 0,
    },
    speed: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang=""></style>
