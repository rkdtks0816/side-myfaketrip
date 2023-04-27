<template>
    <router-link 
        :to="{name: 'offers', query: {title: data.title, image: data.image, category: data.category, price: data.price}}"
        class="overflow-hidden rounded-3 border" 
        :style="styleWidth"
    >
        <img :src='data.image' class="d-block w-100" style="height: 166px;">
        <div class="d-flex flex-column px-3 py-2 w-100" style="height: 145px;">
            <div class="fs-12 pb-1">
                {{ data.category + ' . ' + data.cityName}}
            </div>
            <div class="fs-15">
                {{ data.title }}
            </div>
            <div class="d-flex fs-12 mt-auto pb-1">
                <div class="me-1" v-if="data.reviewCount !== ''">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg>
                </div>
                {{ data.reviewCount }}
            </div>
            <div class="fs-6">
                {{ data.price.toFixed() }}원 / 1인
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    styleWidth: String,
    data: Object
})
</script>