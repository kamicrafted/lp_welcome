import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import router from './router'
import VueRange from 'vue-for-range'


Vue.config.productionTip = false

Vue.use(VueScrollTo)
Vue.use(VueRange)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
