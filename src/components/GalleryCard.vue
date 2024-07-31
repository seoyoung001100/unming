<template>
    <router-link to="/profile/ProfileView" class="w-[30%] h-[74%] bg-slate-300 rounded-3xl duration-500 hover:scale-[1.02] shadow-lg" v-for="item in props.date" :key="item.name">
        <div class="bg-imges-size w-[100%] h-[77%] rounded-t-3xl" :style="{'background-image': `url(${item.img || ''})`}"></div>
        <div class=" w-[100%] h-[23%] mx-auto bg-slate-50 rounded-b-3xl">
            <p class="text-[#233964] text-[25px] mx-[15px] pt-[10px]">{{ item.name }}</p>
            <p class="text-[#9faecb] text-[16px] mx-[15px]">{{ item.text }}</p>
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