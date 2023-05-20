<script setup lang="ts">
import { useRoute, RouterLink, type RouteLocationRaw } from 'vue-router'
import BaseIcon from '@/components/BaseIcon.vue'
import { home, squares2x2, shoppingCart, bell, user } from '@/helpers/icons'
import type { IconSVG } from '@/helpers/icons'
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
  { icon: bell, label: 'Notificaciones', to: { name: '' } },
  { icon: user, label: 'Cuenta', to: { name: ROUTES.USER } }
]

const route = useRoute()
</script>

<template>
  <div class="fixed bottom-0 left-0 w-full bg-white border-t z-10">
    <div class="flex max-w-md justify-center mx-auto">
      <RouterLink
        :to="link.to"
        class="p-2 flex flex-col relative justify-end text-neutral h-16 w-24"
        v-for="(link, index) in LINKS"
        :key="`layout-bottom-nav-icon-${index}`"
      >
        <div
          class="p-2"
          :class="{
            'ring-2 ring-white rounded-full w-min bg-primary -top-5 shadow-md absolute left-0 right-0 mx-auto z-20':
              link.to.name == route.name
          }"
        >
          <BaseIcon
            v-bind="link.icon"
            class="mx-auto"
            :class="[link.to.name == route.name ? 'text-white w-6 h-6' : 'w-5 h-5']"
          />
        </div>
        <div class="text-xs text-center">{{ link.label }}</div>
      </RouterLink>
    </div>
  </div>
</template>
