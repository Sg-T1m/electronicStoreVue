<template>
    <HeaderTextView :text="textHeader"></HeaderTextView>
    <div class="product_container">
        <div v-for="product in productArray">
            <CardProduct :productData="product"></CardProduct>
        </div>

    </div>

</template>
<script setup lang="ts">
import CardProduct from "@/components/product/CardProduct.vue"
import HeaderTextView from '@/components/ui/HeaderTextView.vue';


import type { iProduct } from "@/interface/IProduct";

import { getAllProduct } from "@/services/ProductApiServices"
import axios, { type AxiosResponse } from "axios"
import { reactive } from "vue";

let productArray: iProduct[] = reactive([])


let textHeader: string = 'Домашняя страница'
async function getAllProductHome() {

    const respons: AxiosResponse<iProduct[], any> = await getAllProduct()
    productArray.splice(0, productArray.length, ...respons.data);


}

getAllProductHome()
</script>
<style scoped>
.product_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}
</style>