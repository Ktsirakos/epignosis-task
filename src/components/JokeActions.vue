<template>
    <div class="flex flex-1 items-center gap-10 w-full justify-center">
        <Switch @change="setJokeTypePreference" />
        <div class="w-0.5 bg-stone-500 h-1/2"></div>
        <IconButton alt-text="Get a new joke" title="Get a joke" @click="getAJoke">
            <template #icon>
                <RotateCw :class="`${loadingJoke ? 'animate-spin' : ''}`" :size="iconSize" />
            </template>
        </IconButton>
        <IconButton :disabled="!joke?.setup || isJokeAlreadySaved()" alt-text="Save joke"
            :title="isJokeAlreadySaved() ? 'Saved' : 'Save'" @click="() => emit('show-modal')">
            <template #icon>
                <Save :size="iconSize" />
            </template>
        </IconButton>
    </div>
</template>

<script setup lang="ts">
import type { Joke } from '@/interfaces/joke';
import { getGeneralJokes, getProgrammingJokes } from '@/services/api';
import { useJokeStore } from '@/store/jokeStore';
import IconButton from '@/components/IconButton.vue';
import { Save, RotateCw } from 'lucide-vue-next';
import { ref } from 'vue';
import Switch from './Switch.vue';

const emit = defineEmits(['show-modal', 'joke'])
const joke = ref<Joke | undefined>(undefined)
const jokeStore = useJokeStore()
const iconSize = 72
const loadingJoke = ref(false) //variable used to spin the loading button

const jokeFunc = ref<() => Promise<any>>(getGeneralJokes)

const setJokeTypePreference = (jokeType: 'general' | 'programming') => {
    switch (jokeType) {
        case "general": {
            jokeFunc.value = () => getGeneralJokes()
            return;
        }
        case "programming": {
            jokeFunc.value = () => getProgrammingJokes()
            return;
        }
    }
}

const isJokeAlreadySaved = () => {
    return !!jokeStore.savedJokes.find(e => e.id === joke.value?.id)
}
const getAJoke = async () => {
    loadingJoke.value = true
    joke.value = await jokeFunc.value()
    emit('joke', joke.value)
    loadingJoke.value = false
}
</script>