<template>
    <RevealText class="text-6xl" :value="props.value" />
</template>

<script setup lang="ts">
import RevealText from './RevealText.vue';
const props = defineProps<{
    value: string
}>()
</script>
