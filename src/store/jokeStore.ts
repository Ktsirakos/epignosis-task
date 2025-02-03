import { defineStore } from "pinia"
import { ref } from "vue"
import type { Joke } from "@/interfaces/joke"

export const useJokeStore = defineStore('jokeStore', () => {
    const savedJokes = ref<Joke[]>([])

    const saveJoke = (joke?: Joke) => {
        if (!joke) return;
        savedJokes.value.push(joke)

        localStorage.setItem('jokes', JSON.stringify(savedJokes.value))
    }

    const removeJoke = (jokeId: number) => {
        savedJokes.value = savedJokes.value.filter(e => e.id !== jokeId)
    }

    const initStore = (data: Joke[]) => {
        savedJokes.value = data
    }

    return { savedJokes, initStore, saveJoke, removeJoke }
})