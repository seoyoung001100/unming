<template>
    <router-link to="/profile/ProfileView" class="bg-imges-size w-[30%] h-[74%] bg-slate-400 rounded-3xl duration-500 hover:scale-[1.02] shadow-lg" v-for="item in props.date" :key="item.name" :style="{'background-image': `url(${item.img || ''})`}">
        <div class="w-[100%] h-[75%]"></div>
        <div class="c-center w-[100%] h-[25%] mx-auto bg-slate-50 rounded-b-3xl">
            <p class="text-[#233964] text-[28px]">{{ item.name }}</p>
            <p class="text-[#233964] text-[20px]">{{ item.text }}</p>
        </div>
    </router-link>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
    date : Array,
});

// console.log('데이터 보여줘라',props);

</script>

<style scoped>
</style>