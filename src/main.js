import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VueRouter from 'vue-router'
import store from '@/store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as faThumbsUpRegular, faComment } from '@fortawesome/free-regular-svg-icons'

library.add(faThumbsUp, faThumbsUpRegular, faComment)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
