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
import Button from 'ol-ext/control/Button'

import useControl from '@/hooks/useControl'
export default {
  name: 'ol-control-button',
  setup(props, context) {
    const { control } = useControl(Button, props, context)

    return {
      control,
    }
  },
  props: {
    html: {
      type: String,
    },
    name: {
      type: String,
    },
    className: {
      type: String,
    },
    title: {
      type: String,
    },
    handleClick: {
      type: Function,
    },
  },
}
</script>

<style lang=""></style>
