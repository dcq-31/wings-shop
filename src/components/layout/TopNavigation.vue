<script lang="ts" setup>
import { ref } from 'vue'
import SliderCategories from '@/components/SliderCategories.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { magnifyingGlass } from '@/helpers/icons'
import type { Category } from '@/types'

const categoryActive = ref<Category>('Todo')
</script>

<template>
  <div class="fixed top-0 w-full bg-white z-10">
    <div class="px-2">
      <div class="flex items-center justify-between py-2 px-1 mb-1">
        <div
          class="btn btn-sm btn-ghost text-black text-lg font-semibold tracking-wide hover:bg-gray-200"
        >
          <span class="text-primary">W</span>
          ings
        </div>
        <BaseIcon
          v-bind="magnifyingGlass"
          class="w-5 h-5 text-zinc-500 cursor-pointer hover:text-black"
        />
      </div>

      <!-- Category Selector -->
      <div class="flex items-center">
        <SliderCategories v-model="categoryActive" />
      </div>
    </div>
  </div>
</template>
