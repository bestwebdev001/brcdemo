import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/brc',
    name: 'BRC',
    component: () => import('@/views/BRC.vue'),
    children: [
      {
        path: 'business',
        name: 'Business',
        component: () => import('@/views/brc/Business.vue')
      },
      {
        path: 'scenario',
        name: 'Scenario',
        component: () => import('@/views/brc/Scenario.vue')
      },
      {
        path: 'hurricane',
        name: 'Hurricane',
        component: () => import('@/views/brc/Hurricane.vue')
      },
      {
        path: '*',
        redirect: 'business'
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
