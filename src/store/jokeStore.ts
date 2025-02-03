import { defineStore } from "pinia"
import { ref } from "vue"
import type { Joke } from "@/interfaces/joke"

export const useJokeStore = defineStore('jokeStore', () => {
    const savedJokes = ref<Joke[]>([])
    const averageRating = ref<number>(0)

    const saveJoke = (joke?: Joke) => {
        if (!joke) return;
        savedJokes.value.push(joke)
        averageRating.value = savedJokes.value.reduce(
            (acc, curr) => acc + curr.rating, 0) / savedJokes.value.length

        console.log(averageRating)
        localStorage.setItem('jokes', JSON.stringify(savedJokes.value))
    }

    const removeJoke = (jokeId: number) => {
        savedJokes.value = savedJokes.value.filter(e => e.id !== jokeId)
        averageRating.value = savedJokes.value.reduce(
            (acc, curr) => acc + curr.rating, 0) / savedJokes.value.length

        localStorage.setItem('jokes', JSON.stringify(savedJokes.value))

    }

    const initStore = (data: Joke[]) => {
        savedJokes.value = data
        averageRating.value = data.reduce(
            (acc, curr) => acc + curr.rating, 0) / savedJokes.value.length

    }

    return { savedJokes, initStore, saveJoke, removeJoke, averageRating }
})