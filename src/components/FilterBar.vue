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
            <button @click="() => changeOrder('asc')">
                <ArrowDownAz :color="order === 'asc' ? 'yellow' : ''" />
            </button>
            <button @click="() => changeOrder('desc')">
                <ArrowUpAz :color="order === 'desc' ? 'yellow' : ''" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDownAz, ArrowUpAz } from 'lucide-vue-next';
import Stars from '@/components/Stars.vue';
import { ref } from 'vue';

export type Order = 'asc' | 'desc' | 'none'
const emit = defineEmits(['change']) //fix that
const selectedRating = ref(0)
const order = ref<Order>('none')

const selectRatingFilter = (index: number) => {
    order.value = 'none'
    if (selectedRating.value === index) {
        selectedRating.value = 0
        emit("change", {
            rating: 0
        })
        return;
    }

    selectedRating.value = index
    emit("change", {
        rating: index
    })
}

const changeOrder = (newOrder: Order) => {
    selectedRating.value = 0
    if (order.value === newOrder) {
        order.value = 'none'
        return;
    }

    order.value = newOrder
    emit('change', {
        order: newOrder
    })
}
</script>