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
    path: '/moj_profil',
    name: 'Mój profil',
    component: () => import(/* webpackChunkName: "status" */ '../views/Moj_profil.vue')
  },
  {
    path: '/moje_pojazdy',
    name: 'Moje pojazdy',
    component: () => import(/* webpackChunkName: "status" */ '../views/Moje_pojazdy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
