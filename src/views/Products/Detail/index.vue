<template>
  <component :is="currentComponent" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import L4820 from './components/4820.vue'
import L4820_1 from './components/4820-1.vue'
import L4833 from './components/4833.vue'
import L6020 from './components/6020.vue'
import L6033 from './components/6033.vue'
import L7220 from './components/7220.vue'
import L6033_2 from './components/6033-2.vue'

import H6 from './components/H6.vue'
import H7 from './components/H7.vue'
import H8 from './components/H8.vue'
import H9 from './components/H9.vue'

const route = useRoute()

const currentComponent = computed(() => {
  const id = Number(route.params.id)
  const category = route.params.category

  if (id === 1 && category === "car") return H6
  if (id === 2 && category === "car") return H7
  if (id === 3 && category === "car") return H8
  if (id === 4 && category === "car") return H9

  if (id === 1 && category === "low") return L4820
  if (id === 2 && category === "low") return L4820_1
  if (id === 3 && category === "low") return L4833
  if (id === 4 && category === "low") return L6020
  if (id === 5 && category === "low") return L6033
  if (id === 6 && category === "low") return L7220
  if (id === 7 && category === "low") return L6033_2



  return null
})
</script>