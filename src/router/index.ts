import { createRouter, createWebHistory } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/shared/stores/authStore';

// Layout
import AppLayout from '@/layouts/AppLayout.vue';

// Views
// Guest Views
import LoginView from '@/views/guest/LoginView/LoginView.vue';
import NotFoundGuestView from '@/views/NotFoundGuestView.vue';

// App views
import DashboardView from '@/views/app/DashboardView.vue';
import AccountView from '@/views/app/AccountView.vue';
import NotFoundAppView from '@/views/app/NotFoundAppView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { requiresGuest: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundGuest',
      component: NotFoundGuestView,
      meta: { requiresGuest: true },
    },
    {
      path: '/app',
      name: 'app',
      component: AppLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: 'konto',
          name: 'account',
          component: AccountView,
        },
        {
          path: ':pathMatch(.*)*',
          name: 'NotFoundApp',
          component: NotFoundAppView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = storeToRefs(useAuthStore());

  if (to.meta.requiresAuth && !isAuthenticated.value)
    return next({ name: 'login' });

  if (to.meta.requiresGuest && isAuthenticated.value)
    return next({ name: 'dashboard' });

  return next();
});

export default router;
