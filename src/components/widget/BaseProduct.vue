<script lang="ts" setup>
import type { Image, Size } from '@/types'
import { computed } from 'vue'

interface BaseProductProps {
  image: Image
  imageWidth: Size
  imageRigth?: boolean
}

const props = defineProps<BaseProductProps>()

const imageWidthClass = computed(() => {
  switch (props.imageWidth) {
    case 'md':
      return 'w-32'
    case 'lg':
      return 'w-44'
    default:
      return 'w-32'
  }
})
</script>

<template>
  <div class="card p-2 rounded-lg">
    <figure class="p-2 relative">
      <slot name="image"></slot>
      <img
        :src="image.src"
        :alt="image.alt"
        :class="[imageWidthClass, imageRigth ? 'ml-20' : '']"
      />
    </figure>
    <div class="card-body gap-1 p-1">
      <slot> </slot>
    </div>
  </div>
</template>
