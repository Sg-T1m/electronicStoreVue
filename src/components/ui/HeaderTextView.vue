<template>
    <h3 class="textHeaderViews">{{ props.text }}</h3>

</template>
<script setup lang="ts">
interface Props {
    text: string
}

const props = defineProps<Props>()
</script>
<style scoped>
.textHeaderViews {

    font-family: "Roboto", sans-serif;
    font-size: 64px;
    font-weight: 700;
    line-height: 96px;
    text-align: left;
    
}
</style>