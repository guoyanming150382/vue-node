import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.$axios = axios


Vue.config.productionTip = false

// 路由全局导航  https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
// console.log("路----------------------------由",router)
router.beforeEach((to,from,next)=>{
  const role =sessionStorage.roles
  console.log("当前路由to",to)
  console.log("from",from)
  if(role){
    const roles=JSON.parse(JSON.stringify(sessionStorage.roles))
    if(to.meta.roles.indexOf(roles)>-1){
      next()
    }
  }else{
    // 没有token情况下跳到登录界面
    if (to.path === '/login') { // 如果是登录页面的话，直接next()
      next();
    } else { // 否则 跳转到登录页面
      next({
        path: '/login'
      });
    }
  }
})

Vue.use(ElementUI,{
	size: 'small'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
