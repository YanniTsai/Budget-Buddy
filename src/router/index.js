import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/forget_password',
    component: () => import('../views/ForgetPassword.vue')
  },
  {
    path: '/create_account',
    component: () => import('../views/CreateAccount.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'account',
        component: () => import('../views/Account.vue')
      },
      {
        path: 'setting',
        component: () => import('../views/Setting.vue')
      },
      {
        path: 'ledger',
        component: () => import('../views/Ledger.vue')
      },
      {
        path: 'ledger/:ledgerId',
        component: () => import('../views/LedgerInfo.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
