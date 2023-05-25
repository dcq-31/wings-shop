<script setup lang="ts">
import { useRoute, RouterLink, type RouteLocationRaw } from 'vue-router'
import BaseIcon from '@/components/BaseIcon.vue'
import { home, squares2x2, shoppingCart, shoppingBag, user, type IconSVG } from '@/helpers/icons'
import { ROUTES } from '@/router/names'

interface Link {
  label: string
  to: RouteLocationRaw
}

interface IconLink extends Link {
  icon: IconSVG
}

const LINKS: Array<IconLink> = [
  { icon: home, label: 'Inicio', to: { name: ROUTES.HOME } },
  { icon: squares2x2, label: 'Categorías', to: { name: '' } },
  { icon: shoppingCart, label: 'Carrito', to: { name: ROUTES.CARET } },
  { icon: shoppingBag, label: 'Pedidos', to: { name: '' } },
  { icon: user, label: 'Cuenta', to: { name: ROUTES.USER } }
]

const route = useRoute()
</script>

<template>
  <div class="fixed bottom-0 w-full bg-white z-10 overflow-auto">
    <nav class="flex justify-between max-w-sm mx-auto">
      <RouterLink
        v-for="(link, index) in LINKS"
        :to="link.to"
        class="btn btn-ghost bg-white border-transparent px-3 flex flex-col justify-center h-16"
        :class="link.to.name == route.name ? 'text-primary' : 'text-neutral'"
        :key="`layout-bottom-nav-icon-${index}`"
      >
        <BaseIcon v-bind="link.icon" class="mx-auto mb-2 w-5 h-5" />

        <div class="text-xs text-center">{{ link.label }}</div>
      </RouterLink>
    </nav>
  </div>
</template>
