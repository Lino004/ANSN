import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/404.vue')
  },
  {
    path: '/',
    name: 'HomeOne',
    component: () => import('../views/HomeTwo.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/activités',
    name: 'ServiceDetails',
    component: () => import('../views/ServiceDetails.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/project-details',
    name: 'ProjectDetails',
    component: () => import('../views/ProjectDetails.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/paiement',
    name: 'Paiement',
    component: () => import('../views/Paiement.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
