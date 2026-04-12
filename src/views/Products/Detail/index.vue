<template>
  <component :is="currentComponent" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import LowPower from './components/LowPower.vue'
import CarBattery from './components/CarBattery.vue'

const route = useRoute()

const currentComponent = computed(() => {
  const id = Number(route.params.id)

  if (id === 1) return CarBattery
  if (id === 2) return LowPower

  return null
})
</script>