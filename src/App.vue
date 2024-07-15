<template>
    <body>
        <div id="container">
            <!-- 제일 상단의 구름 아이콘 -->
             <div class="pt-8 w-100% h-40">
                <img id="cloud-icon" src="./assets/icons/cloud.png"/>
                <h1 id="center" class="text-white text-2xl">Considerando</h1>  <!-- Considerando -->
             </div>
            

            <!-- 메인 카드? 들 -->
             <div id="c-center-sb" class="w-[1000px] h-[500px] mx-auto mt-0.4">
                 <span id="r-center-sb" class=" w-[100%] h-[90%]">
                    <!-- 왼쪽의 이미지 구상 (세로로 길게 2개) -->
                    <div id="r-center-se" class=" w-[22%] h-[100%]">
                        <div id="center" class="bg-slate-100 w-[35%] h-[90%] -translate-y-6 translate-x-2 rounded-full "></div>
                        <div id="center" class="bg-slate-100 w-[35%] h-[90%] translate-y-6 -translate-x-2 rounded-full "></div>
                    </div>
                    <!-- 중앙의 메인 카드 (가로로 2개가 들어 갈 예정)-->
                    <div id="c-center-sb" class=" w-[56%] h-[100%]">
                        <!-- main 이미지 -->
                        <div id="center" class=" w-[100%] h-[80%]">
                            <div class="bg-slate-100 w-[95%] h-[85%] rounded-[10px]"></div>
                        </div>
                        <!-- 헤더 이미지 느낌 -->
                        <div id="c-center-sb" class=" w-[100%] h-[20%]">
                            <div class="bg-slate-100 w-[95%] h-[75%] rounded-[10px]"></div>
                        </div>
                    </div>
                    <!-- 오른쪽의 목록 구상 (뭘 넣을지는 딱히 못 정했음...)-->
                    <div id="c-center-sb" class=" w-[22%] h-[100%]">
                        <div class=" w-[100%] h-[70%]">
                            <!-- 오늘 날짜 -->
                            <div class="w-[100%] h-[15.3%]">
                                <h1 id="center" class="text-white text-[20px] mb-0.5 -translate-y-1">{{ currentTime }}</h1>
                                <hr class="mx-auto w-[85%] border-[0.5px]">
                            </div>
                            <!-- 기념일? 정보 -->
                            <div id="r-end-sb" class="w-[100%] h-[85%]">
                                <div class="w-[90%] h-[100%]">
                                    <div id="c-end-sb" class="text-white w-[100%] h-1/3" v-for="initdete in date" :key="initdete.value">
                                        <span id="c-center" class="h-[100%]">
                                            <h2 class="text-[16.7px]">{{ initdete.name }}</h2>
                                            <p class="text-[11px]">{{ initdete.value }}</p> 
                                        </span>
                                        
                                    </div>
                                </div>
                                <div class="w-[10%] h-[100%]">
                                    <div id="c-end-sb" class="w-[100%] h-1/3" v-for="index in 3" :key="index">
                                        <span id="center" class="text-xl h-[100%] text-white">⟢</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <!-- 날씨가 나오는 부분 -->
                        <div class="bg-slate-500 w-[100%] h-[30%]"></div>
                    </div>
                 </span>

                 <!-- 제일 하단의 카테고리 -->
                 <span id="r-center-se" class="w-[50%] h-[10%]" >
                    <div v-for="categorys in category" :key="categorys.title" id="center" class="bg-slate-50 w-[95px] h-[29px] rounded-full">
                        <p class="text-[11px]">{{ categorys.title }}</p>
                    </div>
                 </span>
                
             </div>
        </div>
    </body>
    
</template>

<script setup>
import axios from 'axios';
import dayjs from 'dayjs';
import "dayjs/locale/ko";
dayjs.locale("ko") //글로벌로 한국어를 사용한다
import { onMounted } from 'vue'; 

// const cityName = ref('');
// const mainTemp = ref('');
// const weatherMain = ref('');
// const weatherDescription = ref('');
// const weatherIcon = ref('');
// const weatherIconHref = ref('');

const currentTime = dayjs().format("YYYY. MM. DD."); //오늘 날짜 받아오기

// 기념일? 데이터
const date = [
    {
        name: 'LEE SEOYOUNG',
        value: '2004. 08. 26',
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
        title: '카테고리 1',
    },
    {
        title: '카테고리 2',
    },
    {
        title: '카테고리 3',
    },
    {
        title: '카테고리 4',
    },
]

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

            // cityName.value = initalResponseData.name;
            // mainTemp.value = initalResponseData.main.temp;

            // temporaryData[0].value = initalResponseData.main.humidity + '%';
            // temporaryData[1].value = initalResponseData.wind.speed + 'm/s';
            // temporaryData[2].value = Math.round(initalResponseData.main.feels_like) + "°";

            // weatherMain.value = initalResponseData.weather[0].main;
            // weatherDescription.value = initalResponseData.weather[0].description;
            // weatherIcon.value = initalResponseData.weather[0].icon;

            // // assets 폴더가 components 폴더를 외부 폴더로 인식을 했기 때문에 경로를 제대로 인식하지 못했다
            // // require() 함수로 경로를 인코딩 후에 불러오면 잘 들어가진다
            // weatherIconHref.value = require('../assets/images/'+ weatherIcon.value+'.png'); 
        })
        .catch(error => {console.log(error);})
})

</script>

<style scoped>
    body {
        margin: 0; /* 기본 여백 제거 */
        overflow: hidden; /* 스크롤 숨기기 */
    }
    h1{
        font-family: "Playwrite CU", cursive;
        font-optical-sizing: auto;
        font-weight: 335;
        font-style: normal;
    }
    #container {
        background-image:
         linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.814)),
         url('./assets/cloud/cloud-bg2.jpg');
        height: 100vh; 
        position: relative;
        background-position: center center; /* 배경 이미지와 그라데이션 위치 조정 */
        background-size: cover; /* 배경 이미지와 그라데이션 크기 조정 */
        background-repeat: no-repeat; /* 배경 이미지 반복 방지 */
    }
    #cloud-icon{
        width: 50px;
        margin: auto;
        display: block; 
    }


    /* ---------- 기본적인 큰 스타일 지정 세부적인 조절은 테일윈드를 사용한다. ---------- */
    #center{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #center-sb{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #center-se{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    #c-center{
        display: flex;
        align-items: end;
        justify-content: center;
        flex-direction: column;
    }
    #c-center-end{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
    }
    #c-end-sb{
        display: flex;
        align-items: end;
        justify-content: center;
        justify-content: space-between;
        flex-direction: column;
    }
    #c-center-sb{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }
    #c-center-se{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }
    #r-center-se{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
    }
    #r-center-sb{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
    #r-end-sb{
        display: flex;
        align-items: end;
        justify-content: center;
        justify-content: space-between;
        flex-direction: row;
    }
</style>
