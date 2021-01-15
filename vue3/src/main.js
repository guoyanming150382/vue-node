import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios


Vue.config.productionTip = false

// 路由全局导航  https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
router.beforeEach((to,from,next)=>{
  const role=sessionStorage.loginToken
  // console.log("to",to)
  if(role){
    next()
  }else{
    next({name:'/login'})
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
