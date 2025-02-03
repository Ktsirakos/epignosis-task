<script setup lang="ts">
import IconButton from "@/components/IconButton.vue"
import { RotateCw, Save } from "lucide-vue-next";
import { getJokes } from "@/services/api";
import { ref } from "vue";
import { useJokeStore } from "@/store/jokeStore";
import type { Joke } from "@/interfaces/joke";
import JokeCard from "@/components/JokeCard.vue";

import Modal from "@/components/Modal.vue"
import Stars from "@/components/Stars.vue"
import { X } from "lucide-vue-next";
const iconSize = 72
const joke = ref<Joke | undefined>(undefined)
const jokeStore = useJokeStore()
const loadingJoke = ref(false) //variable used to spin the loading button
const jokeRating = ref(0)

const showSaveModal = ref(false)
const isJokeAlreadySaved = () => {
  return !!jokeStore.savedJokes.find(e => e.id === joke.value?.id)
}


const saveJokeWithRating = () => {
  if (!joke.value) return;

  jokeStore.saveJoke({
    ...joke.value,
    rating: jokeRating.value
  })

  console.log('hey')
  showSaveModal.value = false
}

const getARandomJoke = async () => {
  loadingJoke.value = true
  joke.value = await getJokes()
  loadingJoke.value = false
}

</script>

<template>
  <div class="h-9/10 flex flex-col justify-between">
    <div class="flex-1 grid grid-col-1">
      <JokeCard :joke="joke" />
    </div>
    <div class="flex flex-1 items-center gap-10 w-full justify-center">
      <IconButton alt-text="Get a new joke" title="Reload" @click="getARandomJoke">
        <template #icon>
          <RotateCw :class="`${loadingJoke ? 'animate-spin' : ''}`" :size="iconSize" />
        </template>
      </IconButton>
      <IconButton :disabled="!joke?.setup || isJokeAlreadySaved()" alt-text="Save joke"
        :title="isJokeAlreadySaved() ? 'Saved' : 'Save'" @click="() => showSaveModal = true">
        <template #icon>
          <Save :size="iconSize" />
        </template>
      </IconButton>
    </div>
  </div>
  <Modal :isOpen="showSaveModal">
    <div class="flex flex-col justify-between h-full items-center">
      <div class="flex flex-row justify-between w-full">
        <p class="text-white">How would you rate this joke?</p>
        <button class="text-red-500" @click="showSaveModal = false">
          <X />
        </button>
      </div>
      <Stars :stars="4" :mode="'input'" @change="(rating) => jokeRating = rating" />
      <button class="py-1 px-4 text-xl hover:text-yellow-300" @click="saveJokeWithRating">Save</button>
    </div>
  </Modal>
</template>

<style scoped></style>
