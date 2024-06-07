<template>
    <div class="cardProductBlock">
        <div class="img_header">
            <img class="photo_header_block" :src="props.productData.img" alt="Картинка товара">
        </div>
        <div class="cardProduct_center_block">
            <div class="cardProduct_center_block_Cost">
                <p>Цена: {{ costProduct }}</p>
            </div>
            <div class="cardProduct_center_block_Description">
                <p>{{ props.productData.Name }}</p>
            </div>
        </div>
        <div class="cardProduct_center_block_Btn">
            <button class="btn_to_Backet" @click="goToOneProduct">Подробнее</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { type iProduct } from "@/interface/IProduct"
import router from "@/router";
import { ref } from "vue";

interface props {
    productData: iProduct
}

const props = defineProps<props>();

const costProduct = ref(props.productData.Cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))


function goToOneProduct() {

    router.push(`/oneProduct/${props.productData.id.toString()}`)
}
</script>

<style scoped>
.cardProductBlock {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 272px;
    height: 449px;
    border-radius: 4px;
    opacity: 0px;
    box-shadow: 1px 2px 4px 0px #0000001A;
    background: #FFFFFF;

}

.img_header {
    width: 272px;
    height: 160px;


}

.photo_header_block {
    width: 272px;
    height: 160px;
}

.cardProduct_center_block {
    padding: 8px;
}

.cardProduct_center_block_Cost p {
    color: #414141;
    font-family: Rubik;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    text-align: left;
}

.cardProduct_center_block_Description {
    margin-top: 8px;
}

.cardProduct_center_block_Description p {
    color: #414141;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

}

.btn_to_Backet {
    margin-left: 10px;
    width: 256px;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    border: 1px;
    border: 1px solid #70C05B;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: #70C05B;
    background-color: white;
}
</style>