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
import { MousePosition } from 'ol/control'
import useControl from '@/hooks/useControl'

export default {
  name: 'ol-mouseposition-control',
  setup(props, context) {
    const { control } = useControl(MousePosition, props, context)
    return {
      control,
    }
  },
  props: {
    className: {
      type: String,
      default: 'ol-mouse-position',
    },
    coordinateFormat: {
      type: [String, Function],
    },
    projection: {
      type: String,
    },
    render: {
      type: Function,
    },
    target: {
      type: HTMLElement,
    },
    undefinedHTML: {
      type: String,
      default: '&#160;',
    },
  },
}
</script>

<style lang=""></style>
