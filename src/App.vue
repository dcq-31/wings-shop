<script lang="ts" setup>
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import TopNavigation from '@/components/layout/TopNavigation.vue'
</script>

<template>
  <TopNavigation />
  <RouterView />
  <BottomNavigation />
</template>
