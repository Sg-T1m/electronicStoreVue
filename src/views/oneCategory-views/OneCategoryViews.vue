<template>

    <div class="one_Category_Container">
        <div v-for="product in  productArray ">
            <CardProduct :productData="product"></CardProduct>
        </div>


    </div>

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getProductByCategory } from "@/services/CatalogApiServices"


import { reactive, ref } from 'vue';

import CardProduct from "@/components/product/CardProduct.vue"

import type { iProduct } from '@/interface/IProduct';
const route = useRoute();
let productArray: iProduct[] = reactive([])
async function getProduct() {
    console.log(route.params.id)
    const productData = await getProductByCategory(route.params.id)
    productArray.splice(0, productArray.length, ...productData.data);
}
getProduct()
</script>

<style scoped>
.one_Category_Container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
