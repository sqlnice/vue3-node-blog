import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: '',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index/Index.vue'),
    children: [
      {
        path: '',
        name: 'List',
        component: () => import('@/views/index/components/List.vue')
      },
      {
        path: '/index/detail',
        name: 'Detail',
        component: () => import('@/views/index/components/Detail.vue')
      }
    ]
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('@/views/editor/Editor.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
