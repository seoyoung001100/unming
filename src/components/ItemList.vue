<template lang="">
    <div class="w-[90%] h-[100%]">
        <div class="text-white w-[100%] h-1/3" v-for="item in props.date" :key="item">
            <span class="c-end h-[100%]">
                <p class="text-[16.7px]"> {{item.name}}</p>
                <h3 class="text-[11px]"> {{item?.value}}</h3> 
            </span>
        </div>
    </div>
    <div class="w-[10%] h-[100%]">
        <div class="center w-[100%] h-1/3" v-for="index in 3" :key="index">
            <span class="center text-xl h-[100%] text-white">⟢</span>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from "vue"

const props = defineProps({
    date : Array,
});

console.log('데이터 보여줘라~',props);
</script>
<style>
    
</style>