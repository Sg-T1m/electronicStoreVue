
import type { iLogin } from "@/interface/ILogin";
import type { iLoginUserData } from "@/interface/ILoginUserData";
import type { iRegistrationData } from "@/interface/IRegistartionData";
import axios, { type AxiosResponse } from "axios";
import { clear } from "./ClearStoreServices";


export { registartion, auth, getByToken, checkAuth }

async function registartion(dataUser: iRegistrationData): Promise<string | any> {

    try {
        const response: AxiosResponse<string> = await axios.post('http://localhost:5000/auth/registration', dataUser)

        return response
    } catch (error: any) {
        console.error(error.response.data)
        return error.response
    }

}


async function auth(loginData: iLogin): Promise<AxiosResponse<iLoginUserData, number>> {

    try {
        const response: AxiosResponse<iLoginUserData, number> = await axios.post('http://localhost:5000/auth/login', loginData)

        return response
    } catch (e: any) {
        console.error(e.response.data)
        return e.response
    }
}

async function getByToken(token: string) {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response: AxiosResponse = await axios.get('http://localhost:5000/user', { headers })

        return response
    } catch (e: any) {
        console.error(e)
        return e
    }

}

async function checkAuth() {
    const token = localStorage.getItem('token')
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.get('http://localhost:5000/user/checkAuth', { headers })
        if (response.status > 400) {
       
            clear()
            return false
        } else {
            return true
        }

    } catch (e: any) {
        clear()
        return false
    }


}