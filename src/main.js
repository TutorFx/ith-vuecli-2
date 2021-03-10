import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import axios from 'axios'
import store from './store'

Vue.prototype.$search = ''
Vue.prototype.$cursos = []

axios.get('https://api.ithpos.com.br/wp-json/ith/v1/cursos/').then((resposta) => {
  Vue.prototype.$cursos = resposta.data;
}).catch((error) => {
  console.log(error);
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
