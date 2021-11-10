import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/error-page'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../views/dashboard/l_projects.vue')
      },
      {
        path: 'view-project/:id',
        name: 'ViewProject',
        component: () => import('../views/dashboard/v_project.vue')
      },
      {
        path: 'edit-project/:id',
        name: 'EditProject',
        component: () => import('../views/dashboard/v_project.vue')
      },
      {
        path: 'add-project',
        name: 'AddProject',
        component: () => import('../views/dashboard/v_project.vue')
      },
      {
        path: 'list-partenaires',
        name: 'ListPartenaires',
        component: () => import('../views/dashboard/l_partenaires.vue')
      },
      {
        path: 'list-messages',
        name: 'Messagerie',
        component: () => import('../views/dashboard/l_messages.vue')
      },
      {
        path: 'list-equipe',
        name: 'ListEquipe',
        component: () => import('../views/dashboard/l_equipe.vue')
      },
      {
        path: 'add-equipe',
        name: 'AddEquipe',
        component: () => import('../views/dashboard/v_equipe.vue')
      },
      {
        path: 'edit-equipe/:id',
        name: 'EditEquipe',
        component: () => import('../views/dashboard/v_equipe.vue')
      },
      {
        path: 'view-equipe',
        name: 'ViewEquipe',
        component: () => import('../views/dashboard/v_equipe.vue')
      },
      {
        path: 'view-parametre',
        name: 'ViewParametre',
        component: () => import('../views/dashboard/v_parametre.vue')
      }
    ]
  },
  {
    path: '/error-page',
    name: 'Error',
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
