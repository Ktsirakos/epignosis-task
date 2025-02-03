<template>
    <button :disabled="disabled"
        :class="`flex flex-col items-center gap-5 p-5 bg-black rounded-xl ${disabled ? 'opacity-20' : 'opacity-100'}`"
        @click="props.onClick" :alt-text="props.altText">
        <slot name="icon"></slot>
        <p v-if="title" class="text-xl text-center">{{ title }}</p>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    onClick: () => void
    altText: string
    title?: string
    disabled?: boolean
}>()
</script>

<style scoped></style>
