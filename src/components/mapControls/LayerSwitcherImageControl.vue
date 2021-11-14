<template lang="">
<div v-if="false">

</div>
</template>

<script lang="ts">
import LayerSwitcherImage from 'ol-ext/control/LayerSwitcherImage';
import useControl from '@/composables/useControl'
import LayerSwitcherControl from './LayerSwitcherControl'
export default {
    name: 'ol-layerswitcherimage-control',
    extends: LayerSwitcherControl,
    setup(props,context) {
        const {
            control
        } = useControl(LayerSwitcherImage, props,context);
        return {
            control
        }
    },

}
</script>

<style lang="">

</style>
