<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

const navigation = {
  main: [
    { name: 'Dashboard', href: '/app' },
    { name: 'Mitt Konto', href: '/app/konto' },
  ],
};

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav
        class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        <div v-for="item in navigation.main" :key="item.name" class="pb-6">
          <RouterLink
            :to="item.href"
            class="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >{{ item.name }}</RouterLink
          >
        </div>
      </nav>

      <p class="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; Vue todo app - {{ year }}
      </p>
    </div>
  </footer>
</template>
