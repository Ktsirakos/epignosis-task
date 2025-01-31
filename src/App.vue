<script setup lang="ts">
import IconButton from "./components/IconButton.vue"
import { RotateCcw, Save } from "lucide-vue-next";

const iconSize = 72
</script>

<template>
  <div class="flex flex-column gap-10">
    <IconButton alt-text="Get a new joke" title="Reload" @click="() => { console.log('Clicked 1') }">
      <template #icon>
        <RotateCcw :size="iconSize" />
      </template>
    </IconButton>
    <IconButton alt-text="Save joke" title="Save" @click="() => { console.log('Clicked 2') }">
      <template #icon>
        <Save :size="iconSize" />
      </template>
    </IconButton>
  </div>
</template>

<style scoped></style>
