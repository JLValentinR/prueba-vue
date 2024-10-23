import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/services/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

// console.log(isAuthenticated())

// Global Guard navigation
router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path.includes('agencia') || to.path.includes('radio') || to.path.includes('anunciante')) {
    if (!isAuthenticated()) {
      localStorage.removeItem('token')
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.path === '/login' || to.path === '/') {
    if (isAuthenticated()) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
