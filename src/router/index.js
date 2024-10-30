import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Loading from '../views/Loading.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loading',
      component: Loading
    },

    {
      path: '/desktop',
      name: 'home',
      component: HomeView
    },

  ]
})

export default router
