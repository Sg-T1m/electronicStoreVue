<template>
    <div class="porduct_info_container">
        <div class="porduct_info_container_elemGray">
            <div class="porduct_info_container_elemGray_Name">Компания</div>
            <div class="porduct_info_container_elemGray_Value">{{ props.company }}</div>
        </div>
        <div class="porduct_info_container_elemNo">
            <div class="porduct_info_container_elemGray_Name">Страна</div>
            <div class="porduct_info_container_elemGray_Value">{{ props.countries }}</div>
        </div>
        <div class="porduct_info_container_elemGray">
            <div class="porduct_info_container_elemGray_Name">Цвет</div>
            <div class="porduct_info_container_elemGray_Value">{{ props.Collor }}</div>
        </div>
        <div class="porduct_info_container_elemNo">
            <div class="porduct_info_container_elemGray_Name">Вес</div>
            <div class="porduct_info_container_elemGray_Value">{{ props.weight }}</div>
        </div>
        <div class="porduct_info_container_elemGray">
            <div class="porduct_info_container_elemGray_Name">Основной материал</div>
            <div class="porduct_info_container_elemGray_Value">{{ props.MainMaterial }}</div>
        </div>
    </div>

</template>

<script setup lang="ts">

interface props {
    company: string,
    countries: string,
    Collor: string,
    weight: number,
    MainMaterial: string
}

const props = defineProps<props>()

</script>
<style scoped>
.porduct_info_container {
    margin-top: 20px;
    width: 370px;
}

.porduct_info_container_elemGray {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 26px;
    background: #F3F2F1;

}

.porduct_info_container_elemGray div {
    width: 50%;
}

.porduct_info_container_elemGray_Name {
    color: #414141;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;


}

.porduct_info_container_elemGray_Value {
    color: #414141;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;

}

.porduct_info_container_elemNo {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 26px;
}

.porduct_info_container_elemNo div {
    width: 50%;
}
</style>