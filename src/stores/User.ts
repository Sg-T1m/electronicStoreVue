import type { iUserData } from "@/interface/IUserData";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUserStore = defineStore('User', () => {

    const userData: iUserData = reactive({
        Name: '',
        Patronymic: '',
        SName: '',
        id: 0,
        img: '',
        login: ''
    })

    function $reset() {
        userData.Name = '';
        userData.Patronymic = '';
        userData.SName = '';
        userData.id = NaN;
        userData.img = '';
        userData.login = '';


    }
    return { userData, $reset }
})