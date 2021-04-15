import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import store from './store'
import ReactiveStorage from "vue-reactive-localstorage";
import VueResizeText from 'vue-resize-text';
 
Vue.use(VueResizeText)

// Set initial values
Vue.use(ReactiveStorage, {
    "carrinho": [],
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
