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
    path: '/curso/:slug/',
    name: 'Cursos',
    component: () => import('../views/Curso-single.vue')
  },
  {
    path: '/trabalheconosco',
    name: 'Trabalhe Conosco',
    component: () => import('../views/trabalhe-conosco.vue')
  },
  {
    path: '/institucional',
    name: 'Institucional',
    component: () => import('../views/Institucional.vue')
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
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
