<template>
    <div class="basket_Product_finaly_result">
        <div class="basket_Product_finaly_result_quantity">
            <div class="basket_Product_finaly_result_quantity_Text">{{ props.quantity }} товара</div>
            <div class="basket_Product_finaly_result_Cost">{{ cost }} ₽ </div>
        </div>
        <div class="basket_Product_finaly_result_Border"></div>
        <div class="basket_Product_finaly_result_Buy">
            <div class="basket_Product_finaly_result_quantity_Text">Итог</div>
            <div class="basket_Product_finaly_result_Cost_Byu">{{ cost }} ₽ </div>
        </div>
        <div class="basket_Product_finaly_result_BtnBuy">
            <button class="btnBuy" @click="buyProduct">Купить</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { postOrders } from '@/services/OrderApiServices'
import type { iAddToBacket } from '@/interface/IAddToBasket';
import { useUserStore } from '@/stores/User';
import { deleteBasketProduct } from '@/services/BasketApiServices';

interface iProps {

    cost: number,
    quantity: number,
    arrayId: number[]

}

const props = defineProps<iProps>()
const userStore = useUserStore()
const cost = ref(props.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))

function buyProduct() {
    const dataOrders: iAddToBacket = {
        userId: userStore.userData.id,
        productId: props.arrayId
    }
    postOrders(dataOrders)
    dataOrders.productId.forEach(Element => {
        deleteBasketProduct(userStore.userData.id, Element)
    })
    console.log(props.arrayId, 'массив ид продукта')
}

</script>

<style scoped>
.basket_Product_finaly_result {
    width: 272px;
    height: 470px;
    padding: 52px 0px 0px 0px;


}

.basket_Product_finaly_result_quantity {
    display: flex;
    justify-content: space-between;
}

.basket_Product_finaly_result_quantity_Text {

    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color:
        #8F8F8F;
}

.basket_Product_finaly_result_Cost {

    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: right;
    color:
        #414141;
}

.basket_Product_finaly_result_Border {
    margin-top: 24px;
    width: 272px;
    height: 2px;
    background: #F3F2F1;


}

.basket_Product_finaly_result_Buy {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
}

.basket_Product_finaly_result_Cost_Byu {
    color:
        #414141;
    font-family: Rubik;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: right;

}

.btnBuy {
    margin-top: 30px;
    width: 272px;
    height: 60px;
    padding: 16px;
    border-radius: 4px;
    background: #FCD5BA;
    font-family: Rubik;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    color: #FF6633;

}
</style>