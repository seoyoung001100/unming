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
                <div class="w-[100%] h-auto" v-for="textinfo in info" :key="textinfo.id">
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
            name: 'KOO JUNGMO',
            value: '구정모',
        },
        {
            name: '24 age',
        },
        {
            name: 'CRAVITY',
            value: '크래비티 | 리드보컬',
        },
    ]
;

console.log('데이터 받아와요~',date)

const info = [
    {
        id: '1',
        text: '프로듀스 101 출신',
    },
    {
        id: '2',
        text: '4세대 아이돌 중 비주얼로 자주 언급되는 멤버',
    },
    {
        id: '3',
        text: '민초파이지만 파인애플 피자는 싫어한다.',
    },
    {
        id: '4',
        text: '닭발은 무섭게 생겨서 못 먹는다고 한다.',
    },
    {
        id: '5',
        text: '그 닭이 생전에 뭘 밟았을지 모른다고...',
    },
]

</script>

<style scoped>
    .vertical-lr{
        writing-mode: vertical-lr;
    }
</style>