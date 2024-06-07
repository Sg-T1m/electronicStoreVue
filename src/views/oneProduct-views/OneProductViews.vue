<template>
    <!-- <HeaderTextView :></HeaderTextView> -->
    <OneProductCard :id="idProduct"></OneProductCard>
</template>

<script setup lang="ts">

import HeaderTextView from '@/components/ui/HeaderTextView.vue';
import OneProductCard from "./components/OneProductCard.vue"

import { useRoute } from 'vue-router';

import { getOneProduct } from '@/services/ProductApiServices';
import router from '@/router';
import { reactive, ref } from 'vue';
import type { iProduct } from '@/interface/IProduct';
// const textHeader = ''

const route = useRoute();
const idProduct = <string | string[]>(route.params.id)
async function test() {
    const productData = await getOneProduct(route.params.id)

    // if (productData.status >= 400) {
        // router.push('/')
        // } else {

        //     product.value = await productData.data
        //     console.log(product.value, 'xui3')
        //     console.log('good')
        // }
    // }
}
test()
</script>

<style scoped></style>