<template>
  <HeaderTextView :text="textHeader"></HeaderTextView>
  <div v-if="orderIsNull">
    У вас нету закзов
  </div>
  <div class="listOrders">
    <div class="product" v-for="product in productDataArray">
  
      <ProductOrders :product-data="product"> </ProductOrders>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardProduct from "@/components/product/CardProduct.vue"
import HeaderTextView from '@/components/ui/HeaderTextView.vue';
import type { iProduct } from '@/interface/IProduct';
import { getOrdersByUser } from "@/services/OrderApiServices"
import { useUserStore } from "@/stores/User";
import { reactive, ref } from 'vue';

import ProductOrders from './components/ProductOrders.vue'

const textHeader = 'Заказы'

const orderIsNull = ref<boolean>(true)
const productDataArray: iProduct[] = reactive([])
const userStore = useUserStore()
async function getOrdersList() {

  const respons = await getOrdersByUser(Number(localStorage.getItem('id')))
  if (respons.data.length > 0) {
    productDataArray.splice(0, productDataArray.length, ...respons.data);
    orderIsNull.value = false
    console.log(respons)
  } else {
    orderIsNull.value = true
  }

}
getOrdersList()
</script>

<style scoped>
.listOrders {
  display: flex;
  justify-content: space-between;
}
</style>