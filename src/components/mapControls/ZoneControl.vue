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
import Zone from 'ol-ext/control/MapZone'
import useControl from '@/composables/useControl'

export default {
  name: 'ol-zone-control',
  setup(props, context) {
    const { control } = useControl(Zone, props, context)
    return {
      control,
    }
  },
  props: {
    className: {
      type: String,
    },
    zones: {
      type: Array,
    },
    layer: {
      type: [Object, Function],
    },
    projection: {
      type: String,
      default: 'EPSG:3857',
    },
    centerOnClick: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang=""></style>
