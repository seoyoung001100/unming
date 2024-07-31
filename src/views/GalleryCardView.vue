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
        name: 'TITLE01',
        text: 'text1 | text2',
        value: '/링크1',
        img: require('../assets/imges/sample.jpg'),

    },
    {
        name: 'TITLE02',
        text: 'text1 | text2',
        value: '/링크1',
        img: require('../assets/imges/sample.jpg')
    },
    {
        name: 'TITLE02',
        text: 'text1 | text2',
        value: '/링크1',
        img: require('../assets/imges/sample.jpg')
    },
];

</script>
<style scoped>
    
</style>