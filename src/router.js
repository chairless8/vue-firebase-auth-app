import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Home from './components/Home.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login }
  ]
});
