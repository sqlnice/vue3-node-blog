import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('@/views/content/Content.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
