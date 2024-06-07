<template>
    <div class="navMainBlockContent">
        <div class="navMainBlockContent_LogoBlock" @click="$router.push('/')">
            <img src="\src\assets\logo.svg" alt="logo">
        </div>
        <div class="navMainBlockContent_BtnBlock">
            <button @click="openCatalogViews" class="BlockContent_CatalogOpen">
                <img src="\src\assets\menu.svg" alt="">
                Каталог</button>
            <input placeholder="Найти товар" class="BlockContent_Search" type="text">
        </div>
        <div class="navMainBlockContent_MenuBlock">
            <div class="BlockContent_MenuBlock_btn">
                <div class="MenuBlock_favorites" @click="openToFavorit">
                    <img src="\src\assets\Favorits.svg" alt="избранное" srcset="">
                    <p>Избранное</p>
                </div>
                <div class="MenuBlock_orders" @click="openToOrders">
                    <img src="\src\assets\orders.svg" alt="заказы" srcset="">
                    <p>Заказы</p>
                </div>
                <div class="MenuBlock_basket" @click="openToBacket">
                    <img src="\src\assets\basket.svg" alt="корзина" srcset="">
                    <p>Корзина</p>
                </div>
            </div>
            <div v-if="authStore.isAuth" class="BlockContent_MenuBlock_Profile">
                <div class="MenuBlock_Profile_Avatar"><img class="MenuBlock_Profile_Avatar_img"
                        :src="String(userStore.userData.img)" onerror="this.onerror=null; this.src='';" alt=""></div>
                <div class="MenuBlock_Profile_Name">
                    <p>{{ userStore.userData.Name }}</p>
                </div>
                <div class="MenuBlock_Profile_Open"><img src="\src\assets\openProfile.svg" alt=""></div>
            </div>
            <div v-else class="BlockContent_MenuBlock_Profile">
                <button class="navMenuBtnLogin" @click="openModalLogin">Войти</button>
            </div>
        </div>
        <ModalShadow v-model:show="StateModal.showModalLogin.value">
            <ModalLoginContent v-model:show="StateModal.showModalLogin.value"
                v-model:show-registration="StateModal.showModalRegistration.value"></ModalLoginContent>
        </ModalShadow>
        <ModalShadow v-model:show="StateModal.showModalRegistration.value">
            <ModalRegistrationContent v-model:show="StateModal.showModalRegistration.value"
                v-model:show-login="StateModal.showModalLogin.value"></ModalRegistrationContent>
        </ModalShadow>
        <Messange v-model:isWisible="errorMessange.isWisible.value" v-model:color="errorMessange.color.value"
            v-model:text="errorMessange.text.value"> </Messange>
    </div>



</template>

<script setup lang="ts">
import router from '@/router';
import { useAutorisationStore } from '@/stores/Autorisation';
import { ref } from 'vue';


import ModalShadow from '@/components/ui/ModalShadow.vue';
import ModalLoginContent from '@/components/modalWindows/ModalLoginContent.vue';
import ModalRegistrationContent from '@/components/modalWindows/ModalRegistrationContent.vue';
import Messange from '@/components/ui/Messange.vue';

import { useUserStore } from '@/stores/User';


const errorMessange = {
    isWisible: ref<boolean>(false),
    text: ref<string>('Вы не авторизованы'),
    color: ref<string>('red')
}


const authStore = useAutorisationStore();
const userStore = useUserStore();
const StateModal = {
    showModalLogin: ref<boolean>(false),
    showModalRegistration: ref<boolean>(false)
}
function openCatalogViews(): void {

    router.push('/catalog')
}
function openToFavorit() {
    if (authStore.isAuth) {
        router.push('/Favorites')
    } else {
        errorMessange.isWisible.value = true
        router.push('/')
    }
}
function openToBacket() {
    if (authStore.isAuth) {
        router.push('/Basket')
    } else {
        errorMessange.isWisible.value = true
        router.push('/')
    }

}
function openToOrders() {
    if (authStore.isAuth) {
        router.push('/orders')
    } else {
        errorMessange.isWisible.value = true
        router.push('/')
    }
}
function openModalLogin() {
    StateModal.showModalLogin.value = true
}



</script>

<style scoped>
.navMainBlockContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1208px;
    height: 100%;

}

.BlockContent_CatalogOpen {
    width: 140px;
    height: 40px;
    border-radius: 4px;
    color: #fff;
    background: #70C05B;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;



}

.navMainBlockContent_LogoBlock {
    width: 152px;

}

.navMainBlockContent_BtnBlock {
    display: flex;
    justify-content: space-between;
    width: 531px;
}

.BlockContent_Search {
    width: 375px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #70C05B;
    padding-left: 16px;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

}

.navMainBlockContent_MenuBlock {
    width: 445px;

    display: flex;
    justify-content: space-between;
}

.BlockContent_MenuBlock_btn {
    width: 228px;
    display: flex;
    justify-content: space-between;
}

.BlockContent_MenuBlock_Profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 217px;
    padding: 8px;

}

.MenuBlock_basket,
.MenuBlock_orders,
.MenuBlock_favorites {
    width: auto;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

}

.MenuBlock_basket,
.MenuBlock_orders,
.MenuBlock_favorites p {

    font-family: "Rubik", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color:
        #414141;


}

.MenuBlock_Profile_Name {
    width: 85px;

    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color:
        #232323;
}

.navMenuBtnLogin {
    width: 140px;
    height: 40px;
    border-radius: 4px;
    color: #fff;
    background: #70C05B;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

}

.MenuBlock_Profile_Avatar_img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

}
</style>@/stores/User@/stores/Autorisation