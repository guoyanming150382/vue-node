import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


export default new Router({
    mode: 'history',//配置hoistory模式url链接里就不会有#
    routes: [
        //默认进来的首页是one
        {   
            path:'/',
            redirect:"/nagivation/one"
        },
        {
            path: '/nagivation',
            component: () => import('../components/nagivation.vue'),
            name:'nagivation',
            meta: {
                title: 'nagivation.vue页面'
            },
            children:[
                {
                    path: 'two',
                    name:'two',
                    component: () => import('../components/navative/second.vue'),
                    meta: {
                        title: 'wtwo页面'
                    }
                },
                {
                    path: 'one',
                    name:'one',
                    component: () => import('../components/navative/first.vue'),
                    meta: {
                        title: 'wtwo页面'
                    }
                },
                {
                    path: 'three',
                    name:'three',
                    component: () => import('../components/navative/thrd.vue'),
                    meta: {
                        title: 'wtwo页面'
                    }
                },
            ]
        } ,
        {
            path: '*',
                component: () => import( /* webpackChunkName:"404" */ '../components/404.vue'),
                meta: {
                    title: '404'
                }
        },
        {
            path: '/jump',
                component: () => import( /* webpackChunkName: "404" */ '../components/routerJump.vue'),
                meta: {
                    title: '路由相关知识'
                }
        },
        {
            path: '/login',
                component: () => import( /* webpackChunkName: "404" */ '../components/login.vue'),
                meta: {
                    title: '登录'
                },
                name:"login"
        }
    ]
});