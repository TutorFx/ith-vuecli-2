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
  },
  {
    path: '/quemsomos',
    name: 'Quem Somos',
    component: () => import('../views/quem-somos.vue')
  },
  {
    path: '/sobreith',
    name: 'Sobre ITH',
    component: () => import('../views/sobre-ith.vue')
  },
  {
    path: '/estatutoregimento',
    name: 'Estatuto / Regimento',
    component: () => import('../views/estatuto-regimento.vue')
  },
  {
    path: '/planejamentoestrategico',
    name: 'Planejamento Estratégico',
    component: () => import('../views/planejamento-estratégico.vue')
  },
  {
    path: '/graduacao',
    name: 'Graduacao',
    component: () => import('../views/graduacao.vue')
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
