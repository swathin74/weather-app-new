import { createRouter, createWebHistory } from 'vue-router';
import GetWeather from '@/components/GetWeather.vue';


const routes = [
  {
    path: '/',
    name: 'Root',
    component: GetWeather
  }
]
console.log("inside index.js")
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;