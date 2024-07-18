<template lang="">
    <div class="r-center-sb w-[100%] h-[100%]">
        <!-- 타임라인 -->
        <div class="w-[20%] h-[100%]">
            <div class="w-[100%] h-[10%]">
                <p class="text-[28px]">TIME LINE</p>
            </div>
            <div class="r-start-sb w-[100%] h-[90%]">
                <div class="h-[100%]">
                    <div v-for="(initdete, index) in date" :key="initdete.value" class="w-[100%] h-1/5 ">
                        <input 
                            type="radio" 
                            :id="'radio-' + index" 
                            name="date-radio" 
                            class="hidden peer" 
                            @change="() => handleSelection(index)"
                        />
                        <label class="w-[100%] h-[100%] r-start-sb duration-500 peer-checked:translate-x-5" :for="'radio-' + index" >
                            <div class="center w-[10%] h-[100%]">
                                <div class="w-[100%]">
                                    <span class="text-xl h-[100%]">⟣</span>
                                </div>
                            </div>
                            <div class="w-[90%] h-[100%] ml-3">
                                <span class="c-start h-[100%]">
                                    <p class="text-[16.7px]">{{ initdete.name }}</p>
                                    <p class="text-[11px]">{{ initdete.value }}</p> 
                                </span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

        </div>

        <div class="bg-slate-200 w-[80%] h-[100%]"></div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
const selected = ref(null);

const handleSelection = (index) => {
    selected.value = index;
};
const date = [
    {
        name: 'TITLE01',
        value: '2014. 08. 01',
    },
    {
        name: 'TITLE02',
        value: '2000. 02. 05',
    },
    {
        name: 'TITLE03',
        value: '2003. 11. 07',
    },
    {
        name: 'TITLE04',
        value: '2003. 11. 07',
    },
    {
        name: 'TITLE05',
        value: '2003. 11. 07',
    },
]
</script>

<style scoped>
    
</style>