<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero -->
    <div class="relative h-screen">
      <div class="absolute inset-0 z-0">
        <img src="@/assets/images/property.jpg" alt="" class="object-cover w-full h-full opacity-70" />
      </div>
      <div class="relative z-10 flex flex-col h-full py-4">
        <Navbar />
        <div class="flex flex-col items-center justify-center flex-grow px-4">
          <h1 class="mb-4 text-4xl font-bold text-center text-gray-800 sm:text-4xl">
            Discover Your Ideal Home Here
          </h1>
          <p class="max-w-3xl mx-auto mb-5 text-lg text-center text-gray-600 sm:text-lg">
            Discover your dream home with our real estate services. Whether you are looking to buy, sell or rent, we are here to help.
          </p>
          <!-- Add your filter component here -->
        </div>
      </div>
    </div>

    <!-- Properties -->
    <div class="container px-4 py-12 mx-auto">
      <h2 class="mb-8 text-3xl font-bold text-center">Find Your Perfect Property</h2>

      <p v-if="error" class="mb-4 text-center text-red-500">{{ error }}</p>

      <div v-if="loading" class="text-center">Loading properties...</div>

      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <PropertyCard v-for="property in properties" :key="property.id" v-bind="property" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import PropertyCard from '@/components/PropertyCard.vue'

const store = useStore()
const error = ref('')
const loading = ref(true)

const properties = computed(() => store?.getters?.getProperties)

onMounted(async () => {
  loading.value = true // Ensure loading state is set before fetching
  try {
    await store?.dispatch('fetchProperties')
  } catch (err) {
    console.error(err)
    error.value = 'Failed to fetch properties. Please try again later.'
  } finally {
    loading.value = false
  }
})
</script>