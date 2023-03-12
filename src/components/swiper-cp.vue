<template>
    <div v-if="swiperData !== []">
        <template v-if="swiperType === 'recentItem'">
            <div class="position-relative">
                <swiper :navigation="navigationParam(swiperNum)" :slidesPerView="4" :slidesPerGroup="4" :modules="modules" class="w-100 mx-auto">
                    <swiper-slide class="d-flex" @mouseover="changeRecentItem(index)" style="width: 265px; height: 92px;" v-for="dataCol, index in swiperData">
                        <div class="py-3 px-2 d-flex">
                            <img class="rounded-3 me-3" style="width: 60px; height: 60px;" :src='dataCol.image'>
                            <div class="">
                                <div class="fs-14">
                                    {{ dataCol.title }}
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div :class="[`swiper-${swiperNum}-prev`, 'start-0 swiper-buttom']">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDZsLTYgNi4wMDNMMTMuOTkzIDE4Ii8+Cjwvc3ZnPgo=" alt="prev">
                </div>
                <div :class="[`swiper-${swiperNum}-next`, 'start-100 swiper-buttom']">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDZsNiA2LjAwM0wxMC4wMDcgMTgiLz4KPC9zdmc+Cg==" alt="next">
                </div>
            </div>
            <div class="d-flex">
                <Card class="mx-auto" :data="dataCol" :styleWidth="'width: 237.5px;'" v-for="dataCol in swiperData[state.dataIndex]"></Card>
            </div>
        </template>
        <template v-else-if="swiperType !== 'banner'">
            <div class="position-relative">
                <swiper :navigation="navigationParam(swiperNum)" :slidesPerView="4" :slidesPerGroup="4" :spaceBetween="20" :modules="modules" class="w-100 mx-auto">
                    <template v-for="dataCol in swiperData">
                        <swiper-slide class="d-flex" v-if="swiperType === 'cityCard'">
                            <router-link 
                                :to="{name: 'cities', query: { name: dataCol.name, image: dataCol.image }}" 
                                class="position-relative overflow-hidden rounded-3" 
                                style="width: 250px; height: 333px;"
                            >
                                <img :src='dataCol.image' class="d-block h-100">
                                <div class="position-absolute top-0 start-0 h-100 w-100" style="background-image: linear-gradient(142deg,rgba(0,0,0,.7),hsla(0,0%,100%,0) 65%);"></div>
                                <div class="d-flex flex-column position-absolute top-0 start-0 text-white p-4 h-100 w-100">
                                    <div class="fs-2 fw-bold">
                                        {{ dataCol.name }}
                                    </div>
                                    <div class="fs-5 fw-bold">
                                        {{ dataCol.num }}여 개의 여행 상품
                                    </div>
                                    <button type="button" class="btn btn-light mt-auto me-auto">둘러보기</button>
                                </div>
                            </router-link>
                        </swiper-slide>
                        <swiper-slide class="d-flex" v-else>
                            <Card :data="dataCol" :styleWidth="'width: 250px;'"></Card>
                        </swiper-slide>
                    </template>
                </swiper>
                <div :class="[`swiper-${swiperNum}-prev`, 'start-0 swiper-buttom']">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDZsLTYgNi4wMDNMMTMuOTkzIDE4Ii8+Cjwvc3ZnPgo=" alt="prev">
                </div>
                <div :class="[`swiper-${swiperNum}-next`, 'start-100 swiper-buttom']">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDZsNiA2LjAwM0wxMC4wMDcgMTgiLz4KPC9zdmc+Cg==" alt="next">
                </div>
            </div>
        </template>
        <template v-else>
            <div class="position-relative">
                <swiper :pagination="true" :navigation="navigationParam(swiperNum)" :modules="modules" class="w-100 h-100 mx-auto">
                    <template v-for="bannerSrc in swiperData">
                        <swiper-slide>
                            <img class="w-100 rounded-3" :src=bannerSrc>
                        </swiper-slide>
                    </template>
                </swiper>
                <div :class="[`swiper-${swiperNum}-prev`, 'start-0 swiper-buttom']">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDZsLTYgNi4wMDNMMTMuOTkzIDE4Ii8+Cjwvc3ZnPgo=" alt="prev">
                </div>
                <div :class="[`swiper-${swiperNum}-next`, 'start-100 swiper-buttom']">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDZsNiA2LjAwM0wxMC4wMDcgMTgiLz4KPC9zdmc+Cg==" alt="next">
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';
import { defineProps, reactive } from 'vue';
import Card from '@/components/card.vue'

const navigationParam = (swiperNum) => {
    return {
        nextEl: `.swiper-${swiperNum}-next`,
        prevEl: `.swiper-${swiperNum}-prev`
    }
}

const state = reactive({
    dataIndex: 0
})

const props = defineProps({
    swiperData: Object,
    swiperType: String,
    swiperNum: Number
})

const modules = [Pagination, Navigation];

const changeRecentItem = (index) => { state.dataIndex = index; };


</script>

<style>
.swiper-buttom {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    padding-top: 6.5px;
    z-index: 10;
    cursor: pointer;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%), 0 4px 12px 0 rgb(0 0 0 / 5%);
}

</style>
