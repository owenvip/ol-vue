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
import Teleport from 'ol-ext/featureanimation/Teleport'
import useAnimation from '@/composables/useAnimation'
export default {
  name: 'ol-animation-teleport',
  extends: FeatureAnimation,

  setup(props) {
    const { map, vectorLayer, properties } = useAnimation(Teleport, props)

    return {
      map,
      vectorLayer,
      properties,
    }
  },
  props: {},
}
</script>

<style lang=""></style>
