<template>
    <input v-model="query" class="rounded-xl text-white border-1 p-3 w-1/2" placeholder="Search your jokes"/>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits(['change'])
const query = ref("")

watch(query, (newQuery) => {
    emit('change', newQuery)
})
</script>