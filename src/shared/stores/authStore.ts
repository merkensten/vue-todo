import { ref } from 'vue';
import { defineStore } from 'pinia';
import router from '@/router';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<string>('');
    const isAuthenticated = ref<boolean>(false);

    const loginUser = (username: string) => {
      user.value = username;
      isAuthenticated.value = true;

      console.log('User logged in');
      console.log(user.value);
      console.log(isAuthenticated.value);

      router.push('/app');
    };

    const logoutUser = () => {
      user.value = '';
      isAuthenticated.value = false;

      router.push('/');
    };

    return { user, isAuthenticated, loginUser, logoutUser };
  },
  { persist: true }
);
