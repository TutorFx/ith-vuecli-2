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
    path: '/cursos/:slug/:modalidade',
    name: 'Cursos',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/trabalheconosco',
    name: 'Trabalhe Conosco',
    component: () => import('../views/trabalhe-conosco.vue') // http://localhost:8080/trabalheconosco
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
