import { defineStore } from "pinia"
import { ref } from "vue"
import type { Joke } from "../interfaces/joke"

export const useJokeStore = defineStore('jokeStore', () => {
    const savedJokes = ref<Joke[]>([])
    return { savedJokes }
})