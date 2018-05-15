import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css';

import App from './App.vue'
import AppHome from './components/AppHome.vue'
import AppTechnologies from './components/AppTechnologies.vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter)

const router = new VueRouter({
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

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App } 
})