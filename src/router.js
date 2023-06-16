import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import PosibleMealsComponent from './components/my_fridge/future/PosibleMealsComponent.vue'
import FridgeComponent from './components/my_fridge/present/FridgeComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/fridge/dinner',
    name: 'Dinner',
    component: PosibleMealsComponent
  },
  {
    path: '/fridge/fridge',
    name: 'Fridge',
    component: FridgeComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
