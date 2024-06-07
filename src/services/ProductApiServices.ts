import type { iProduct } from "@/interface/IProduct"
import axios, { type AxiosResponse } from "axios"

export { getAllProduct, getOneProduct }


async function getAllProduct(): Promise<AxiosResponse<iProduct[], any>> {
    try {
        const response: AxiosResponse<iProduct[]> = await axios.get('http://localhost:5000/products')
        console.log(response, 'izserbvisa')
        return response
    } catch (e: any) {

        return e
    }
}

async function getOneProduct(id: string | string[]): Promise<iProduct> {
    try {
        const response: AxiosResponse<iProduct> = await axios.get(`http://localhost:5000/products/${id.toString()}`)
        return response.data
    } catch (e: any) {
        return e.response
    }
}