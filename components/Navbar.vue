<template>
    <nav class="px-4 py-3 mx-2 text-white bg-black rounded-lg sm:mx-4 md:mx-8 lg:mx-20">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
            <span class="text-xl font-semibold">RealEs</span>
          </div>
  
          <div class="md:hidden">
            <button @click="toggleMenu" class="focus:outline-none">
              <Menu v-if="!isMenuOpen" :size="24" />
              <X v-else :size="24" />
            </button>
          </div>
  
          <div class="hidden md:flex md:items-center md:space-x-6">
            <NuxtLink to="/" class="transition duration-300 hover:text-gray-300">Home</NuxtLink>
            <a href="#" class="transition duration-300 hover:text-gray-300">Featured</a>
            <a href="#" class="transition duration-300 hover:text-gray-300">Services</a>
            <a href="#" class="transition duration-300 hover:text-gray-300">About</a>
            <a href="#" class="transition duration-300 hover:text-gray-300">Reviews</a>
            <a href="#" class="transition duration-300 hover:text-gray-300">Faq</a>
            <NuxtLink to="/login" class="px-4 py-1 text-white transition duration-300 bg-black border border-white rounded hover:bg-white hover:text-black">
              Log in
            </NuxtLink>
            <NuxtLink to="/signup" class="px-4 py-1 text-black transition duration-300 bg-white rounded hover:bg-gray-200">
              Sign up
            </NuxtLink>
          </div>
        </div>
  
        <div v-if="isMenuOpen" class="mt-4 md:hidden">
          <div class="flex flex-col space-y-2">
            <NuxtLink to="/" class="transition duration-300 hover:text-gray-300">Home</NuxtLink>
            <a href="#" class="transition duration-300 hover:text-gray-300">Featured</a>
            <a href="#" class="transition duration-300 hover:text-gray-300">Services</a>
            <a href="#" class="transition duration-300 hover:text-gray-300">About</a>
            <a href="#" class="transition duration-300 hover:text-gray-300">Reviews</a>
            <a href="#" class="transition duration-300 hover:text-gray-300">Faq</a>
          </div>
          <div class="flex flex-col mt-4 space-y-2">
            <NuxtLink to="/login" class="px-4 py-1 text-white transition duration-300 bg-black border border-white rounded hover:bg-white hover:text-black">
              Log in
            </NuxtLink>
            <NuxtLink to="/signup" class="px-4 py-1 text-black transition duration-300 bg-white rounded hover:bg-gray-200">
              Sign up
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Menu, X } from 'lucide-vue-next'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  </script>