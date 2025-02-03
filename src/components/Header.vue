<template>
    <div class="flex flex-row justify-between w-full gap-5 my-5">
        <div class="flex flex-row gap-1 items-center    ">
            <img width="35" height="35"
                src="https://www.epignosishq.com/wp-content/themes/epignosishq/dist/images/favicon/favicon_152x152.png" />
            <p class="text-2xl">Epignosis Assesment</p>
        </div>
        <div class="flex flex-row gap-5">
            <RouterLink :class="`'text-red' 
            ${$route.path === '/' ? 'selected' : 'non-selected'}`" to="/">
                Home
            </RouterLink>
            <div class="divider" />
            <RouterLink :class="$route.path === '/joke-list' ? 'selected' : 'non-selected'" to="/joke-list">
                Saved Jokes
            </RouterLink>
        </div>
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

.divider {
    width: 1px;
    background: grey;
}
</style>