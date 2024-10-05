<template>
    <div class="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
      <div class="relative">
        <img :src="image" :alt="name" class="object-cover w-full h-48" />
        <button class="absolute p-2 transition-colors duration-200 bg-white rounded-full shadow-md top-2 right-2 hover:bg-gray-100">
          <Heart class="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div class="p-4">
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-xl font-semibold text-gray-800">{{ name }}</h3>
          <p class="text-lg font-bold text-indigo-600">${{ price }}/month</p>
        </div>
        <p class="flex items-center mb-4 text-sm text-gray-600">
          <MapPin class="w-4 h-4 mr-1" />
          {{ location }}
        </p>
        <hr class="my-4" />
        <div class="flex justify-between text-sm text-gray-600">
          <div class="flex items-center">
            <Bed class="w-4 h-4 mr-1" />
            <span>{{ details.beds }} Beds</span>
          </div>
          <div class="flex items-center">
            <Bath class="w-4 h-4 mr-1" />
            <span>{{ details.halls }} Baths</span>
          </div>
          <div class="flex items-center">
            <span>{{ details.area }} sqft</span>
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50">
        <button class="w-full py-2 text-sm font-medium text-white transition-colors duration-200 bg-indigo-600 rounded-md hover:bg-indigo-700">
          View Details
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Heart, MapPin, Bed, Bath } from 'lucide-vue-next'
  
  defineProps({
    image: String,
    price: Number,
    name: String,
    location: String,
    details: Object
  })
  </script>