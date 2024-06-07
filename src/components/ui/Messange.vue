<template>

    <div :style="{ 'background-color': props.color }" v-if="props.isWisible" class="block_unauthorized">
        <div class="close" @click="$emit('update:isWisible', false)"><img src="@/assets/ButtonCLose.svg" alt=""></div>
        {{ props.text }}
    </div>

</template>

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';

interface iProps {
    isWisible: boolean
    text: string
    color: string
}


const props = defineProps<iProps>()
const emits = defineEmits([
    'update:isWisible'
])

onUpdated(() => {
    setTimeout(() => {

        emits('update:isWisible', false)

    }, 5000);
});

</script>

<style scoped>
.block_unauthorized {
    padding: 5px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100px;
    background-color: red;
    color: white;
    font-size: 50px;
    animation: 3s show ease;
    text-align: center;

}


@keyframes show {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.close {
    float: right;
}
</style>