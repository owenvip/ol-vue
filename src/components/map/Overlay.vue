<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:47:59
-->
<template lang="">
  <div ref="htmlContent">
    <slot :position="position"> </slot>
  </div>
</template>

<script lang="ts">
import useOverlay from '@/composables/useOverlay'
export default {
  name: 'ol-overlay',
  setup(props, { emit }) {
    const overlay = new useOverlay(props, emit)

    return {
      ...overlay,
    }
  },
  props: {
    position: {
      type: Array,
    },
    offset: {
      type: Array,
    },
    positioning: {
      type: [Array, String],
    },
    stopEvent: {
      type: Boolean,
      default: true,
    },
    insertFirst: {
      type: Boolean,
      default: true,
    },
    autoPan: {
      type: Boolean,
      default: false,
    },
    autoPanMargin: {
      type: Number,
      default: 20,
    },
    autoPanAnimation: {
      type: Object,
      default: undefined,
    },
  },
}
</script>

<style lang=""></style>
