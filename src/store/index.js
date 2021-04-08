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
      cursosError: false,
      curso: [],
      cursoError: [],
      cursoLoaded: [],
      cursoFiltrado: []
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
    getApi(state){
      axios.get('http://api.ith.local/wp-json/ith/v1/cursos/').then((resposta) => {
        state.api.cursos = resposta.data
        state.api.cursosError = false
      }).catch((error) => {
        console.log('Ocorreu um erro comunicar API: ' + error);
        state.api.cursosError = true
      })
    },
    getApiSingle(state, payload){
      console.log(payload)
      state.api.cursoLoaded = false
      axios.get(`http://api.ith.local/wp-json/ith/v1/curso/${payload}/`).then((resposta) => {
        state.api.curso[payload] = resposta.data
        state.api.cursoLoaded = true
      }).catch((error) => {
        console.log('Ocorreu um erro comunicar API: ' + error);
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
