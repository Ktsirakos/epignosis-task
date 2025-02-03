<template>
    <div class="p-10 rounded-lg border-1">
        <div v-if="props.joke" class="h-full flex flex-col justify-evenly">
            <RevealText class="text-4xl" :value="setup" />
            <RevealText class="text-6xl" :value="punchline" />
            <Drum v-if="showDrumroll" class="self-center animate-bounce" :size="72"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Joke } from '../interfaces/joke';
import RevealText from './RevealText.vue';
import { Drum } from 'lucide-vue-next';

const props = defineProps<{
    joke?: Joke
}>();

const setup = ref("")
const punchline = ref("")
const showDrumroll = ref(false)

watch(() => props.joke, (newJoke, oldJoke) => {
    console.log({newJoke, oldJoke})
    if(!props.joke) {
        setup.value = ""
        punchline.value = ""
    };

    setup.value = props.joke?.setup ?? ""
    showDrumroll.value = true;
    punchline.value = ""

    setTimeout(() => {
        showDrumroll.value = false
        punchline.value = props.joke?.punchline ?? ""
    }, 2000)
})

</script>
