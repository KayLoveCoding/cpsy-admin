import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve=>require(['@/pages/Index'],resolve),
      children:[
        {path:'/',name: 'user',component: resolve=>require(['@/components/User'],resolve)},
        {path:'auth',name: 'auth',component: resolve=>require(['@/components/Auth'],resolve)},
        {path:'cp',name: 'cp',component: resolve=>require(['@/components/Cp'],resolve)},
        {path:'creator',name: 'creator',component: resolve=>require(['@/components/Creator'],resolve)},
        {path:'events',name: 'events',component: resolve=>require(['@/components/Events'],resolve)},
        {path:'export',name: 'export',component: resolve=>require(['@/components/Export'],resolve)},
        {path:'home',name: 'home',component: resolve=>require(['@/components/Home'],resolve)},
        {path:'judges',name: 'judges',component: resolve=>require(['@/components/Judges'],resolve)},
        {path:'works',name: 'works',component: resolve=>require(['@/components/Works'],resolve)},
        {path:'audit',name: 'audit',component: resolve=>require(['@/components/Audit'],resolve)},
      ]
    },
    {path:'/editCp',name: 'editCp',component: resolve=>require(['@/pages/EditCp'],resolve)},
  ]
})
