import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search:{
      input: '',
      area: [],
      modalidade: [],
      tipocurso: []
    },
    api: {
      cursos: [],
      slides: [],
      posts: [],
      pages: [],
      cursosError: false,
      postsError: false,
      slidesError: false,
      curso: [],
      cursoError: [],
      cursoLoaded: [],
      cursoFiltrado: [],
      eduq: [],
      eduqerror: [],
    },
    carrinho:{
      array: []
    },
    config:{
      open:false,
    }
  },
  mutations: {
    changeSearch(state, payload){
      state.search.input = payload
      //console.log('Detectada Filtragem em "Search"')
    },
    area(state, payload){
      state.search.area = payload
      //console.log('Detectada Filtragem de "Área de Atuação"')
    },
    modalidade(state, payload){
      state.search.modalidade = payload
      //console.log('Detectada Filtragem de "Modalidade de Cursos"')
    },
    tipocurso(state, payload){
      state.search.tipocurso = payload
      //console.log('Detectada Filtragem de "Tipo de Cursos"')
    },
    cursofiltrado(state, payload){
      state.api.cursoFiltrado = payload
    },
    toggleConfig(state){
      state.config.open = !state.config.open
    },
    getApi(state){
      axios.get('https://v2.ithpos.com.br/api/index.php?rest_route=/ith/v1/cursos/').then((resposta) => {
        state.api.cursos = resposta.data
        state.api.cursosError = false
      }).catch((error) => {
        //console.log('Ocorreu um erro comunicar API: ' + error);
        state.api.cursosError = true
      })
    },  
    getPages(state){
        axios.get('https://v2.ithpos.com.br/api/index.php?rest_route=/ith/v1/pages/').then((resposta) => {
          state.api.pages = resposta.data
          state.api.pagesError = false
          //console.log('pages')
          //console.log(resposta.data)
        }).catch((error) => {
          console.log('Ocorreu um erro comunicar API: ' + error);
          state.api.pagesError = true
        })
    },    
    getPosts(state){
      axios.get('https://v2.ithpos.com.br/api/index.php?rest_route=/ith/v1/posts').then((resposta) => {
        state.api.posts = resposta.data
        state.api.postsError = false
      }).catch((error) => {
        //console.log('Ocorreu um erro comunicar API: ' + error);
        state.api.postsError = true
      })
    },
    getSlides(state){
      axios.get('https://v2.ithpos.com.br/api/index.php?rest_route=/ith/v1/slides').then((resslidea) => {
        state.api.slides = resslidea.data
        state.api.slidesError = false
        //console.log(resslidea.data)
      }).catch((error) => {
        //console.log('Ocorreu um erro comunicar API: ' + error);
        state.api.slidesError = true
      })
    },
    getApiSingle(state, payload){
      //console.log(payload)
      state.api.cursoLoaded = false
      axios.get(`https://v2.ithpos.com.br/api/index.php?rest_route=/ith/v1/curso/${payload}/`).then((resposta) => {
        state.api.curso[payload] = resposta.data
        state.api.cursoLoaded = true
      }).catch((error) => {
        console.log('Ocorreu um erro comunicar API: ' + error);
      })
    },
    getEduq(state){
      axios.get('https://apisistema.eduqtecnologia.com.br/inscricao-online/cursos-abertos?dominio=ith').then((resposta) => {
        state.api.eduq = resposta.data.resultado
        state.api.eduqerror = false
      }).catch((error) => {
        console.log('Ocorreu um erro comunicar API: ' + error);
        state.api.eduqerror = true
      })
    },
    cartStore(state, payload){
      state.carrinho.array.push(payload);
      console.log(state.carrinho.array);
    },
  },
  actions: {
  },
  modules: {
  }
})
