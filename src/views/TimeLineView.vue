<template lang="">
    <div class="r-center-sb w-[100%] h-[100%]">
        <!-- 타임라인 -->
        <div class="w-[20%] h-[100%] text-white">
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
                        <label class="w-[100%] h-[100%] r-start-sb duration-500 peer-checked:translate-x-5 peer-checked:text-[#233964]" :for="'radio-' + index" >
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

        <!-- 선택한 타임라인의 내용이 나오는 부분 -->
        <div class="center w-[80%] h-[100%]">
            <transition name="fade" mode="out-in">
                <p v-if="selectedText" :key="selectedTextKey" class="text-[#233964]">{{ selectedText }}</p>
                <p v-else class="text-[#233964]">텍스트가 없습니다.</p>
            </transition>
        </div>
    </div>
    
</template>

<script setup>
import { ref, computed } from 'vue';
const selected = ref(null);

const handleSelection = (index) => {
    selected.value = index;
};
const date = [
    {
        name: 'TITLE01',
        value: '2000. 01. 01',
        text: '첫번째 타임라인이 들어갑니다.'
    },
    {
        name: 'TITLE02',
        value: '2000. 02. 05',
        text: '두번째 타임라인이 들어갑니다.'
    },
    {
        name: 'TITLE03',
        value: '2003. 11. 08',
        text: '세번째 타임라인이 들어갑니다.'
    },
    {
        name: 'TITLE04',
        value: '2003. 11. 20',
        text: '네번째 타임라인이 들어갑니다.'
    },
    {
        name: 'TITLE05',
        value: '2003. 11. 01',
        text: '다섯번째 타임라인이 들어갑니다.'
    },
]

const selectedText = computed(() => {
    if (selected.value !== null && date[selected.value].text) {
        return date[selected.value].text;
    }
    return null;
});
const selectedTextKey = computed(() => {
    return selected.value !== null ? date[selected.value].text : null;
});
</script>

<style scoped>
    
.fade-enter-active, .fade-leave-active {
  /* transition: opacity 0.5s ease-in-out; */
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}
</style>