import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VueRouter from 'vue-router'
import store from '@/store';

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
