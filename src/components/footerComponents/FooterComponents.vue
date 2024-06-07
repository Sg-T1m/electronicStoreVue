<template>
    <footer class="Footer" >
        <FooterContent></FooterContent>
    </footer>
</template>

<script setup lang="ts">
import FooterContent from './footerContent/FooterContent.vue'
</script>


<style scoped>
.Footer {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 126px;
    /* background: #3649f7; */
    background-color: #fbf8ec;
    background-image: url("/src/assets/bgFooter.svg");
}
</style>
