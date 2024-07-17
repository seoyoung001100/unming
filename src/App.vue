<template>
    <body>
        <div id="container">
            <!-- 제일 상단의 구름 아이콘 -->
             <div class="pt-8 w-100% h-40">
                <router-link to="/">
                   <img id="cloud-icon" src="./assets/icons/cloud.png"/> 
                </router-link>
                <h1 class="center text-white text-2xl">Considerando</h1>  <!-- Considerando -->
             </div>
            
             <!-- 라우터 별로 나오는 컴포넌트 -->
             <div class="c-center-sb w-[1000px] h-[500px] mx-auto mt-0.4">
                <RouterView></RouterView>
             </div>
        </div>
    </body>
    
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
    body {
        margin: 0; /* 기본 여백 제거 */
        overflow: hidden;
        width: 100%;
        position: fixed; /* 화면 고정 */
    }
    h1{
        font-family: "Playwrite CU", cursive;
        font-optical-sizing: auto;
        font-weight: 335;
        font-style: normal;
    }
    h2{
        font-family: "Playwrite PE", cursive;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
    }
    h3{
        font-family: "IBM Plex Sans KR", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    p{
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
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
    .center{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .center-sb{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .center-se{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .c-end{
        display: flex;
        align-items: end;
        justify-content: center;
        flex-direction: column;
    }
    .c-center{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    #c-center-end{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
    }
    .c-end-sb{
        display: flex;
        align-items: end;
        justify-content: center;
        justify-content: space-between;
        flex-direction: column;
    }
    .c-center-sb{
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
    .r-center-se{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
    }
    .r-center-sb{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
    .r-end-sb{
        display: flex;
        align-items: end;
        justify-content: center;
        justify-content: space-between;
        flex-direction: row;
    }
</style>
