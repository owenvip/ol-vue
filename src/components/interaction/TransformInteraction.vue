<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:47:59
-->
<template lang="">
  <slot> </slot>
</template>

<script lang="ts">
import { provide, inject, watch, onMounted, onUnmounted, computed } from 'vue'

import Transform from 'ol-ext/interaction/Transform'

import usePropsAsObjectProperties from '@/hooks/usePropsAsObjectProperties'

export default {
  name: 'ol-interaction-transform',
  setup(props) {
    const map = inject('map')

    const { properties } = usePropsAsObjectProperties(props)

    let transform = computed(() => {
      let interaction = new Transform({
        ...properties,
      })

      return interaction
    })

    watch(transform, (newVal, oldVal) => {
      map.removeInteraction(oldVal)
      map.addInteraction(newVal)

      map.changed()
    })

    onMounted(() => {
      map.addInteraction(transform.value)
    })

    onUnmounted(() => {
      map.removeInteraction(transform.value)
    })

    provide('stylable', transform)
  },
  props: {
    enableRotatedTransform: {
      type: Boolean,
      default: false,
    },
    condition: {
      type: Function,
    },
    addCondition: {
      type: Function,
    },
    filter: {
      type: Function,
    },
    layers: {
      type: Array,
    },
    hitTolerance: {
      type: Number,
      default: 2,
    },
    translateFeature: {
      type: Boolean,
      default: true,
    },
    scale: {
      type: Boolean,
      default: true,
    },
    rotate: {
      type: Boolean,
      default: true,
    },
    keepAspectRatio: {
      type: Boolean,
      default: false,
    },
    translate: {
      type: Boolean,
      default: true,
    },
    stretch: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang=""></style>
