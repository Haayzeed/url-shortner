import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/style.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: "history"
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
