import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'

import axios from 'axios';

Vue.config.productionTip = false

import './assets/css/main.css'

Vue.use(Vuex)
Vue.use(Notifications)
Vue.use(Router)
Vue.use(Vuelidate)

// API interceptor
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 400) {
    console.log(error.response)
    Vue.notify({
      type: "error",
      title: error.response.statusText,
      text: error.response.data
    })
  }
  if (error.response.status === 401) {
    store.dispatch('logout')
  }
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')