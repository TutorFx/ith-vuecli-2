import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import store from './store'
import ReactiveStorage from "vue-reactive-localstorage";
import VueResizeText from 'vue-resize-text';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

Vue.use(VueResizeText)
Vue.use(require('vue-script2'))
Vue.use(ReactiveStorage, {
  // Set initial values
    "carrinho": [],
    "texto": 0,
});


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
