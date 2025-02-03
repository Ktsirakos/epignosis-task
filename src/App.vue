<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue"
import { useJokeStore } from "./store/jokeStore";

const jokeStore = useJokeStore()
const localStorageValue = localStorage.getItem('jokes')
jokeStore.initStore(localStorageValue ? JSON.parse(localStorageValue) : [])
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped></style>
