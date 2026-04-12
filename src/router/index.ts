import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/views/Home/index.vue') },
      { path: 'products', component: () => import('@/views/Products/index.vue') },
      { path: 'company', component: () => import('@/views/Company/index.vue') },
      { path: 'technology', component: () => import('@/views/Technology/index.vue') },
      { path: '/products/:id',
        component: () => import('@/views/Products/Detail/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router