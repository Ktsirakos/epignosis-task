<template>
    <div class="grid grid-rows-2 grid-cols-2 gap-2 items-start">
        <p class="text-start">Filters:</p>
        <div class="flex flex-row gap-4">
            <div class="flex flex-row gap-1 items-center" v-for="star in 5">
                <button @click="() => selectRatingFilter(star)" :class="`flex flex-row gap-1 
                ${selectedRating == star ? 'border-yellow-400 border-b-1 p-1 rounded-md' : ''}`">
                    {{ star }}
                    <Stars :stars="1" />
                </button>
            </div>
        </div>
        <p class="text-start">Sort by:</p>
        <div class="flex flex-row gap-4">
            <button @click="ascAlphabeticalOrder = true">
                <ArrowDownAz :color="ascAlphabeticalOrder ? 'yellow' : ''" />
            </button>
            <button @click="ascAlphabeticalOrder = false">
                <ArrowUpAz :color="!ascAlphabeticalOrder ? 'yellow' : ''" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDownAz, ArrowUpAz } from 'lucide-vue-next';
import Stars from '@/components/Stars.vue';
import { ref, watch } from 'vue';

const emit = defineEmits(['']) //fix that
const selectedRating = ref(0)
const ascAlphabeticalOrder = ref(true)

const selectRatingFilter = (index: number) => {
    if (selectedRating.value === index) {
        selectedRating.value = 0

        return;
    }

    selectedRating.value = index
}

watch(ascAlphabeticalOrder, (newOrder) => {
    if (newOrder) {

    } else {

    }
})
</script>