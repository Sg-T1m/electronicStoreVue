<template>
    <div>
        <div class="modalLoginContent">
            <div class="closeModalLogin" @click="closeModel">
                <img src="@\assets\ButtonCLose.svg" alt="">
            </div>
            <div class="mainContent">
                <TextModalHeader>Вход</TextModalHeader>
                <div class="mainContentBlockBtn">
                    <form action="" @submit.prevent>

                        <p class="TextUpInput">Логин</p>
                        <InputModal v-model:value="LoginData.login"></InputModal>


                        <p class="TextUpInput">Пароль</p>
                        <InputModal v-model:value="LoginData.password"></InputModal>
                        <BtnModel @click="login">Войти</BtnModel>
                        <button class="btnRegistration" @click="openModelRegistration"> Регистрация</button>
                    </form>
                    <div class="erorBlock" v-if="erorStatus">
                        Неправильный пароль или логин
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';

import { type iLogin } from '@/interface/ILogin'

import { useAutorisationStore } from '@/stores/Autorisation';

import TextModalHeader from '../ui/TextModalHeader.vue'
import InputModal from '../ui/InputModal.vue'
import BtnModel from '../ui/BtnModel.vue'


let authStore = useAutorisationStore()
const LoginData = ref(<iLogin>{
    login: '',
    password: '',

}
)

const emits = defineEmits([
    'update:show',
    'update:showRegistration'
])
interface props {
    show: boolean,
    showRegistration: boolean

}
const props = withDefaults(defineProps<props>(), {
    show: false,
    showRegistration: false
})

function openModelRegistration() {
    emits('update:show', false)
    emits('update:showRegistration', true)
}

function closeModel() {
    emits('update:show', false)

}

let erorStatus = ref<boolean>(false)
async function login() {
    authStore.loginUser(LoginData.value)
        emits('update:show', false)
    

}
</script>

<style scoped>
.modalLoginContent {

    width: 420px;
    height: 531px;
    border-radius: 4px;
    background: #FFFFFF;

}

.closeModalLogin {
    float: right;
}

.mainContent {
    margin-top: 72px;
    height: 359px;
    padding-left: 80px;
    padding-right: 80px;
}

.TextUpInput {

    margin-top: 10px;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;
    color: #8F8F8F;
}

.mainContentBlockBtn {

    margin-top: 32px;
}

.InputLogin,
.InputPassword {
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

.btnLogin {
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

.btnRegistration {
    width: 121px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #70C05B;
    font-family: "Rubik", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color: #70C05B;
    margin-top: 10px;
    background-color: #FFFFFF;
}
.erorBlock{
    color: red;
    font-size: 18px;
    margin-top: 18px;
}
</style>