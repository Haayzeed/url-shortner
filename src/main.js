import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Clipboard from 'v-clipboard'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/style.css'
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Clipboard)

Vue.config.productionTip = false

Vue.filter('snippet', function(value){
  if(value.length <=39){
    return value;
  }
  else{
    return value.slice(0,40) + '...';
  }
  
})

const router = new VueRouter({
  routes: routes,
  mode: "history"
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
