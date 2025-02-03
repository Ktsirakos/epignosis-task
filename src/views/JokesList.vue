<template>
  <div class="flex flex-col gap-10">
    <Search />
    <div v-for="joke in jokeStore.savedJokes" class="flex flex-row justify-center">
      <SavedJoke :joke="joke" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJokeStore } from '../store/jokeStore';
import SavedJoke from '@/components/SavedJoke.vue';

const jokeStore = useJokeStore()
</script>