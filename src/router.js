import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Certifications from './views/Certifications.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/certifications',
      name: 'certifications',
      component: Certifications

    }
  ],

})
