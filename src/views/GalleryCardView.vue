<template>
    <div class="r-center-se w-[100%] h-[100%]" >
        <GalleryCard :date="date"></GalleryCard>
    </div>
</template>

<script setup>
import GalleryCard from '../components/GalleryCard.vue';

const date = 
[
    {
        name: 'KOO JUNGMO',
        text: '크래비티 | 구정모',
        position: '리드보컬',
        value: '/링크1',
        // img: require('../assets/imges/koojungmo1.png'),

    },
    {
        name: 'SHIN JUNGHWAN',
        text: '투어스 | 신유',
        position: '리더 | 메인래퍼',
        value: '/링크1',
        // img: require('../assets/imges/shinjunghwan.jpg')
    },
    {
        name: 'SHIN JUNGHWAN',
        text: '투어스 | 신유',
        position: '리더 | 메인래퍼',
        value: '/링크1',
        // img: require('../assets/imges/shinjunghwan.jpg')
    },
];

</script>
<style scoped>
    
</style>