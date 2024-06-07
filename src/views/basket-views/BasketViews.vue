<template>
    <HeaderTextView :text="textHeader"></HeaderTextView>
    <div v-if="basketIsNull">
        корзина пуста
    </div>
    <div v-else class="backet_product_main">

        <div>
            <div class="productContainer" v-for="oneProduct in productDataArray">
                <BacketProductCard :productData="oneProduct"></BacketProductCard>
            </div>
        </div>
        <BasketProductFinalyResult v-model:arrayId="arrayIdProduct" v-model:cost="finalyResul.cost"
            v-model:quantity="finalyResul.quantity">
        </BasketProductFinalyResult>
    </div>

</template>

<script setup lang="ts">
import BasketProductFinalyResult from './components/BasketProductFinalyResult.vue'
import HeaderTextView from '@/components/ui/HeaderTextView.vue';
import BacketProductCard from "./components/BacketProductCard.vue"


import { getBasketProduct } from "@/services/BasketApiServices"
import { useUserStore } from '@/stores/User';


import { onBeforeMount, onMounted, onUpdated, reactive, ref } from 'vue';
import type { iProduct } from '@/interface/IProduct';

const userDataStore = useUserStore()

const basketIsNull = ref<boolean>(true)

const productDataArray: iProduct[] = reactive([])
const finalyResul = reactive({
    cost: 0,
    quantity: 0
})


const textHeader = 'Корзина'

// async function getProductByBasket() {
//     console.log('reload')
//     const respons = await getBasketProduct(userDataStore.userData.id)
//     if (respons.data.length > 0) {
//         console.log('xyu13')
//         productDataArray.splice(0, productDataArray.length, ...respons.data);
//         basketIsNull.value = false
//         console.log(basketIsNull.value)
//         calculatingAllCost(productDataArray)
//     } else {
//         console.log(respons)
//         console.log('xyu15')
//         basketIsNull.value = true
//     }
// }
// // getProductByBasket()

onBeforeMount(async () => {

    const respons = await getBasketProduct(Number(localStorage.getItem('id')))
    if (respons.data.length > 0) {
        productDataArray.splice(0, productDataArray.length, ...respons.data);
        basketIsNull.value = false
        calculatingAllCost(productDataArray)

        productDataArray.forEach(Element => {
            arrayIdProduct.push(Element.id)
        })


    } else {


        basketIsNull.value = true
    }
})

const arrayIdProduct: number[] = []

function calculatingAllCost(arrayDataProduct: iProduct[]) {
    let result: number = 0
    arrayDataProduct.forEach(Element => {
        result = result + Element.Cost
    })

    finalyResul.cost = result
    finalyResul.quantity = arrayDataProduct.length
}

</script>

<style scoped>
.backet_product_main {
    display: flex;
    justify-content: space-between;
}

.productContainer {

    display: flex;
    flex-direction: column;
}
</style>