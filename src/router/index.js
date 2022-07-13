import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/warsztaty',
    name: 'Warsztaty',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "warsztaty" */ '../views/Warsztaty.vue')
  },
  {
    path: '/status',
    name: 'Status',
    component: () => import(/* webpackChunkName: "status" */ '../views/Status.vue')
  },
  {
    path: '/profil',
    name: 'Mój profil',
    component: () => import(/* webpackChunkName: "status" */ '../views/Profil.vue')
  },
  {
    path: '/pojazdy',
    name: 'Moje pojazdy',
    component: () => import(/* webpackChunkName: "status" */ '../views/Pojazdy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
