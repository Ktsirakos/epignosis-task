<script setup lang="ts">
import { ref } from "vue";
import { useJokeStore } from "@/store/jokeStore";
import type { Joke } from "@/interfaces/joke";
import JokeCard from "@/components/JokeCard.vue";

import Modal from "@/components/Modal.vue"
import Stars from "@/components/Stars.vue"
import { X } from "lucide-vue-next";
import JokeActions from "@/components/JokeActions.vue";

const joke = ref<Joke | undefined>(undefined)
const jokeStore = useJokeStore()
const jokeRating = ref(0)

const showSaveModal = ref(false)


const saveJokeWithRating = () => {
  if (!joke.value) return;

  jokeStore.saveJoke({
    ...joke.value,
    rating: jokeRating.value
  })

  showSaveModal.value = false
}

</script>

<template>
  <div class="h-9/10 flex flex-col justify-between">
    <div class="flex-1 grid grid-col-1">
      <JokeCard :joke="joke" />
    </div>
    <JokeActions @joke="(newJoke) => joke = newJoke" @show-modal="() => showSaveModal = true" />
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
