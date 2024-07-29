<template>
    <router-link to="/profile/ProfileView" class=" w-[40%] h-[100%] bg-slate-100 rounded-3xl duration-500 hover:scale-[1.03] shadow-xl" v-for="item in props.date" :key="item">
        <div class="w-[100%] h-[75%]"></div>
        <div class="w-[85%] h-[25%] mx-auto">
            <p class="text-black text-[35px]">{{ item.name }}</p>
            <p class="c-end text-black text-[20px]">{{ item.text }}</p>
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