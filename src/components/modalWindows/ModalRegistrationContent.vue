<template>

    <div class="modalRegistrationContent">
        <div class="closeModalRegistration" @click="CloseModel">
            <img src="@\assets\ButtonCLose.svg" alt="">
        </div>
        <div class="mainContent">
            <div>
                <TextModalHeader>Регистрация</TextModalHeader>
            </div>
            <div class="mainContentRegistrationBtnBlock">
                <form @submit.prevent>
                    <p class="TextUpInput">Имя</p>
                    <InputModal v-model:value="registrationData.Name"></InputModal>
                    <p class="TextUpInput">Фамилия</p>
                    <InputModal v-model:value="registrationData.SName"></InputModal>
                    <P class="TextUpInput">Отчество</P>
                    <InputModal v-model:value="registrationData.Patronymic"></InputModal>
                    <p class="TextUpInput">URl Картинки</p>
                    <InputModal v-model:value="registrationData.img"></InputModal>
                    <p class="TextUpInput">Логин</p>
                    <InputModal v-model:value="registrationData.login"></InputModal>
                    <p class="TextUpInput">Пароль</p>
                    <InputModal v-model:value="registrationData.password" v-model:type="TypePassword"></InputModal>
                    <BtnModel @click="registration" v-bind:isButtonDisabled="disabledBtnRegistr">Зарегистрироваться
                    </BtnModel>

                    <BtnModel @click="openModelLogin">Уже есть аккаунт?</BtnModel>
                </form>
                <div class="errorMessange" v-if="erorStatus">
                    {{errorMessange}}
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';


import InputModal from '../ui/InputModal.vue'
import TextModalHeader from '../ui/TextModalHeader.vue'
import BtnModel from '../ui/BtnModel.vue'


import type { iRegistrationData } from '@/interface/IRegistartionData';


import { registartion } from "@/services/AuthApiServices"
import type { AxiosResponse } from 'axios';


const disabledBtnRegistr = ref<boolean>(false)

const emits = defineEmits([
    'update:show',
    'update:showLogin'
])
interface props {
    show: boolean,
    showLogin: boolean
}
const props = withDefaults(defineProps<props>(), {
    show: false,
    showLogin: false
})

const TypePassword = ref<string>("password");
const registrationData = ref(<iRegistrationData>{
    Name: '',
    SName: '',
    Patronymic: '',
    img: '',
    login: '',
    password: '',
})
function CloseModel() {
    emits('update:show', false)
    emits('update:showLogin', false)
}

function openModelLogin() {
    emits('update:show', false)
    emits('update:showLogin', true)
}

let response = ref<string | any>()
let erorStatus = ref<boolean>(false)
let errorMessange = ref<String>('')
async function registration() {
    disabledBtnRegistr.value = true
    response.value = await registartion(registrationData.value);
    if (response.value!.status >= 300) {
        erorStatus.value = true
        errorMessange.value = response.value.data.message
    }
    disabledBtnRegistr.value = false
}
</script>

<style scoped>
.modalRegistrationContent {

    width: 420px;
    height: 831px;
    border-radius: 4px;
    background: #FFFFFF;

}

.closeModalRegistration {
    float: right;
}

.mainContent {
    margin-top: 72px;
    height: 359px;
    padding-left: 80px;
    padding-right: 80px;
}

.TextUpInput {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;
    color: #8F8F8F;
}
.errorMessange{
    color: red;
    font-size: 18px;
    margin-top: 10px;
}
</style>