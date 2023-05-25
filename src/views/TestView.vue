<script lang="ts" setup>
const BTN_COLORS_CLASS: Array<string> = [
  'btn-primary',
  'btn-secondary',
  'btn-accent',
  'btn-neutral',
  'btn-base-100',
  'btn-info',
  'btn-success',
  'btn-warning',
  'btn-error'
]
</script>

<template>
  <main class="pb-8 pt-20">
    <div class="text-xl">Buttons</div>
    <div class="flex flex-wrap">
      <div
        v-for="(btnClass, index) in BTN_COLORS_CLASS"
        :key="`btn-colors-class-${index}`"
        class="btn text-white m-2"
        :class="btnClass"
      >
        {{ btnClass }}
      </div>
    </div>
  </main>
</template>
