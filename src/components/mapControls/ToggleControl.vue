<template lang="">
  <div v-if="false"></div>
</template>

<script lang="ts">
import Toggle from 'ol-ext/control/Toggle'

import useControl from '@/hooks/useControl'
export default {
  name: 'ol-control-toggle',
  setup(props, context) {
    const { control } = useControl(Toggle, props, context)

    return {
      control,
    }
  },
  props: {
    html: {
      type: String,
    },
    interaction: {
      type: Object,
    },
    className: {
      type: String,
    },
    title: {
      type: String,
    },
    onToggle: {
      type: Function,
    },
  },
}
</script>

<style lang=""></style>
