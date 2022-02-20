import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MissionPanel from '../views/MissionPanel.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MissionPanel',
    component: MissionPanel,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
