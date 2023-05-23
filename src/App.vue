<script setup lang="ts">
import LayoutBottomNav from '@/components/LayoutBottomNav.vue'
import LayoutTopNavbar from './components/LayoutTopNavbar.vue'
</script>

<template>
  <LayoutTopNavbar />
  <RouterView />
  <LayoutBottomNav />
</template>
