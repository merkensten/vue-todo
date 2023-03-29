<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/shared/stores/authStore';

const { loginUser } = useAuthStore();

const username = ref('');
const password = ref('');

function onFormSubmit() {
  loginUser(username.value);
}
</script>

<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
      <form class="space-y-4" @submit.prevent="onFormSubmit">
        <div>
          <label
            for="username"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Användarnamn</label
          >
          <div class="mt-2">
            <input
              id="username"
              name="username"
              v-model="username"
              type="text"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Lösenord</label
          >
          <div class="mt-2">
            <input
              id="password"
              name="password"
              v-model="password"
              type="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            class="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logga In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
