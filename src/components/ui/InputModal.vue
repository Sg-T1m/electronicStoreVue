<template>
    <input class="inputModal" :type="type" :value="props.value" @input="updateInput">
</template>
<script setup lang="ts">
interface props {
    value: string,
    type: string
}

const emit = defineEmits([
    "update:value"
])

const props = withDefaults(defineProps<props>(), {
    value: '',
    type: 'text'
})

function updateInput(event: Event) {

    if (event) {

        emit("update:value", (event.target as HTMLInputElement).value);
    }
}
</script>
<style>
.inputModal {
    width: 260px;
    height: 60px;
    padding: 12px 16px 12px 16px;
    gap: 4px;
    border-radius: 4px;
    border: 1px solid #70C05B;
    box-shadow: 4px 8px 16px 0px #70C05B33;
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
    color: #414141;
}
</style>