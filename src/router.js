import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Certifications from './views/Certifications.vue'
import Contact from './views/Contact.vue'

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
      path: '/about',
      name: 'about',
      component:About
      
    },
  {
    path: '/certifications',
    name: 'certifications',
    component:Certifications
    
  },
  {
    path: '/contact',
    name: 'contact',
    component:Contact
    
  }
  ],
  
})
