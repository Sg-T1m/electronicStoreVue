<template>
    <nav class="nav">
        <HeaderContent></HeaderContent>
    </nav>
</template>
<script setup lang="ts">

import HeaderContent from "./headerContent/HeaderContent.vue"

</script>
<style>
.nav {
    z-index: 100;
    width: 100%;
    height: 72px;
    background: #FFFFFF;
    box-shadow: 2px 4px 8px 0px #0000001A;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>