import { createRouter, createWebHistory } from '@ionic/vue-router';

// Authentication views
import Home from '../views/auth/Home.vue'
import Terms from '../views/auth/Terms.vue'
import PhoneNumber from "../views/auth/PhoneNumber.vue";
import VerifyNumber from "../views/auth/VerifyNumber.vue";
import UserInfo from "../views/auth/UserInfo.vue";

// Dashboard views
import Dashboard from "../views/dashboard/Dashboard.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/terms-and-conditions',
    name: 'terms',
    component: Terms
  },
  {
    path: '/phone-number',
    name: 'phone-number',
    component: PhoneNumber
  },
  {
    path: '/verify-number',
    name: 'verify-number',
    component: VerifyNumber
  },
  {
    path: '/user-info',
    name: 'user-info',
    component: UserInfo
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/home'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: "home",
        component: () => import('../views/dashboard/Navigation.vue'),
      },
      {
        path: "docks",
        component: () => import('../views/dashboard/Docks.vue'),
      },
      {
        path: "account",
        component: () => import('../views/dashboard/Account.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
