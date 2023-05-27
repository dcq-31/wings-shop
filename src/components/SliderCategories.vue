<script lang="ts" setup>
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
  <nav class="carousel carousel-end">
    <span
      v-for="(category, index) in CATEGORIES"
      :key="`layout-top-navbar-category-${index}`"
      class="badge badge-md cursor-pointer carousel-item"
      :class="[
        modelValue == category
          ? 'bg-accent border-accent text-white'
          : 'text-neutral bg-white border-transparent hover:text-black'
      ]"
      @click="emits('update:modelValue', category)"
    >
      {{ category }}
    </span>
  </nav>
</template>
