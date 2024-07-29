<template>
    <router-link to="/profile/ProfileView" class=" w-[40%] h-[100%] bg-slate-100 rounded-3xl duration-500 hover:scale-[1.03] shadow-xl">
        <div class="w-[100%] h-[75%]"></div>
        <div class="w-[90%] h-[25%] mx-auto">
            <p class="text-black text-[35px]">{{ date.name }}</p>
            <p class="c-end text-black text-[20px]">{{ date.value }}</p>
        </div>
    </router-link>
</template>

<script setup>
const date = 
{
    name: 'NONGDAMGOM',
    value: '농담곰',
};

</script>

<style scoped>
    
</style>