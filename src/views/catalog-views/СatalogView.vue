<template>

    <HeaderTextView :text="textHeaderCatalogPage"></HeaderTextView>
    <div class="listCatalog">
        <cardContainer v-for="OneCategory in categoryArray" :id="OneCategory.id" :imgCategory="OneCategory.imgCategory"
            :NameCategory="OneCategory.NameCategory">
        </cardContainer>
    </div>



</template>

<script setup lang="ts">
import { getCategory } from "@/services/CatalogApiServices"
import cardContainer from "./components/cardComponent.vue"
import HeaderTextView from '@/components/ui/HeaderTextView.vue';
import type { ICatalog } from "@/interface/ICatalog";
import { reactive, ref } from "vue";

let textHeaderCatalogPage = 'Каталог'
const categoryArray = ref<ICatalog[]>([]);
async function test() {

    categoryArray.value = await getCategory()

}
test()
</script>

<style scoped>
.listCatalog {

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transform: translateY(-150%);
    animation: ani forwards;
}

@keyframes ani {
    0% {
        transform: translateY(-150%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>@/services/CatalogApiServices