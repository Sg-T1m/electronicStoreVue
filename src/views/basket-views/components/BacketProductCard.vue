<template>
    <div v-if="!isDelete" class="Backet_Product_Container">
        <div class="Backet_Product_Container_imgProduct">
            <img :src="productData.img" alt="">
        </div>
        <div class="Backet_Product_Container_Info">
            <div class="Product_Container_TextProduct_Header">{{ props.productData.Name }}</div>
            <div class="Product_Container_TextProduct_Cost">
                <p class="Product_Container_TextProduct_Money">{{ costProduct }} ₽</p>
                <p class="Product_Container_TextProduct_Text">за шт.</p>
            </div>
        </div>
        <div class="Backet_Product_Container_Btn">
            <div class="Backet_Product_Container_Btn_Counter_Product">
                <button class="Backet_Product_Container_Btn_Counter_Product_Delete"
                    @click="deleteProduct">Удалить</button>

            </div>
            <div class="Backet_Product_Container_Btn_Finaly_Cost">
                {{ costProduct }} ₽
            </div>

        </div>
    </div>
    <Messange v-model:isWisible="messangeVisible" v-model:text="textMessange" v-model:color="collorMessange">
    </Messange>
</template>

<script setup lang="ts">
import type { iProduct } from '@/interface/IProduct';
import { ref } from 'vue';
import { deleteBasketProduct } from "@/services/BasketApiServices"
import { useUserStore } from '@/stores/User';
import Messange from '@/components/ui/Messange.vue'
const isDelete = ref<boolean>(false)

const userStore = useUserStore()

const messangeVisible = ref<boolean>(false)
const textMessange = ref<string>('error')
const collorMessange = ref<string>('red')


interface iPrors {
    productData: iProduct
}
const props = defineProps<iPrors>()
const costProduct = ref(props.productData.Cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
async function deleteProduct() {
    const response = await deleteBasketProduct(userStore.userData.id, props.productData.id)
    if (response.status >= 300) {
        messangeVisible.value = true;
        textMessange.value = response.data
        collorMessange.value = 'red'
        console.log('error')
    } else {
        messangeVisible.value = true;
        textMessange.value = 'товар успешно удалён'
        collorMessange.value = 'green'
        isDelete.value = true
    }

}
</script>

<style scoped>
.Backet_Product_Container {

    margin-top: 24px;
    width: 876px;
    height: 82px;
    border-radius: 4px;
    background: #FFFFFF;
    box-shadow: 1px 2px 4px 0px #0000001A;
    display: flex;
    justify-content: space-between;

}

.Backet_Product_Container_imgProduct {
    width: 80px;
    height: 72px;
}

.Backet_Product_Container_imgProduct img {
    width: 80px;
    height: 60px;
    box-shadow: 1px 2px 4px 0px #0000001A;

}

.Backet_Product_Container_Info {

    width: 536px;
    height: 72px;
    padding: 10px 0px 10px 0px;
    gap: 10px;
}

.Backet_Product_Container_Btn {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    display: flex;
    width: 236px;
    height: 67px;
    gap: 16px;


}

.Product_Container_TextProduct_Header {

    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    color:
        #414141;

}

.Product_Container_TextProduct_Money {

    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: #414141;
    ;
}

.Product_Container_TextProduct_Text {

    font-family: Rubik;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    color: #606060;
}

.Product_Container_TextProduct_Cost {
    display: flex;
    justify-content: space-between;
    width: 87px;
}

.Backet_Product_Container_Btn_Counter_Product {
    display: flex;
    width: 100px;
    height: 60px;


}


.Backet_Product_Container_Btn_Counter_Product_Delete {
    width: 100px;
    height: 40px;
    background: #70C05B;
    /* border-radius: 4px; */
    color: white;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;

}

.Backet_Product_Container_Btn_Counter_Product_Result {
    width: 30px;
    height: 40px;
    background: #70C05B;
    align-items: center;
    display: flex;
}

.Backet_Product_Container_Btn_Counter_Product_Result p {
    color: white;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    width: 100%;
}

.Backet_Product_Container_Btn_Finaly_Cost {
    color:
        #414141;
    font-family: Rubik;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    text-align: right;

}

.Backet_Product_Container_imgProduct_CheckBox {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background: #70C05B;
    color: #70C05B;
    border: 1px solid #F3F2F1;
    position: relative;
    top: -70px;
    left: 10px;
}
</style>