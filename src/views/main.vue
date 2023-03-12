<template>
    <div>
        <headerCp></headerCp>
        <main class="d-flex">
            <div class="mx-auto mb-5" style="max-width: 1060px;">
                <section class="mb-5">
                    <div class="fs-1 fw-bold mt-5 mb-3">
                        여행이 돌아왔어요!
                    </div>
                    <swiperCp :swiperData="cityInfo" :swiperType="'cityCard'" :swiperNum="0"></swiperCp>
                </section>
                <section class="mb-5">
                    <swiperCp :swiperData="banner" :swiperType="'banner'" :swiperNum="1"></swiperCp>
                </section>
                <section>
                    <div class="fs-4 fw-bold mt-5 mb-3">
                        여행편의 상품
                    </div>
                    <swiperCp :swiperData="cateTravel" :swiperNum="2"></swiperCp>
                </section>
                <section>
                    <div class="fs-4 fw-bold mt-5 mb-3">
                        티켓/패스 상품
                    </div>
                    <swiperCp :swiperData="cateTicket" :swiperNum="3"></swiperCp>
                </section>
                <section>
                    <div class="fs-4 fw-bold mt-5 mb-3">
                        가이드 투어 상품
                    </div>
                    <swiperCp :swiperData="cateGuide" :swiperNum="4"></swiperCp>
                </section>
                <section>
                    <div class="fs-4 fw-bold mt-5 mb-3">
                        마이페이크트립의 여행 정보
                    </div>
                    <div class="d-flex bg-light border py-5" style="height: 196px;">
                        <div class="fs-14 mx-auto" style="width: 260px;" v-for="infoData in infoList">
                            <div class="mb-3">
                                <img :src="infoData.iconSrc">
                                <a class="ms-2 text-decoration-none" href="/" target="_blank" rel="noopener noreferrer">
                                    {{ infoData.title }}
                                    <img class="ms-1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgNyAxMCI+CiAgICA8cGF0aCBmaWxsPSIjM0U5MkQ2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDguNjI4TDMuODQ3IDQuNzguMjE5IDEuMTUzIDEuMzcyIDBsNC44MTQgNC44MTQtNSA1TDAgOC42Mjh6Ii8+Cjwvc3ZnPgo=">
                                </a>
                            </div>
                            <p class="text-start"> {{ infoData.data }} </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <footerCp></footerCp>
    </div>
</template>

<script setup>
import swiperCp from '@/components/swiper-cp.vue';
import footerCp from '@/components/footer-cp.vue';
import headerCp from '@/components/header-cp.vue';
import { onMounted, ref } from 'vue';

onMounted(()=>{
    loadcityInfo();
    loadbanner();
    loadCateTravelList();
    loadCateTicketList();
    loadCateGuideList();
})

let cityInfo = ref([])
let banner = ref([])
let cateTravel = ref([])
let cateTicket = ref([])
let cateGuide = ref([])


async function loadcityInfo() {
    let list = await getcityInfo()
    cityInfo.value = list
}

async function loadbanner() {
    let list = await getbanner()
    banner.value = list
}

async function loadCateTravelList() {
    let list = await getcategory('여행편의');
    cateTravel.value = list;
}
async function loadCateTicketList() {
    let list = await getcategory('티켓/패스');
    cateTicket.value = list;
}
async function loadCateGuideList() {
    let list = await getcategory('가이드 투어');
    cateGuide.value = list;
}



async function getcityInfo() {

    var rows = await $.ajax({
        url: `http://localhost:3000/cityInfo`,
        method: 'GET',
        dataType: 'json',    
    })
    
    return rows;
}

async function getbanner() {

    var rows = await $.ajax({
        url: `http://localhost:3000/banner`,
        method: 'GET',
        dataType: 'json',    
    })
    
    return rows;
}

async function getcategory(option) {

    var rows = await $.ajax({
        url: `http://localhost:3000/category/${encodeURIComponent(option)}`,
        method: 'GET',
        dataType: 'json',    
    })
    
    return rows;
}

