<template>
    <div class="FooterContent">
        <div class="FooterContent_logo"> <img src="\src\assets\logo2.svg" alt=""></div>
        <div class="FooterContent_NavBar">
            <a>О компании</a>
            <a>Контакты</a>
            <a>Вакансии</a>
            <a>Статьи</a>
            <a>Политика обработки персональных данных</a>
        </div>
        <div class="FooterContent_Connect">
            <div class="FooterContent_Connect_Media">
                <img src="\src\assets\Inst.svg" alt="">
                <img src="\src\assets\vk.svg" alt="">
                <img src="\src\assets\fase.svg" alt="">
                <img src="\src\assets\ok.svg" alt="">
            </div>
            <div class="FooterContent_Connect_Phone">
                <img src="/src/assets/phone.svg" alt="">
                <p>8 800 777 33 33</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.FooterContent {
    display: flex;
    justify-content: space-between;
    width: 1209px;
}

.FooterContent_NavBar {
    width: 636px;
    display: flex;
    justify-content: space-between;
}

.FooterContent_NavBar a {
    color:
        #414141;
    font-family: "Rubik", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;

}

.FooterContent_Connect {
    width: 336px;
    display: flex;
    justify-content: space-between;
}

.FooterContent_Connect_Media {
    width: 144px;
    display: flex;
    justify-content: space-between;
}

.FooterContent_Connect_Media img {
    width: 24px;
    height: 24px;
}

.FooterContent_Connect_Phone {
    width: 152px;
    display: flex;
    justify-content: space-between;
}

.FooterContent_Connect_Phone img {
    width: 24px;
    height: 24px;
}

.FooterContent_Connect_Phone p {

    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #414141;
}
</style>