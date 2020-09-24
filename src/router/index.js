import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import mobile from '@/components/mobile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mobile',
      name: 'mobile',
      component: mobile
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
