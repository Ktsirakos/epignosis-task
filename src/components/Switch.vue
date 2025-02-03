<template>
    <div class="flex flex-col gap-5">
        <p class="text-xl text-yellow-400 text-start">Choose your type:</p>
        <div v-for="e in data" class="flex flex-row gap-5 items-center">
            <input @input="() => emit('change', e.value)" class="w-7 h-7" type="radio" :id="e.value"
                name="joke-type-switch" :value="e.value" :checked="e.checked" />
            <label :for="e.value" class="text-2xl">{{ e.text }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['change'])
const data = ref<{ text: string, value: string, checked?: boolean }[]>([
    { text: 'General', value: 'general', checked: true },
    { text: 'Programming', value: 'programming' }
])

</script>

<style scoped></style>