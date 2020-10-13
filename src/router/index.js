import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cards.vue')
  },
    {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "about" */ '../views/Grid.vue')
   },
    {
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forms.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
