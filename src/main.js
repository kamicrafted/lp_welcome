import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import router from './router'
import VueRange from 'vue-for-range'
import Affix from 'vue-affix';


Vue.config.productionTip = false

Vue.use(VueScrollTo)
Vue.use(VueRange)
Vue.use(Affix);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
