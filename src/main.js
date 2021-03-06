import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-icons/iconfont/material-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
