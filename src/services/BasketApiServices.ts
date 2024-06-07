import type { iAddToBacket } from "@/interface/IAddToBasket";
import type { iProduct } from "@/interface/IProduct";
import axios, { type AxiosResponse } from "axios";

export { addToBasket, getBasketProduct, deleteBasketProduct }

async function addToBasket(data: iAddToBacket) {

    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post('http://localhost:5000/Basket', data, { headers })
        console.log(response)
        return response
    } catch (e: any) {
        return e.response.data
    }
}

async function getBasketProduct(id: number): Promise<AxiosResponse<iProduct[], any>> {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response: AxiosResponse<iProduct[]> = await axios.get(`http://localhost:5000/Basket/${id}`, { headers })
        console.log(response, 'iz servisa')
        return response
    } catch (e: any) {
        console.error(e)
        return e.response.data
    }
}

async function deleteBasketProduct(idUser: number, idProduct: number) {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`http://localhost:5000/Basket/${idUser}/${idProduct}`, { headers })
        return response
    } catch (e: any) {
        return e.response
        console.log(e, 'error')
    }
}