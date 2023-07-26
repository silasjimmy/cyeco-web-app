import { createRouter, createWebHistory } from '@ionic/vue-router';

// Authentication views
import Home from '../views/auth/Home.vue'
import Terms from '../views/auth/Terms.vue'
import PhoneNumber from "../views/auth/PhoneNumber.vue";
import VerifyNumber from "../views/auth/VerifyNumber.vue";
import UserInfo from "../views/auth/UserInfo.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
