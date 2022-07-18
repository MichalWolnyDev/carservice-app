import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.prototype.$axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
