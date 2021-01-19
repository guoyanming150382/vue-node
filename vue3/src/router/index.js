import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// const dong1styles={
//     routes:[
//         {
//             path:'/dynamic',
//             name:"dynamic",
//             component:()=>import('../components/dynamic'),
//             meta:{
//                 title:'动态页面'
//             }
//         }
//     ]
// }

// const defaules={
//     mode: 'history',//配置hoistory模式url链接里就不会有#
//     routes: [
//         //默认进来的首页是one
//         {   
//             path:'/',
//             redirect:"/nagivation/one"
//         },
//         {
//             path: '/nagivation',
//             component: () => import('../components/nagivation.vue'),
//             name:'nagivation',
//             meta: {
//                 title: 'nagivation.vue页面'
//             },
//             children:[
//                 {
//                     path: 'two',
//                     name:'two',
//                     component: () => import('../components/navative/second.vue'),
//                     meta: {
//                         title: 'wtwo页面'
//                     }
//                 },
//                 {
//                     path: 'one',
//                     name:'one',
//                     component: () => import('../components/navative/first.vue'),
//                     meta: {
//                         title: 'wtwo页面'
//                     },
//                     beforeEnter:(to,from,next)=>{
//                         console.log("独享守卫",to,from)
//                         next()
//                     }
//                 },
//                 {
//                     path: 'three',
//                     name:'three',
//                     component: () => import('../components/navative/thrd.vue'),
//                     meta: {
//                         title: 'wtwo页面'
//                     }
//                 },
//             ]
//         } ,
//         {
//             path: '*',
//                 component: () => import( /* webpackChunkName:"404" */ '../components/404.vue'),
//                 meta: {
//                     title: '404'
//                 }
//         },
//         {
//             path: '/jump',
//                 component: () => import( /* webpackChunkName: "404" */ '../components/routerJump.vue'),
//                 meta: {
//                     title: '路由相关知识',
//                     requiresAuth: true
//                 }
//         },
//         {
//             path: '/login',
//                 component: () => import( /* webpackChunkName: "404" */ '../components/login.vue'),
//                 meta: {
//                     title: '登录'
//                 },
//                 name:'login'
//         }
//     ]
// }

// export default{
//     dong1styles,
//     defaules
// }
export default new Router({
    mode: 'history',//配置hoistory模式url链接里就不会有#
    routes: [
        //默认进来的首页是one
        {   
            path:'/',
            redirect:"/nagivation/one",
            roles:['admin']
        },
        {
            path: '/nagivation',
            component: () => import('../components/nagivation.vue'),
            name:'nagivation',
            meta: {
                title: 'nagivation.vue页面',
                roles:['admin']
            },
            children:[
                {
                    path: 'two',
                    name:'two',
                    component: () => import('../components/navative/second.vue'),
                    meta: {
                        title: 'wtwo页面',
                        roles:['admin']
                    }
                },
                {
                    path: 'one',
                    name:'one',
                    component: () => import('../components/navative/first.vue'),
                    meta: {
                        title: 'wtwo页面',
                        roles:['admin']
                    },
                    beforeEnter:(to,from,next)=>{
                        console.log("独享守卫",to,from)
                        next()
                    }
                },
                {
                    path: 'three',
                    name:'three',
                    component: () => import('../components/navative/thrd.vue'),
                    meta: {
                        title: 'wtwo页面',
                        roles:['admin']
                    }
                },
            ]
        } ,
        {
            path: '*',
                component: () => import( /* webpackChunkName:"404" */ '../components/404.vue'),
                meta: {
                    title: '404',
                    roles:['admin']
                }
        },
        {
            path: '/jump',
                component: () => import( /* webpackChunkName: "404" */ '../components/routerJump.vue'),
                meta: {
                    title: '路由相关知识',
                    roles:['admin','vip']
                },
                beforeEnter:(to,from,next)=>{
                    console.log("权限修改",to)
                    let role=JSON.parse(JSON.stringify(sessionStorage.roles)).split(',')
                    if(to.meta.roles===role){
                        next()
                    }else{
                        next(false)
                    }
                    
                }
        },
        {
            path: '/login',
                component: () => import( /* webpackChunkName: "404" */ '../components/login.vue'),
                meta: {
                    title: '登录',
                    roles:['admin']
                },
                name:'login'
        }
    ],
    routes1:[
                {
                    path:'/dynamic',
                    name:"dynamic",
                    component:()=>import('../components/dynamic'),
                    meta:{
                        title:'动态页面',
                        roles:['admin','vip']
                    }
                }
            ]
});