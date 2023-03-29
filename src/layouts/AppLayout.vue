<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from '@/shared/stores/authStore';

const { logoutUser } = useAuthStore();
</script>

<template>
  <main>
    <header class="flex justify-between p-4">
      <h1 class="text-4xl">Header</h1>
      <button class="btn" @click="logoutUser">Logga ut</button>
    </header>
    <RouterView />
    <footer>
      <h1 class="text-4xl">Footer</h1>
    </footer>
  </main>
</template>
