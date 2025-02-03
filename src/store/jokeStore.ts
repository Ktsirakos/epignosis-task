import { defineStore } from "pinia"
import { ref } from "vue"
import type { Joke } from "@/interfaces/joke"

export const useJokeStore = defineStore('jokeStore', () => {
    const savedJokes = ref<Joke[]>([])

    const saveJoke = (joke?: Joke) => {
        if (!joke) return;
        savedJokes.value.push(joke)
    }

    const removeJoke = (jokeId: number) => {
        savedJokes.value = savedJokes.value.filter(e => e.id !== jokeId)
    }

    return { savedJokes, saveJoke, removeJoke }
})