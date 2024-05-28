import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory('/portfolio/'),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    //portfolio
    {
      path: '/view',
      component: () => import('../views/PortFolio.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../views/IndexHome.vue')
        },
        {
          path: 'todolist',
          component: () => import('../views/TodoList.vue')
        },
        {
          path: 'domotorotimer',
          component: () => import('../views/DomotoroTimer.vue')
        }
      ]
    }
  ]
})

export default router
