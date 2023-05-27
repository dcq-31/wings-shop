<script lang="ts" setup>
import BaseProduct from './BaseProduct.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { shoppingCart } from '@/helpers/icons'
import type { Image } from '@/types'

export interface Product {
  image: Image
  title: string
  price: number
}

export interface ProductProps extends Product {
  indicator: boolean
}

const props = defineProps<ProductProps>()
</script>
<template>
  <div :class="{ indicator: 'indicator' }">
    <BaseProduct :image="image" imageWidth="md" class="pt-5">
      <h2 class="card-title text-accent text-sm font-medium tracking-wide">{{ title }}</h2>
      <div class="text-secondary text-xs">$ {{ price }}</div>
    </BaseProduct>
    <BaseIcon
      v-if="indicator"
      v-bind="shoppingCart"
      class="indicator-item top-2 right-2 translate-x-0 translate-y-0 w-4 h-4 cursor-pointer text-secondary hover:text-secondary-focus"
    />
  </div>
</template>
