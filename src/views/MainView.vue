<template lang="">
    <!-- 메인 카드? 들 -->
    <span class="r-center-sb w-[100%] h-[90%]">
    <!-- 왼쪽의 이미지 구상 (세로로 길게 2개) -->
        <div class="r-center-se w-[22%] h-[100%]">
            <div class="center bg-imges-size bg-slate-100 w-[35%] h-[90%] -translate-y-6 translate-x-2 rounded-full "
            :style="{'background-image': `url(${imges[2].img || ''})`}"></div>
            <div class="center bg-imges-size bg-slate-100 w-[35%] h-[90%] translate-y-6 -translate-x-2 rounded-full "
            :style="{'background-image': `url(${imges[3].img || ''})`}"></div>
        </div>
        <!-- 중앙의 메인 카드 (가로로 2개가 들어 갈 예정)-->
        <div class="c-center-sb w-[56%] h-[100%]">
            <!-- main 이미지 -->
            <div class="center w-[100%] h-[80%]">
                <div class="bg-imges-size bg-slate-100 w-[95%] h-[85%] rounded-[10px]" 
                :style="{'background-image': `url(${imges[0].img || ''})`}"></div>
            </div>
            <!-- 헤더 이미지 느낌 -->
            <div class="c-center-sb w-[100%] h-[20%]">
                <div class="bg-imges-size bg-slate-100 w-[95%] h-[75%] rounded-[10px]"
                :style="{'background-image': `url(${imges[1].img || ''})`}"></div>
            </div>
        </div>

        <!-- 오른쪽 카드? 구역? -->
        <div class="w-[22%] h-[100%]">
            <div class=" w-[100%] h-[70%]">
                <!-- 오늘 날짜 -->
                <div class="w-[100%] h-[15.3%]">
                    <h1 class="center text-white text-[20px] mb-0.5 -translate-y-1">{{ currentTime }}</h1>
                    <hr class="mx-auto w-[85%] border-[0.5px]">
                </div>
                <!-- 기념일? 정보 -->
                <div class="r-end-sb w-[100%] h-[85%]">
                    <ItemList :date="date" />
                </div>
            </div>

            <!-- 날씨가 나오는 부분 -->
            <div class="r-center-se w-[100%] h-[30%]">
                <!-- 날씨 아이콘 -->
                <div class="center  w-[40%] h-[70%]">
                    <img  
                        :src="weatherIconHref"
                        alt="Weather Icon" 
                        class="w-[70px]"
                        />
                </div>
                <!-- 날씨 정보 -->
                <div class="c-center w-[60%] h-[70%]">
                    <h2 class="center text-white text-2xl whitespace-pre-wrap text-center">{{ weatherMain }}</h2>
                    <p class="center text-white whitespace-pre-wrap text-center">{{ weatherDescription }}</p>
                </div>
            </div>
        </div>
    </span>

    <!-- 제일 하단의 카테고리  -->
    <span class="r-center-se w-[50%] h-[10%] text-[#233964]" >
        <router-link  :to='categorys.value' v-for="categorys in category" :key="categorys.title" class="center bg-slate-50 w-[95px] h-[29px] rounded-full duration-500 hover:scale-105">
            <p class="text-[11px]">{{ categorys.title }}</p> 
        </router-link>
    </span>
</template>

<script setup>
import ItemList from '../components/ItemList.vue';
import axios from 'axios';
import dayjs from 'dayjs';
import "dayjs/locale/ko";
dayjs.locale("ko") //글로벌로 한국어를 사용한다
import { onMounted, ref } from 'vue'; 

const weatherMain = ref('');
const weatherDescription = ref('');
const weatherIcon = ref('');
const weatherIconHref = ref('');

const currentTime = dayjs().format("YYYY. MM. DD."); //오늘 날짜 받아오기

// 기념일? 데이터
const date = [
    {
        name: 'NONGDAMGOM',
        value: '2014. 08. 01',
    },
    {
        name: 'KOO JUNGMO',
        value: '2000. 02. 05',
    },
    {
        name: 'SHIN JUNGHWAN',
        value: '2003. 11. 07',
    },
]

const category = [
    {
        title: 'PROFILE',
        value: '/profile',
    },
    {
        title: 'TIME LINE',
        value: '/TimeLine',
    },
    {
        title: 'GALLERY',
        value: '/Gallery',
    },
    {
        title: '카테고리 4',
        value: '/',
    },
];
const imges = [
    {
        img: require('../assets/imges/main1.jpg'),
    },
    {
        img: require('../assets/imges/main2.jpg'),
    },
    {
        img: require('../assets/imges/sub1.jpg'),
    },
    {
        img: require('../assets/imges/sub2.jpg'),
    },
];

onMounted(() => {
    const API_KEY = "4f4fb916c1095a491beb67e9994ee715";
    let initialLat = 37.5642135;
    let initialLon = 127.0016985;

    //https://api.openweathermap.org/data/2.5/weather?lat=37.5642135&lon=127.0016985&appid=4f4fb916c1095a491beb67e9994ee715&units=metric
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_KEY}&units=metric`)
        .then(response => {
            let initalResponseData = response.data;
            console.log('원하는 값: ',initalResponseData.weather[0].icon);

            weatherMain.value = initalResponseData.weather[0].main;
            weatherDescription.value = initalResponseData.weather[0].description;
            weatherIcon.value = initalResponseData.weather[0].icon;

            // // assets 폴더가 components 폴더를 외부 폴더로 인식을 했기 때문에 경로를 제대로 인식하지 못했다
            // // require() 함수로 경로를 인코딩 후에 불러오면 잘 들어가진다
            weatherIconHref.value = require('../assets/icons/'+ weatherIcon.value+'.png'); 
        })
        .catch(error => {console.log(error);})
})
</script>
<style lang="">
    
</style>