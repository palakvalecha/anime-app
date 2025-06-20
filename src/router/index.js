import { createRouter, createWebHistory } from 'vue-router'
import AnimeContent from '../components/AnimeContent.vue'
import AnimeDetail from '../components/AnimeDetail.vue'

const routes = [
  { path: '/', component: AnimeContent },
  { path: '/anime-detail', component: AnimeDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router