<template>
    <p :class="[`transition-opacity ${props.value ? 'opacity-100' : 'opacity-0'} ease-in
    duration-1500`, props.class]">
        {{ props.value }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
    value: string
    class?: string | string[] | object
}>()
</script>