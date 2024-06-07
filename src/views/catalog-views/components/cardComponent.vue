<template>
    <div @click="$router.push(`/oneCategory/${props.id}`)" class="cardContainer" :style="{ 'background-image': 'url(' + props.imgCategory + ')' }">

        <div class="bgText">
            <p class="cardContainerNameCategory">{{ props.NameCategory }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { ICatalog } from '@/interface/ICatalog';

interface props {
    "id": number,
    "NameCategory": string,
    "imgCategory": string
}


const props = defineProps<props>()
console.log(props)
</script>
<style scoped>
.cardContainer {
    border-radius: 10px;
    box-shadow: 13px 13px 19px -11px#1b94e6;

    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: end;

    width: 272px;
    height: 200px;
    background-image: url(https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1713225600&semt=ais);
    background-size: 272px 200px;
    background-repeat: no-repeat;
}

.cardContainerNameCategory {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 27px;
    text-align: left;

    /* Толщина и цвет обводки (для WebKit браузеров) */

}

.bgText {
    border-radius: 10px;
    padding: 10px;

    width: 100%;
    background: linear-gradient(180deg, rgba(112, 192, 91, 0) 0%, #1b94e6 82.81%);

    /* 70C05B */
}

.cardContainer:hover {
    cursor: pointer;
}
</style>