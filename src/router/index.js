import { createRouter, createWebHistory } from 'vue-router'
import HeroPageView from '../views/components/HeroPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroPageView
    },
  ]
})

export default router
