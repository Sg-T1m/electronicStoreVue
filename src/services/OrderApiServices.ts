import type { iAddOrdersData } from "@/interface/IAddOrdersData";
import type { iProduct } from "@/interface/IProduct";
import axios, { type AxiosResponse } from "axios";

export { postOrders, getOrdersByUser, deleteOrders }

async function postOrders(orderData: iAddOrdersData) {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    try {
        const response = axios.post('http://localhost:5000/orders', orderData, { headers })

    } catch (e) {
        console.log(e)
    }
}


async function getOrdersByUser(id: number) {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        console.log(id)
        const response: AxiosResponse<iProduct[]> = await axios.get(`http://localhost:5000/orders/${id}`, { headers })
        console.log(response, 'iz')
        return response
    } catch (e: any) {
        console.error(e, ' error')
        return e.response
    }
}

async function deleteOrders(userId: number, ordersId: number) {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      
        const response: AxiosResponse<iProduct[]> = await axios.delete(`http://localhost:5000/orders/${userId}/${ordersId}`, { headers })
 
        return response
    } catch (e: any) {
   
        return e.response
    }
}