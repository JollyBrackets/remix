import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/remix' 
  },
  {
    path: '/remix',
    name: 'Remix',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Remix.vue')
  },
  {
    path: '/browse',
    name: 'Browse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "browse" */ '../views/Browse.vue')
  },
  {
    path: '/coming-soon',
    name: 'ComingSoon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "coming-soon" */ '../views/ComingSoon.vue')
  },
  {
    path: '/play',
    name: 'Play',
    component: () => import(/* webpackChunkName: "coming-soon" */ '../views/Play.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
