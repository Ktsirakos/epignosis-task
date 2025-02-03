import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import JokesList from '@/views/JokesList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/joke-list', component: JokesList },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export { router }