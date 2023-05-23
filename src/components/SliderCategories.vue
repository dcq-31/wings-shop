<script setup lang="ts">
import type { Category } from '@/types'

interface SliderCategoriesProps {
  modelValue: Category
}

interface SliderCategoriesEmits {
  (e: 'update:modelValue', value: Category): void
}

const props = defineProps<SliderCategoriesProps>()
const emits = defineEmits<SliderCategoriesEmits>()

const CATEGORIES: Array<Category> = [
  'Todo',
  'Ropa',
  'Zapatos',
  'Perfumes',
  'Accesorios',
  'Joyas',
  'Casa'
]
</script>

<template>
  <nav class="carousel sm:space-x-1">
    <span
      v-for="(category, index) in CATEGORIES"
      :key="`layout-top-navbar-category-${index}`"
      class="px-2 py-1 text-xs tracking-normal hover:text-black cursor-pointer text-neutral uppercase carousel-item"
      :class="{
        'text-black decoration-2 decoration-primary underline underline-offset-4':
          modelValue == category
      }"
      @click="emits('update:modelValue', category)"
    >
      {{ category }}
    </span>
  </nav>
</template>
