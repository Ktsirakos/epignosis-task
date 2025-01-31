<template>
    <button class="flex flex-col items-center gap-5 p-15 bg-black rounded-xl hover:bg-red-500" @click="props.onClick" :alt-text="props.altText">
        <slot name="icon"></slot>
        <p class="text-2xl text-center">{{ title }}</p>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    onClick: () => void
    altText: string
    title: string
}>()
</script>

<style scoped></style>
