<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-12 16:47:59
-->
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
import LayerSwitcher from 'ol-ext/control/LayerSwitcher'
import useControl from '@/hooks/useControl'

export default {
  name: 'ol-layerswitcher-control',
  setup(props, context) {
    const { control } = useControl(LayerSwitcher, props, context)
    return {
      control,
    }
  },
  props: {
    selection: {
      type: Boolean,
    },
    displayInLayerSwitcher: {
      type: Function,
    },
    show_progress: {
      type: Boolean,
      default: false,
    },
    mouseover: {
      type: Boolean,
      default: false,
    },
    reordering: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
    oninfo: {
      type: Function,
    },
    extent: {
      type: Boolean,
    },
    onextent: {
      type: Function,
    },
    drawDelay: {
      type: Number,
    },
    collapsed: {
      type: Boolean,
      default: true,
    },
    layerGroup: {
      type: Object,
    },
    noScroll: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang=""></style>
