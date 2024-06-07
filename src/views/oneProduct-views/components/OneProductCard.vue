<template>
    <TextHeaderProductCard :text="productData!.Name"></TextHeaderProductCard>
    <div class="One_Product_Card_Main">
        <div><img class="imgProduct" :src="productData!.img"></div>
        <div class="xyi">
            <div class="costProduct">
                <div>Цена:</div>
                <div> {{ costProduct }} ₽</div>
            </div>
            <div class="btnBlock">
                <BtnToBasket @click="addToBasketProduct"></BtnToBasket>
                <OneProductInfoProduct :company="productData!.company" :countries="productData!.countries"
                    :Collor="productData!.Collor" :weight="productData!.weight"
                    :MainMaterial="productData!.MainMaterial"></OneProductInfoProduct>
            </div>
        </div>
    </div>
    <div class="ProductOneDescription">
        <div class="ProductOneDescription_Header">
            Описание:
        </div>
        <div class="ProductOneDescription_Text">
            {{ productData!.description }}
        </div>

    </div>
    <Messange v-model:isWisible="isWisible" v-model:text="textMassangeError" v-model:color="colorError"></Messange>
</template>
<script setup lang="ts">
import type { iProduct } from '@/interface/IProduct';

import TextHeaderProductCard from "./TextHeaderProductCard.vue"
import BtnToBasket from "@/components/ui/BtnToBasket.vue"
import OneProductInfoProduct from "./OneProductInfoProduct.vue"
import Messange from '@/components/ui/Messange.vue'

import { ref } from 'vue';
import { useAutorisationStore } from '@/stores/Autorisation';
import { getOneProduct } from '@/services/ProductApiServices';

import { addToBasket } from "@/services/BasketApiServices"
import type { iAddToBacket } from '@/interface/IAddToBasket';
import { useUserStore } from '@/stores/User';

const isWisible = ref<boolean>(false)
const colorError = ref<string>('red')
const textMassangeError = ref<string>('вы не авторизованы')

interface props {

    id: string | string[]
}

let authStore = useAutorisationStore()
let userStore = useUserStore()

const props = defineProps<props>()
const productData = ref<iProduct>({
    id: 0,
    Name: '',
    Cost: 0,
    img: '',
    description: '',
    company: '',
    countries: '',
    weight: 0,
    MainMaterial: '',
    Collor: ''
})

async function addToBasketProduct() {
    if (!authStore.isAuth) {
        isWisible.value = true
    } else {
        let basketData: iAddToBacket = {
            userId: userStore.userData.id,
            productId: [productData.value.id]
        }
        let responseAddToBasket = await addToBasket(basketData)
        if (responseAddToBasket.statusCode >= 300) {
            console.log(responseAddToBasket)
            isWisible.value = true
            colorError.value = 'red'
            textMassangeError.value = responseAddToBasket.message
        } else {
            isWisible.value = true
            colorError.value = 'green'
            textMassangeError.value = responseAddToBasket.data.message
            console.log(responseAddToBasket)
        }
    }
}
const costProduct = ref()
async function loadProduct() {
    productData.value = await getOneProduct(props.id)
    costProduct.value = productData.value!.Cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}
loadProduct()

</script>

<style scoped>
.One_Product_Card_Main {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 1009px;
    height: 596px;


}

.imgProduct {
    width: 504px;
    height: 496px;
}

.costProduct {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: Rubik;
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
    text-align: left;
    color: #414141;
    float: right;
    margin-top: 70px;
}

.btnBlock {
    margin-top: 70px;
}

/* .ProductOneDescription {
    color:
        #414141;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

} */

.ProductOneDescription_Header {
    font-family: Rubik;
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
    text-align: left;
    color: #414141;

}

.ProductOneDescription_Text {

    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #414141;
}
</style>
