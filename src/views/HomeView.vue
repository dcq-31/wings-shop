<script lang="ts" setup>
import { type ProductProps } from '@/components/widget/Product.vue'
import Product from '@/components/widget/Product.vue'
import ProductAdvanced from '@/components/widget/ProductAdvanced.vue'
const PRODUCTS: Array<ProductProps> = [
  {
    image: { src: '/products/adidas-small.png', alt: 'adidas product' },
    title: 'Tenis Adidas',
    price: 49,
    indicator: true
  },
  {
    image: { src: '/products/sueter-small.png', alt: 'sueter product' },
    title: 'Sueter',
    price: 27,
    indicator: true
  },
  {
    image: { src: '/products/sueter-small.png', alt: 'sueter product' },
    title: 'Sueter',
    price: 27,
    indicator: true
  },
  {
    image: { src: '/products/adidas-small.png', alt: 'adidas product' },
    title: 'Tenis Adidas',
    price: 49,
    indicator: true
  }
]
</script>

<template>
  <main class="pt-20 pb-8 px-2">
    <div class="py-5">
      <div class="mb-3">
        <div class="text-lg font-medium mb-2 pl-5">Más vendidos</div>
        <div class="grid grid-cols-2 gap-2">
          <Product
            v-for="(product, index) in PRODUCTS"
            :key="`home-most-selled-products-${index}`"
            v-bind="product"
            class="mx-auto"
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="text-lg font-medium mb-2 pl-5">Más Destacados</div>
        <div class="grid grid-cols-1 gap-2">
          <ProductAdvanced
            v-for="(product, index) in PRODUCTS"
            :key="`home-most-stars-products-${index}`"
            v-bind="product"
          />
        </div>
      </div>
    </div>
  </main>
</template>
