<template>
    <div class="bg-image" :style="`background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('${route.query.image}'); background-size: cover; background-position: center center;`">
        <header-cp></header-cp>
        <div class="mx-auto mb-5 text-center text-white pt-5 fw-bold" style="font-size: 54px; max-width: 1060px; height: 220px;">
            {{ route.query.name }}
        </div>
    </div>
    <main>
        <section class="mx-auto mb-5" style="max-width: 1060px;">
            <swiperCp :swiperData="cityData" :swiperNum="0"></swiperCp>
        </section>
    </main>
    <footer-cp></footer-cp>
</template>

<script setup>
import swiperCp from '@/components/swiper-cp.vue';
import footerCp from '@/components/footer-cp.vue';
import headerCp from '@/components/header-cp.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const address = 'http://59.3.14.15:8012'

onMounted(()=>{
    loadCityData();
})

let cityData = ref([])


async function loadCityData() {
    let list = await getcityData(route.query.name);
    cityData.ve = list;
}

async function getcityData(option) {

    var rows = await $.ajax({
        url: `${address}/cityName/${encodeURIComponent(option)}`,
        method: 'GET',
        dataType: 'json',    
    })

    return rows;
}

</script>

<style>
.info ul,
.info-nav ul {
    margin-top: 10px;
}
.info li {
    align-items: center;
    border: 0;
    padding: 0;
    color: #666d75;
    font-size: 14px;
    font-weight: 500;
}
.info-nav li {
    height: 32px;
    align-items: center;
    border: 0;
    padding: 0;
    color: #666d75;
    font-size: 14px;
    font-weight: 500;
}
.info-icon {
    margin: 0px 10px;
    height: 100%;
    color: rgb(206, 212, 218);
}
.info-icon img {
    height: 20px;
    width: 20px;
    margin: auto 10px;
}
.fs-12 {
    font-size: 12px;
    color: #848c94;
}
.fs-14 {
    color: #666d75;
    font-size: 14px;
    font-weight: 500;
}
.fs-15 {
    font-size: 15px;
    color: #343a40;
    font-weight: 600;
}
.fs-18 {
    font-size: 18px;
    font-weight: bold;
    color: rgb(102, 109, 117);
}
</style>