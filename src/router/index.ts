import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/store',
      name: 'Store',
      component: () => import('../views/StoreView.vue'),
    },
    {
      path: '/store/detial',
      name: 'StoreDetial',
      component: () => import('../views/StoreDetialView.vue')
    },
    {
      path:'/qa',
      name:'QA',
      component: () => import('../views/QaView.vue')
    },
    {
      path:'/blog',
      name:'Blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path:'/blog/detial',
      name:'BlogDetial',
      component: () => import('../views/BlogDetialView.vue')
    }

  ]
})

export default router
