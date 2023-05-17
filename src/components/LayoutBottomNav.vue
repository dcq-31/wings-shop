<script setup lang="ts">
import { useRoute, RouterLink, type RouteLocationRaw } from 'vue-router'
import BaseIcon from '@/components/BaseIcon.vue'
import { home, type IconSVG } from '@/helpers/icons'
import { ROUTES } from '@/router/names'

interface Link {
  label: string
  to: RouteLocationRaw
}

interface IconLink extends Link {
  icon: IconSVG
}

const NAV_LINKS: Array<IconLink> = [
  { icon: home, label: 'Inicio', to: { name: ROUTES.HOME } },
  { icon: home, label: 'Categorías', to: { name: '' } },
  { icon: home, label: 'Carrito', to: { name: ROUTES.CARET } },
  { icon: home, label: 'Notificaciones', to: { name: '' } },
  { icon: home, label: 'Cuenta', to: { name: ROUTES.USER } }
]

const route = useRoute()
</script>

<template>
  <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t">
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto pb-2">
      <RouterLink
        :to="link.to"
        class="inline-flex flex-col items-center justify-center px-2 text-neutral"
        v-for="(link, index) in NAV_LINKS"
        :key="`layout-bottom-nav-icon-${index}`"
      >
        <div
          class="p-2"
          :class="{
            'ring-2 ring-white rounded-full bg-primary relative -top-5 shadow-md':
              link.to.name == route.name
          }"
        >
          <BaseIcon
            v-bind="link.icon"
            class="w-6 h-6 mx-auto"
            :class="{ 'text-white w-7 h-7': link.to.name == route.name }"
          />
        </div>
        <div class="text-xs text-center">{{ link.label }}</div>
      </RouterLink>
    </div>
  </div>
</template>
