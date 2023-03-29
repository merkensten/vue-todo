<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['show-login']);

const username = ref('');
const password = ref('');
const confirmPassword = ref('');

function onFormSubmit() {
  console.log(username.value, password.value, confirmPassword.value);
  console.log('skapar konto...');

  if (username.value === '') {
    console.log('användarnamn saknas');
    return;
  }

  if (password.value === '' || confirmPassword.value === '') {
    console.log('fyll i lösenord');
    return;
  }

  if (password.value !== confirmPassword.value) {
    console.log('lösenorden matchar inte');
    return;
  }

  emit('show-login');
}
</script>

<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
      <form class="space-y-2" @submit.prevent="onFormSubmit">
        <div>
          <label
            for="username"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Användarnamn</label
          >
          <div class="mt-2">
            <input
              id="username"
              v-model="username"
              name="username"
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
              v-model="password"
              name="password"
              type="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="confirm-password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Bekräfta Lösenord</label
          >
          <div class="mt-2">
            <input
              id="confirm-password"
              v-model="confirmPassword"
              name="confirm-password"
              type="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Skapa Konto
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
