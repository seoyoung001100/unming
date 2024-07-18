<template>
    <div class="r-center-se w-[100%] h-[100%]">
        <div class="center w-[60%] h-[100%]">
            <img class="m-auto w-[70%]" src="../assets/imges/nongdamgom.png" alt="nongdamgom">
        </div>
        <!-- 이부분 겹쳐서 컴포넌트로 빼기 -->
        <div class="w-[40%] h-[100%]">
            <!-- info 1 -->
            <div class="r-end-sb w-[100%] h-[30%]">
                <div class="w-[90%] h-[100%]">
                    <div class="text-white w-[100%] h-1/3" v-for="initdete in date" :key="initdete.value">
                        <span class="c-end h-[100%]">
                            <p class="text-[16.7px]">{{ initdete.name }}</p>
                            <h3 class="text-[11px]">{{ initdete.value }}</h3> 
                        </span>
                        
                    </div>
                </div>
                <div class="w-[10%] h-[100%]">
                    <div class="center w-[100%] h-1/3" v-for="index in 3" :key="index">
                        <span class="center text-xl h-[100%] text-white">⟢</span>
                    </div>
                </div>
            </div>

            <!-- info 2 -->
            <div class="c-center text-white w-[100%] h-[30%] whitespace-pre-wrap text-end">
                <div class="w-[100%] h-auto" v-for="textinfo in info" :key="textinfo.id">
                    <h3>{{ textinfo.text }}</h3>
                </div>
            </div>

            <!-- info 3 수정 완 -->
            <div class="r-center-se w-[100%] h-[40%]">
                <div class="c-center-se w-[100%] h-[100%]" v-for="rowIndex in Math.ceil(table.length / 3)" :key="rowIndex">
                    <div class="r-center-se ltr w-[90%] h-[28%] rounded-3xl shadow-xl mx-auto my-[5px]" 
                        v-for="(item, colIndex) in table.slice((rowIndex - 1) * 3, rowIndex * 3)" 
                        :key="colIndex">
                        <div class="center bg-[#50ADD8] w-[30%] h-[100%] rounded-l-3xl vertical-lr text-white">
                            <h4>{{ item.text }}</h4>
                        </div>
                        <div class="center bg-white w-[70%] h-[100%] rounded-r-3xl text-[#50ADD8]">
                            <p class="text-[28px]">{{ item.value }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const date = [
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
];
const info = [
    {
        id: '1',
        text: '이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고',
    },
    {
        id: '2',
        text: '지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다.',
    },
]
const table =[
    {
        text: '기타',
        value: '10'
    },
    {
        text: '안녕',
        value: '70'
    },
    {
        text: '하세',
        value: '80'
    },
    {
        text: '요우',
        value: '100'
    },
    {
        text: '기타',
        value: '100'
    },
    {
        text: '기타',
        value: '100'
    },
    {
        text: '기타',
        value: '100'
    },
    {
        text: '기타',
        value: '100'
    },
    {
        text: '기타',
        value: '100'
    },
]

</script>

<style scoped>
    .vertical-lr{
        writing-mode: vertical-lr;
    }
</style>