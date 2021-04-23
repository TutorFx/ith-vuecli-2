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
  // {
  //   path: '/curso/:slug/',
  //   name: 'Select',
  //   component: () => import('../views/Curso-select.vue')
  // },
  {
    path: '/curso/:slug/',
    name: 'Curso',
    component: () => import('../views/Curso-single.vue')
  },
  {
    path: '/cursos/',
    name: 'Cursos',
    component: () => import('../views/cursos.vue')
  },
  // {
  //   path: '/trabalheconosco',
  //   name: 'Trabalhe Conosco',
  //   component: () => import('../views/trabalhe-conosco.vue')
  // },
  {
    path: '/institucional/:layout',
    name: 'Institucional Select',
    component: () => import('../views/Institucional.vue')
  },
  {
    path: '/institucional',
    name: 'Institucional',
    redirect: { path: '/institucional/quem-somos' }
  },
  // {
  //   path: '/sobreith',
  //   name: 'Sobre ITH',
  //   component: () => import('../views/sobre-ith.vue')
  // },
  // {
  //   path: '/estatutoregimento',
  //   name: 'Estatuto / Regimento',
  //   component: () => import('../views/estatuto-regimento.vue')
  // },
  // {
  //   path: '/planejamentoestrategico',
  //   name: 'Planejamento Estratégico',
  //   component: () => import('../views/planejamento-estrategico.vue')
  // },
  // {
  //   path: '/graduacao',
  //   name: 'Graduação',
  //   component: () => import('../views/graduacao.vue')
  // },
  // {
  //   path: '/posgraduacao',
  //   name: 'Pós-Graduação',
  //   component: () => import('../views/pos-graduacao.vue')
  // },
  // {
  //   path: '/cursostecnicos',
  //   name: 'Cursos Técnicos',
  //   component: () => import('../views/cursos-tecnicos.vue')
  // },
  // {
  //   path: '/formacaointernacional',
  //   name: 'Formação Internacional',
  //   component: () => import('../views/formacao-internacional.vue')
  // },
  // {
  //   path: '/cursosdeextensao',
  //   name: 'Cursos de extensão',
  //   component: () => import('../views/cursos-de-extensao.vue')
  // },
  {
    path: '/academico/:layout',
    name: 'Academico Selected',
    component: () => import('../views/academico.vue')
  },
  {
    path: '/academico/*',
    name: 'Academico',
    component: () => import('../views/academico.vue')
  },
  // {
  //   path: '/secretaria',
  //   name: 'Secretaria',
  //   component: () => import('../views/secretaria.vue')
  // },
  // {
  //   path: '/biblioteca',
  //   name: 'Biblioteca',
  //   component: () => import('../views/biblioteca.vue')
  // },
  // {
  //   path: '/calendarioacademico',
  //   name: 'Calendario Academico',
  //   component: () => import('../views/calendario-academico.vue')
  // },
  // {
  //   path: '/documentosinstitucionais',
  //   name: 'Documentos Institucionais',
  //   component: () => import('../views/documentos-institucionais.vue')
  // },
  // {
  //   path: '/exalunos',
  //   name: 'Ex-Alunos',
  //   component: () => import('../views/ex-alunos.vue')
  // },
  // {
  //   path: '/inovacaopesquisa',
  //   name: 'Inovação / Pesquisa',
  //   component: () => import('../views/inovacao-pesquisa.vue')
  // },
  // {
  //   path: '/repositorioith',
  //   name: 'Repositório ITH',
  //   component: () => import('../views/repositorio-ith.vue')
  // },
  // {
  //   path: '/artigos',
  //   name: 'Artigos',
  //   component: () => import('../views/artigos.vue')
  // },
  // {
  //   path: '/revista',
  //   name: 'Revista',
  //   component: () => import('../views/revista.vue')
  // },
  // {
  //   path: '/ouvidoria',
  //   name: 'Ouvidoria',
  //   component: () => import('../views/ouvidoria.vue')
  // },
  // {
  //   path: '/faq',
  //   name: 'FAQ',
  //   component: () => import('../views/faq.vue')
  // },
  // {
  //   path: '/contato',
  //   name: 'Contato',
  //   component: () => import('../views/contato.vue')
  // },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/blog.vue')
  },
  {
    path: '/blog/:slug',
    name: 'Postagem',
    component: () => import('../views/blog-single.vue')
  },
  // {
  //   path: '/transformith',
  //   name: 'Transformith',
  //   component: () => import('../views/transformith.vue')
  // },
  // {
  //   path: '/transformithsocial',
  //   name: 'Transformith Social',
  //   component: () => import('../views/transformith-social.vue')
  // },
  // {
  //   path: '/transformithtogether',
  //   name: 'Transformith Together',
  //   component: () => import('../views/transformith-together.vue')
  // },
  // {
  //   path: '/transformithscience',
  //   name: 'Transformith Science',
  //   component: () => import('../views/transformith-science.vue')
  // },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: () => import('../views/carrinho.vue')
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../views/404.vue')
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
