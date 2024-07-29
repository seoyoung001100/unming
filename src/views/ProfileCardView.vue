<template>
    <div class="r-center-se w-[100%] h-[100%]" >
        <ProfileCard :date="date"></ProfileCard>
    </div>
</template>

<script setup>
import ProfileCard from '../components/ProfileCard.vue';

const date = 
[
    {
        name: 'NONGDAMGOM',
        text: '농담곰',
        value: '/링크1',

    },
    {
        name: 'NONGDAMGOM1',
        text: '농담곰1',
        value: '/링크1',
    },
];

</script>
<style scoped>
    
</style>