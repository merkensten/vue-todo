<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <main>
    <header>
      <h1 class="text-4xl">Header</h1>
    </header>
    <RouterView />
    <footer>
      <h1 class="text-4xl">Footer</h1>
    </footer>
  </main>
</template>
