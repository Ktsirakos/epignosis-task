<template>
    <div class="flex flex-row justify-center gap-5 m-5">
        <RouterLink :class="`'text-red' 
        ${$route.path === '/' ? 'selected' : 'non-selected'}`" to="/">
            Home
        </RouterLink>
        <RouterLink :class="$route.path === '/joke-list' ? 'selected' : 'non-selected'" to="/joke-list">
            Saved Jokes
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>


<style scoped>
.selected {
    color: yellow
}

.non-selected {
    color: gray
}
</style>