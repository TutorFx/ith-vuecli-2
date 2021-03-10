import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search:{
      input: 'teste',
    },
    api: {
      cursos: [],
      cursosError: false,
    }
  },
  mutations: {
    changeSearch(state, payload){
      state.search.input = payload
    },
    getApi(state){
      axios.get('https://api.ithpos.com.br/wp-json/ith/v1/cursos/').then((resposta) => {
        state.api.cursos = resposta
        state.api.cursosError = false
      }).catch((error) => {
        console.log('Ocorreu um erro comunicar API: ' + error);
        state.api.cursosError = true
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
