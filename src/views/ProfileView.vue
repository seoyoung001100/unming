<template>
    <div class="r-center-se w-[100%] h-[100%]">
        <div class="center w-[60%] h-[100%]">
            <img class="m-auto w-[70%]" src="../assets/imges/nongdamgom.png" alt="nongdamgom">
        </div>
        <!-- 이부분 겹쳐서 컴포넌트로 빼기 -->
        <div class="w-[40%] h-[100%]">
            <!-- info 1 -->
            <div class="r-end-sb w-[100%] h-[30%]">
                <ItemList :date="date" />
            </div>

            <!-- info 2 -->
            <div class="c-center text-white w-[100%] h-[70%] whitespace-pre-wrap text-end">
                <div class="w-[100%] my-1 h-auto" v-for="textinfo in info" :key="textinfo.id">
                    <h3>{{ textinfo.text }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { ref } from 'vue';
import ItemList from '../components/ItemList.vue';

const date = 
    [
        {
            name: 'NONGDAMGOM',
            value: '농담곰',
        },
        {
            name: '10 age',
        },
        {
            name: 'GOM',
            value: '왜 이름이 농담곰이지',
        },
    ]
;

console.log('데이터 받아와요~',date)

const info = [
    {
        id: '1',
        text: '농담곰은 엉뚱하게도 자신이 하는 행동에 스스로 딴지를 걸고 있는, 유쾌, 상쾌, 통쾌하고 귀여운 장난꾸러기 곰이다.',
    },
    {
        id: '2',
        text: '‘기쁨’이나 ‘부러움’과 같이 자신이 가진 내면의 감정을 굳이 말로 표현하지 않으면서, 캡션을 통해 간접적·객관적으로 자신의 기분을 표현하고 있는 것이 바로 이 장난꾸러기 곰의 특징이다.',
    },
    {
        id: '3',
        text: '일본명은 自分ツッコミくま로써 직역하면 "스스로 츳코미하는 곰"인데, 츳코미라는 표현을 그대로 쓰기도 어렵고, 설명하기도 다소 복잡하다 보니 영문명 joke bear를 국내로 들여오면서 그대로 받아들여 농담곰이란 이름을 채택한 듯하다.',
    },
    {
        id: '4',
        text: '',
    },
    {
        id: '5',
        text: '',
    },
]

</script>

<style scoped>
    .vertical-lr{
        writing-mode: vertical-lr;
    }
</style>