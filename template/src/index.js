import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css';

import App from './App.vue'
import CardContainer from './components/CardContainer.vue'

Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/CardContainer',
      name: 'CardContainer',
      component: CardContainer
    }
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App } 
})