<template>
  <section class="products">
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :title="item.title"
      :desc="item.desc"
      :img="item.img"
      :reverse="item.reverse"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'
import { getProducts } from '../api'
import type { Product } from '../types'

const products = ref<Product[]>([])

onMounted(async () => {
  products.value = await getProducts()
})
</script>

<style scoped>
.products {
  padding: 120px 100px;
}
</style>