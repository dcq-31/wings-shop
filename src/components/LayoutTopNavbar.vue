<script setup lang="ts">
import { ref } from 'vue'
import SliderCategories from '@/components/SliderCategories.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { magnifyingGlass, heart, bars } from '@/helpers/icons'
import type { Category } from '@/types'

const active_category = ref<Category>('Todo')
</script>

<template>
  <div class="fixed top-0 w-full bg-white z-10">
    <div class="px-2 border border-b-gray-100">
      <div class="flex items-center justify-center py-2 px-1 mb-1">
        <!-- Search Input -->
        <div
          class="flex items-center px-3 rounded-md ring-1 ring-transparent bg-gray-100 focus-within:ring-inset focus-within:ring-gray-300"
        >
          <input
            type="text"
            class="input input-sm bg-transparent text-sm placeholder:text-gray-400 focus:outline-none"
            placeholder="Buscar"
          />
          <BaseIcon v-bind="magnifyingGlass" class="w-4 h-4 text-neutral cursor-pointer" />
        </div>

        <BaseIcon v-bind="heart" class="text-neutral w-5 h-5 ml-2 cursor-pointer" />
      </div>

      <!-- Category Selector -->
      <div class="flex items-center">
        <SliderCategories v-model="active_category" />
        <BaseIcon v-bind="bars" class="w-9 h-9 text-neutral cursor-pointer ml-3" />
      </div>
    </div>
  </div>
</template>
