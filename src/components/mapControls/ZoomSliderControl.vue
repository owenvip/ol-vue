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
import useControl from '@/hooks/useControl'
import ZoomSlider from 'ol/control/ZoomSlider'

export default {
  name: 'ol-zoomslider-control',
  setup(props, context) {
    const { control } = useControl(ZoomSlider, props, context)
    return {
      control,
    }
  },
  props: {
    duration: {
      type: Number,
      default: 200,
    },
    className: {
      type: String,
      default: 'ol-zoomslider',
    },
    render: {
      type: Function,
    },
  },
}
</script>

<style lang=""></style>
