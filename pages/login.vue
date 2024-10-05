<template>
  <div
    class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Log in to your account
        </h2>
      </div>
      <div
        v-if="apiError"
        class="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md"
      >
        {{ apiError }}
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              v-model="email"
            />
            <p v-if="errors.email" class="mt-2 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>
          <div class="relative">
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              :type="showPassword ? 'text' : 'password'"
              autocomplete="current-password"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              v-model="password"
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 flex items-center pr-3"
              @click="togglePassword"
            >
              <component
                :is="showPassword ? EyeOff : Eye"
                class="w-5 h-5 text-gray-400"
              />
            </button>
            <p v-if="errors.password" class="mt-2 text-sm text-red-600">
              {{ errors.password }}
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Eye, EyeOff } from "lucide-vue-next";

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const errors = ref({});
const apiError = ref("");

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const validateForm = () => {
  let formErrors = {};

  if (!email.value) {
    formErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    formErrors.email = "Email is invalid";
  }

  if (!password.value) {
    formErrors.password = "Password is required";
  } else if (password.value.length < 6) {
    formErrors.password = "Password must be at least 6 characters";
  }

  errors.value = formErrors;
  return Object.keys(formErrors).length === 0;
};

const handleSubmit = async () => {
  apiError.value = "";

  if (validateForm()) {
    try {
      const response = await store.dispatch("login", {
        email: email.value,
        password: password.value,
      });
      if (response && response.token) {
        localStorage.setItem("token", response.token);
        router.push("/");
      } else {
        apiError.value = "Login failed. Please try again.";
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        apiError.value = error.response.data.message;
      } else {
        apiError.value = "An error occurred. Please try again later.";
      }
    }
  }
};
</script>
