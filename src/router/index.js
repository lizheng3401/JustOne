import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import index from '@/view/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: index,
        }
      ]
    }
  ]
})
