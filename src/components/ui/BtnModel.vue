<template>
    <button :style="{ 'background-color': props.isButtonDisabled ? '#c0c0c0' : '#FCD5BA' }" :disabled="props.isButtonDisabled"
        class="btnModel">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface props {
    isButtonDisabled: boolean
}
const props = withDefaults(defineProps<props>(), {
    isButtonDisabled: false
})
// const isButtonDisabled = ref(false)
</script>

<style scoped>
.btnModel {
    margin-top: 32px;
    width: 260px;
    height: 68px;
    padding: 16px;
    border-radius: 4px;
    background: #FCD5BA;
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    color:
        #FF6633;
}
</style>