<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <div class="bg-slate-300 py-20">
      <div class="p-10">
        <h1 class="text-4xl">App sidan hittades inte</h1>
        <RouterLink class="btn" to="/app">Tillbaka till appen</RouterLink>
      </div>
    </div>
  </main>
</template>
