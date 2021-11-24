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
import Bar from 'ol-ext/control/Bar'

import useControl from '@/composables/useControl'
import { provide } from 'vue'
export default {
  name: 'ol-control-bar',
  setup(props, context) {
    const { control } = useControl(Bar, props, context)

    provide('controlBar', control)
    return {
      control,
    }
  },
  props: {
    toggleOne: {
      type: Boolean,
      default: true,
    },
    group: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang=""></style>
