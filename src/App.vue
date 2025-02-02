<script setup lang="ts">
import IconButton from "./components/IconButton.vue"
import { RotateCcw, Save, X } from "lucide-vue-next";
import JokeSetup from "./components/JokeSetup.vue";
import { getJokes } from "./services/api";
import { ref } from "vue";
import JokePunchline from "./components/JokePunchline.vue";
import { useJokeStore } from "./store/jokeStore";
import type { Joke } from "./interfaces/joke";

const iconSize = 72
const setup = ref("")
const punchline = ref("")
const joke = ref<Joke | undefined>(undefined)
const jokeStore = useJokeStore()

const getARandomJoke = async () => {
  punchline.value = ""
  setup.value = ""
  joke.value = await getJokes()

  if (joke.value) {
    setup.value = joke.value.setup

    setTimeout(() => {
      punchline.value = joke.value?.punchline ?? ""
    }, 1000)
  }
}

</script>

<template>
  <div class="h-screen grid grid-rows-2">
    <div class="grid grid-col-1">
      <JokeSetup :value="setup" />
      <JokePunchline :value="punchline" />
    </div>
    <div class="flex items-center gap-10 w-full justify-center">
      <IconButton alt-text="Get a new joke" title="Reload" @click="getARandomJoke">
        <template #icon>
          <RotateCcw :size="iconSize" />
        </template>
      </IconButton>
      <IconButton :disabled="!setup" alt-text="Save joke" title="Save" @click="() => jokeStore.saveJoke(joke)">
        <template #icon>
          <Save :size="iconSize" />
        </template>
      </IconButton>
    </div>
  </div>
  <div>
    <div v-for="joke in jokeStore.savedJokes" class="flex flex-row">
      <p>
        {{ joke.setup }}
      </p>
      <IconButton alt-text="Remove joke" @click="() => jokeStore.removeJoke(joke.id)">
        <template #icon>
          <X />
        </template>
      </IconButton>
    </div>
  </div>
</template>

<style scoped></style>
