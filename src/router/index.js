import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/page/index/index.vue')
    },
    {
      path: '/page-1',
      name: 'page-1',
      component: () => import('@/page/page-1/index.vue')
    },
    {
      path: '/page-2/userName/:userName/id/:id',
      name: 'page-2',
      component: () => import('@/page/page-2/index.vue')
    },
    {
      path: '/page-3',
      name: 'page-3',
      component: () => import('@/page/page-3/index.vue'),
      children: [
        {
          path: 'page-4',
          name: 'page-4',
          component: () => import('@/page/page-4/index.vue')
        }
      ]
    },
    {
      path: '/page-5',
      name: 'page-5',
      component: () => import('@/page/page-5/index.vue')
    }
  ]
})
