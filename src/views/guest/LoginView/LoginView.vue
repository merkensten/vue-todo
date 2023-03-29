<script setup lang="ts">
import Login from './components/Login.vue';
import Register from './components/Register.vue';

import { ref } from 'vue';

const showLogin = ref(true);

function toggleShowLogin() {
  showLogin.value = !showLogin.value;
}
</script>

<template>
  <main class="mt-10">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <div v-if="showLogin">
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Logga in
        </h2>
        <div class="flex justify-end">
          <button class="my-2 text-gray-600" @click="toggleShowLogin">
            Skapa konto
          </button>
        </div>
      </div>
      <div v-else>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Skapa konto
        </h2>
        <div class="flex justify-end">
          <button class="my-2 text-gray-600" @click="toggleShowLogin">
            Logga in
          </button>
        </div>
      </div>
    </div>
    <div v-if="showLogin">
      <Login />
    </div>
    <div v-else>
      <Register @show-login="toggleShowLogin" />
    </div>
  </main>
</template>
