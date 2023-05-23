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
  <div class="fixed bottom-0 w-full bg-white border-t z-10">
    <nav class="flex justify-center mx-auto">
      <RouterLink
        :to="link.to"
        class="btn btn-ghost px-3 flex flex-col relative justify-center h-16"
        v-for="(link, index) in LINKS"
        :key="`layout-bottom-nav-icon-${index}`"
      >
        <!-- Floating Active Icon -->
        <div
          v-if="link.to.name == route.name"
          class="p-2 ring-2 ring-white rounded-full w-min bg-primary -top-5 shadow-md absolute left-0 right-0 mx-auto z-20"
        >
          <BaseIcon v-bind="link.icon" class="mx-auto text-white w-6 h-6" />
        </div>

        <BaseIcon
          v-bind="link.icon"
          :class="{ invisible: link.to.name == route.name }"
          class="mx-auto mb-2 w-5 h-5 text-neutral"
        />

        <div class="text-xs text-center text-neutral">{{ link.label }}</div>
      </RouterLink>
    </nav>
  </div>
</template>
