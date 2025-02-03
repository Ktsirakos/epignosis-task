<template>
  <div class="flex flex-row gap-10 pb-10">
    <div class="flex flex-col gap-10 pb-10 w-full items-center">
      <Search @change="(query) => filterJokes(query)" class="self-center mt-5" />
      <FilterSidebar class="w-1/2" />
      <div v-for="joke in filteredJokes" class="flex flex-row justify-center">
        <SavedJoke :joke="joke" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJokeStore } from '@/store/jokeStore';
import SavedJoke from '@/components/SavedJoke.vue';
import Search from "@/components/Search.vue"
import { ref } from 'vue';
import { transformJokeToSearchableString } from '@/utils/helpers';
import FilterSidebar from '@/components/FilterBar.vue';

const jokeStore = useJokeStore()
const filteredJokes = ref([...jokeStore.savedJokes])

const filterJokes = (query: string) => {
  if (!query) filteredJokes.value = [...jokeStore.savedJokes]
  filteredJokes.value = jokeStore.savedJokes.filter(e => transformJokeToSearchableString(e).includes(query))
}
</script>