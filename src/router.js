import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home3.vue'
import Features from './views/Features.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
      if (to.hash) {
          return {selector: to.hash}
      } else {
          return { x: 0, y: 0 }
      }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    }
  ]
})