let infoList = [
        {
            iconSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTE0Ljk5NCAzMGgxNC45OTRWLjAxMkgwVjMwaDE0Ljk5NHoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjM0M1QTk5IiBkPSJNMjguMzMzIDMwYy45MTQgMCAxLjY1NS0uNzQxIDEuNjU1LTEuNjU1VjEuNjY3YzAtLjkxNC0uNzQxLTEuNjU1LTEuNjU1LTEuNjU1SDEuNjU1Qy43NDEuMDEyIDAgLjc1MiAwIDEuNjY3djI2LjY3OEMwIDI5LjI1OS43NCAzMCAxLjY1NSAzMGgyNi42Nzh6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRUZFRkUiIGQ9Ik0yMC41ODMgMzBWMTguNTM1aDMuODI1bC41NzItNC40NjloLTQuMzk3di0yLjg1MmMwLTEuMjk0LjM1Ny0yLjE3NiAyLjItMi4xNzZoMi4zNTJWNS4wNGMtLjQwNy0uMDU0LTEuODAzLS4xNzYtMy40MjctLjE3Ni0zLjM5IDAtNS43MTEgMi4wODItNS43MTEgNS45MDZ2My4yOTVoLTMuODM1djQuNDY5aDMuODM1VjMwaDQuNTg2eiIvPgogICAgPC9nPgo8L3N2Zz4K',
            title: '마이리얼트립 페이스북 페이지',
            data: '마이리얼트립 페이스북 페이지에서 각 여행지별로 정리된 유용한 정보와 여행자분들을 위한 이벤트를 확인해보세요.'
        },
        {
            iconSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMjkuOTk2aDI5Ljk5Vi4wMUgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMwQTBCMDkiIGQ9Ik0xNC45OTUuMDFjLTQuMDcyIDAtNC41ODMuMDE3LTYuMTgyLjA5LTEuNTk2LjA3Mi0yLjY4Ni4zMjYtMy42NC42OTdhNy4zNSA3LjM1IDAgMCAwLTIuNjU2IDEuNzMgNy4zNSA3LjM1IDAgMCAwLTEuNzMgMi42NTVjLS4zNy45NTQtLjYyNCAyLjA0NC0uNjk3IDMuNjQtLjA3MyAxLjYtLjA5IDIuMTEtLjA5IDYuMTgzIDAgNC4wNzIuMDE3IDQuNTgzLjA5IDYuMTgyLjA3MyAxLjU5Ni4zMjcgMi42ODYuNjk3IDMuNjRhNy4zNSA3LjM1IDAgMCAwIDEuNzMgMi42NTYgNy4zNTEgNy4zNTEgMCAwIDAgMi42NTYgMS43M2MuOTU0LjM3IDIuMDQ0LjYyNCAzLjY0LjY5NyAxLjYuMDczIDIuMTEuMDkgNi4xODIuMDkgNC4wNzMgMCA0LjU4My0uMDE3IDYuMTgzLS4wOSAxLjU5Ni0uMDczIDIuNjg2LS4zMjcgMy42NC0uNjk3YTcuMzUxIDcuMzUxIDAgMCAwIDIuNjU2LTEuNzMgNy4zNTEgNy4zNTEgMCAwIDAgMS43My0yLjY1NmMuMzctLjk1NC42MjMtMi4wNDQuNjk2LTMuNjQuMDczLTEuNi4wOS0yLjExLjA5LTYuMTgyIDAtNC4wNzMtLjAxNy00LjU4My0uMDktNi4xODMtLjA3Mi0xLjU5Ni0uMzI2LTIuNjg2LS42OTctMy42NGE3LjM1MSA3LjM1MSAwIDAgMC0xLjczLTIuNjU2IDcuMzUgNy4zNSAwIDAgMC0yLjY1NS0xLjczYy0uOTU0LS4zNy0yLjA0NC0uNjI0LTMuNjQtLjY5Ni0xLjYtLjA3My0yLjExLS4wOS02LjE4My0uMDl6bTAgMi43MDFjNC4wMDQgMCA0LjQ3OC4wMTYgNi4wNi4wODggMS40NjIuMDY2IDIuMjU2LjMxIDIuNzg0LjUxNi43LjI3MiAxLjIuNTk3IDEuNzI0IDEuMTIyLjUyNS41MjQuODUgMS4wMjQgMS4xMjIgMS43MjQuMjA1LjUyOC40NSAxLjMyMi41MTYgMi43ODQuMDcyIDEuNTgyLjA4OCAyLjA1Ni4wODggNi4wNnMtLjAxNiA0LjQ3OC0uMDg4IDYuMDZjLS4wNjYgMS40NjEtLjMxIDIuMjU1LS41MTYgMi43ODQtLjI3Mi43LS41OTcgMS4xOTktMS4xMjIgMS43MjRhNC42NDUgNC42NDUgMCAwIDEtMS43MjQgMS4xMjFjLS41MjguMjA2LTEuMzIyLjQ1LTIuNzg0LjUxNy0xLjU4MS4wNzItMi4wNTYuMDg3LTYuMDYuMDg3cy00LjQ3OC0uMDE1LTYuMDYtLjA4N2MtMS40NjEtLjA2Ny0yLjI1NS0uMzExLTIuNzg0LS41MTctLjctLjI3Mi0xLjE5OS0uNTk3LTEuNzI0LTEuMTIxYTQuNjQ2IDQuNjQ2IDAgMCAxLTEuMTIxLTEuNzI0Yy0uMjA2LS41MjktLjQ1LTEuMzIzLS41MTctMi43ODUtLjA3Mi0xLjU4MS0uMDg3LTIuMDU1LS4wODctNi4wNiAwLTQuMDAzLjAxNS00LjQ3Ny4wODctNi4wNTkuMDY3LTEuNDYyLjMxMS0yLjI1Ni41MTctMi43ODQuMjcyLS43LjU5Ny0xLjIgMS4xMjEtMS43MjRhNC42NDUgNC42NDUgMCAwIDEgMS43MjQtMS4xMjJjLjUyOS0uMjA1IDEuMzIzLS40NSAyLjc4NS0uNTE2IDEuNTgxLS4wNzIgMi4wNTUtLjA4OCA2LjA2LS4wODh6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiMwQTBCMDkiIGQ9Ik0xNC45OTUgMjAuMDAzYTQuOTk4IDQuOTk4IDAgMSAxIDAtOS45OTcgNC45OTggNC45OTggMCAwIDEgMCA5Ljk5N3ptMC0xMi42OTlhNy43IDcuNyAwIDEgMCAwIDE1LjQwMSA3LjcgNy43IDAgMCAwIDAtMTUuNHpNMjQuOCA3YTEuOCAxLjggMCAxIDEtMy42IDAgMS44IDEuOCAwIDAgMSAzLjYgMCIvPgogICAgPC9nPgo8L3N2Zz4K',
            title: '마이리얼트립 인스타그램',
            data: '세계 곳곳에서 활동중인 마이리얼트립의 가이드님과 여행자분들이 보내주신 아름다운 사진을 감상해보세요.'
        },
        {
            iconSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwQzczQyIgZD0iTTAgMzBoMzBWMEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNy4zODUgMjEuODdsLTQuODMtNy4xMXY3LjExSDcuNVY4LjE0NWg1LjEzbDQuODMgNy4wOTVWOC4xNDVoNS4wNFYyMS44N3oiLz4KICAgIDwvZz4KPC9zdmc+Cg==',
            title: '마이리얼트립 네이버 블로그',
            data: '마이리얼트립의 네이버 블로그에서 리얼생생 여행정보, 여행 후기, 추천 가이드 정보를 확인해보세요.'
        }
    ]

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