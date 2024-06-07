import type { ICatalog } from '@/interface/ICatalog';
import axios, { type AxiosResponse } from 'axios';
// import { ICatalog } from '@/interface/ICatalog';
export { getCategory, getProductByCategory }
async function getCategory(): Promise<ICatalog[]> {
    try {

        const response: AxiosResponse<ICatalog[]> = await axios.get<ICatalog[]>('http://localhost:5000/category')
        return response.data
    } catch (e) {
        console.log(e, 'xyi')
        return [];
    }


}


async function getProductByCategory(id: string | string[]) {

    try {
        const response = await axios.get(`http://localhost:5000/category/${id}`)
        return response
    } catch (e: any) {
        return e.response
    }

}