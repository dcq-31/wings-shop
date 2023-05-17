import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import CaretView from '@/views/CaretView.vue'
import { ROUTES } from './names'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.HOME,
      component: HomeView
    },
    {
      path: '/user',
      name: ROUTES.USER,
      component: UserView
    },
    {
      path: '/caret',
      name: ROUTES.CARET,
      component: CaretView
    }
  ]
})

export default router
