import { createRouter, createWebHistory } from 'vue-router';
// Layout
import AppLayout from '@/layouts/AppLayout.vue';

// Views
// Guest Views
import LoginView from '@/views/LoginView.vue';
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundGuest',
      component: NotFoundGuestView,
    },
    {
      path: '/app',
      name: 'app',
      component: AppLayout,
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

export default router;
