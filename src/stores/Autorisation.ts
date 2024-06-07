import type { iLogin } from "@/interface/ILogin";
import { defineStore } from "pinia";
import { ref } from "vue";
import { auth } from "@/services/AuthApiServices"
import type { AxiosResponse } from "axios";
import type { iLoginUserData } from "@/interface/ILoginUserData";
import { useUserStore } from "./User";
export const useAutorisationStore = defineStore('autorisation', () => {

    const userStore = useUserStore();


    const isAuth = ref<boolean>(false)
    const toketUser = ref<string>('')

    async function loginUser(dataUser: iLogin) {
        const response: AxiosResponse<iLoginUserData, number> = await auth(dataUser)
        console.log(response, 'test')
        if (response.status >= 400) {
            isAuth.value = false
        } else {

            isAuth.value = true
            toketUser.value = response.data.token
            localStorage.setItem('token', toketUser.value)
            localStorage.setItem('User', toketUser.value)
            console.log(toketUser.value)
            userStore.userData = response.data.userData
            console.log(userStore.userData)
        }
    }

    function $reset() {
        isAuth.value = false;
        toketUser.value = '';

    }

    return { isAuth, toketUser, loginUser, $reset}
})