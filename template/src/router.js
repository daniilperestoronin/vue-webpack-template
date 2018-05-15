import Vue from 'vue'
import VueRouter from 'vue-router'

import AppHome from './components/AppHome.vue'
import AppTechnologies from './components/AppTechnologies.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: AppHome
    },
    {
      path: '/technologies',
      component: AppTechnologies
    }
  ]
})