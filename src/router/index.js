import Vue from 'vue'
import Router from 'vue-router'
// import icloud from '@/pages/icloud'
import favorites from '@/pages/favorites'
import profile from '@/pages/profile'
import login from '@/pages/login'
import helloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
    mode: 'history',//使用html5
    // base: '/taodoctor/dist/',
  routes: [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '*',
        redirect: '/login'
    },
    {
      path: '/helloWord',
      name: 'helloWorld',
      component: helloWorld
    },
    {
        path: '/favorites',         //喜欢
        name: 'favorites',
        component: favorites,
        meta: {
            title: '喜欢'
        }
    },
    {
        path: '/profile',         //个人资料
        name: 'profile',
        component: profile,
        meta: {
            title: '个人资料'
        }
    },
    {
        path: '/login',         //登录
        name: 'login',
        component: login,
        meta: {
            title: '登录'
        }
    }
   ]
})
