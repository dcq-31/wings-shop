<script setup lang="ts">
import LayoutBottomNavbar from '@/components/LayoutBottomNavbar.vue'
import LayoutTopNavbar from './components/LayoutTopNavbar.vue'
</script>

<template>
  <LayoutTopNavbar />
  <RouterView />
  <LayoutBottomNavbar />
</template>
