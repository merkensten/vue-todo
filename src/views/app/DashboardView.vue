<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <main>
    <div class="bg-slate-300 py-20">
      <div class="p-10">
        <h1 class="text-4xl">Dashboard Vyn</h1>
      </div>
    </div>
    <RouterView />
  </main>
</template>
