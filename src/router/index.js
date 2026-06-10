import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LegalView from '../views/LegalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path: '/projects',
      name: 'projects',
    },
    {
      path: '/contact',
      name: 'contact',
    },
    {
      path: '/mentions-legales',
      name: 'legal',
      component: LegalView,
    },
  ],
})

export default router
