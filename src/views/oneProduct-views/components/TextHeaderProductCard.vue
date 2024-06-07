<template>
    <h3 class="textHeaderOneProduct">{{ props.text }}</h3>
</template>
<script setup lang="ts">
interface Props {
    text: String
}
const props = defineProps<Props>()

</script>

<style scoped>
.textHeaderOneProduct {
    margin-top: 20px;
    color: #414141;
    font-family: Rubik;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
    width: 100%;
}
</style>