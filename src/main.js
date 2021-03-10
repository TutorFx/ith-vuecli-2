import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import axios from 'axios'

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
  render: h => h(App)
}).$mount('#app')
