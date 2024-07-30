<template>
    <router-link to="/profile/ProfileView" class="bg-imges-size w-[32%] h-[85%] bg-slate-100 rounded-3xl duration-500 hover:scale-[1.02] shadow-lg" v-for="item in props.date" :key="item.name" :style="{'background-image': `url(${item.img || ''})`}">
        <div class="w-[100%] h-[75%]"></div>
        <div class="w-[85%] h-[25%] mx-auto">
            <p class="text-white text-[28px]">{{ item.name }}</p>
            <p class="c-end text-white text-[20px]">{{ item.text }}</p>
            <p class="c-end text-white text-[15px]">{{ item.position }}</p>
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