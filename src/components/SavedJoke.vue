<template>
    <div class="flex flex-col gap-5 items-start border-black-100 border-2 p-5 rounded-xl">
        <p class="text-md">
            {{ props.joke.setup }}
        </p>
        <p class="text-2xl">
            {{ props.joke.punchline }}
        </p>
        <div class="divider" />
        <div class="flex flex-row justify-between w-full items-center">
            <Stars :stars="joke.rating" />
            <button class="flex flex-row gap-1 text-red-500" @click="() => jokeStore.removeJoke(joke.id)">
                <X />
                Delete
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { Joke } from '@/interfaces/joke';
import { useJokeStore } from '@/store/jokeStore';
import { X } from "lucide-vue-next"
import Stars from '@/components/Stars.vue'

const jokeStore = useJokeStore()
const props = defineProps<{
    joke: Joke
}>()
</script>

<style scoped>
.divider {
    height: 1px;
    width: 100%;
    background: grey;
}
</style>