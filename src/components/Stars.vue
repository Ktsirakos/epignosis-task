<template>
    <div v-if="props.mode === 'input'" class="flex flex-row gap-1">
        <Star 
            v-for="(_, index) in 5"
            :size="42" @mouseover="() => rating = index + 1" 
            :color="shouldShowStar(index) ? 'yellow' : ''"
        />
    </div>
    <div v-else class="flex flex-row gap-1">
        <Star color="yellow" v-for="_ in props.stars" />
    </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';
import { ref, watch } from 'vue';
const props = defineProps<{
    stars: number
    mode?: 'input' | 'presentation'
}>()

const emit = defineEmits(['change'])

const rating = ref(0)
const shouldShowStar = (starIndex: number) => {
    if (starIndex < rating.value) return true
}

watch(rating, (newRating, oldRating) => {
    console.log({newRating, oldRating})
    emit('change', newRating)
})
</script>