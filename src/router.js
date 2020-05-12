import Router from 'vue-router'

import WellcomePage from '@/views/WellcomePage'
import CommandCenter from '@/views/CommandCenter'
import NotFound from '@/views/NotFound'

const router = new Router({
    mode: 'history',
    scrollBehavior() { // params: (to, from, savedPosition)
      return { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/',
        name: 'wellcomePage',
        component: WellcomePage,
        meta: {
          deep: 0
        }
      },
      {
        path: '/home',
        name: 'commandCenter',
        component: CommandCenter,
        meta: {
          deep: 1
        }
      },
      {
        path: '*',
        name: 'ErrorNotFound',
        component: NotFound,
        meta: {
          deep: 9999
        }
      },
    ]
})

export default router
