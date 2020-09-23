import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import layout from '@/layout/index.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        children: [
          {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/login.vue')
          },
          {
            path: '/down',
            name: 'down',
            component: () => import('@/views/down/down.vue')
          },
          {
            path: '/message',
            name: 'message',
            component: () => import('@/views/message/message.vue')
          }
        ]
      },
      {
        path: '/i18n',
        name: 'i18n',
        component: () => import('@/views/i18n/index.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

NProgress.configure({ showSpinner: false })
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
