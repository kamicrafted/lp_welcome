import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import router from './router'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false

Vue.use(VueScrollTo)
Vue.use(VueParticles)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
