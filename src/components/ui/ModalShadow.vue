<template>
    <div class="modalShadow" v-if="props.show" @click="$emit('update:show', false)">
        <div @click.stop>
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">

const emits = defineEmits([
    'update:show'
]);
const props = withDefaults(defineProps<props>(), {
    show: true
});
interface props {
    show: boolean
};
</script>
<style scoped>
.modalShadow {
    display: flex;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 300;
    /* align-items: center; */
    justify-content: center;
}
</style>