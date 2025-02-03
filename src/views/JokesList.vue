<template>
  <div class="flex flex-col gap-10">
    <Search @change="(query) => filterJokes(query)" class="self-center mt-5" />
    <div v-for="joke in filteredJokes" class="flex flex-row justify-center">
      <SavedJoke :joke="joke" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJokeStore } from '@/store/jokeStore';
import SavedJoke from '@/components/SavedJoke.vue';
import Search from "@/components/Search.vue"
import { ref } from 'vue';
import type { Joke } from '@/interfaces/joke';

const jokeStore = useJokeStore()
const filteredJokes = ref([...jokeStore.savedJokes])

const transformJokeToSearchableString = (joke: Joke) => {
  return (
    joke.setup.replace(" ", "").toLowerCase() +
    joke.punchline.replace(" ", "").toLowerCase()
  )
}
const filterJokes = (query: string) => {
  if (!query) filteredJokes.value = [...jokeStore.savedJokes]
  filteredJokes.value = jokeStore.savedJokes.filter(e => transformJokeToSearchableString(e).includes(query))
}
</script>