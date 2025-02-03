<template>
  <div class="flex flex-row gap-10 pb-10 justify-center">
    <div class="flex flex-col gap-5 pb-10 w-1/2">
      <div class="flex flex-col justify-center gap-2">
        <p class="text-xl">Total saved jokes: {{ jokeStore.savedJokes.length }}</p>
        <div class="flex flex-row items-center justify-center">
          <p class="text-xl">Average rating: {{ Math.floor(jokeStore.averageRating) }} </p>
          <Star color="yellow" />
        </div>
      </div>
      <Search @change="(query) => filterJokes(query)" class="self-center mt-5 w-full" />
      <FilterSidebar class="w-full" @change="(filter) => updateFilteredJokes(filter)" />
      <SavedJoke class="w-full" v-for="joke in filteredJokes" :joke="joke" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJokeStore } from '@/store/jokeStore';
import SavedJoke from '@/components/SavedJoke.vue';
import Search from "@/components/Search.vue"
import { ref } from 'vue';
import { transformJokeToSearchableString } from '@/utils/helpers';
import FilterSidebar, { type Order } from '@/components/FilterBar.vue';
import { Star } from 'lucide-vue-next';
const jokeStore = useJokeStore()
const filteredJokes = ref([...jokeStore.savedJokes])

const filterJokes = (query: string) => {
  if (!query) filteredJokes.value = [...jokeStore.savedJokes]
  else filteredJokes.value = jokeStore.savedJokes.filter(e => transformJokeToSearchableString(e).includes(query))
}

const updateFilteredJokes = (data: {
  rating: number,
  order: Order
}) => {
  console.log(data.rating)
  const allJokes = [...jokeStore.savedJokes]

  //Filtering according to rating. In case 0 we reset the view to all jokes
  if (data.rating) filteredJokes.value = allJokes.filter(e => e.rating === data.rating)
  else filteredJokes.value = allJokes

  //Sorting shown jokes
  if (data.order === 'asc') filteredJokes.value.sort((a, b) => a.punchline.localeCompare(b.punchline))
  if (data.order === 'desc') filteredJokes.value.sort((a, b) => b.punchline.localeCompare(a.punchline))
  if (data.order === 'none') filteredJokes.value = allJokes
}
</script>