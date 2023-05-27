<script lang="ts" setup>
import BaseProduct from './BaseProduct.vue'
import type { Product } from './Product.vue'

export interface ProductAdvancedProps extends Product {}

const props = defineProps<ProductAdvancedProps>()
</script>
<template>
  <BaseProduct :image="image" imageWidth="lg" imageRigth class="pl-0 bg-gray-50 w-80 mx-auto">
    <div class="flex items-center justify-center space-x-3">
      <div
        class="btn btn-xs py-1.5 px-3 btn-accent bg-white btn-outline rounded-full pointer-events-none"
      >
        Precio: $ {{ price }}
      </div>
      <div class="btn btn-xs py-1.5 px-3 btn-accent text-white rounded-full group">Añadir</div>
    </div>
    <template #image>
      <div class="absolute top-5 left-10 text-accent text-xl tracking-wide font-medium w-24">
        {{ title }}
      </div>
    </template>
  </BaseProduct>
</template>
