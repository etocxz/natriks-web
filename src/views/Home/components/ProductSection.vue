<template>
  <section class="products">
    <h2>Our Products</h2>

    <ProductCard
      v-for="item in products"
      :key="item.id"
      :title="item.title"
      :desc="item.desc"
      :image="item.image"
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
  padding: 120px 80px;
}

h2 {
  font-size: 36px;
  margin-bottom: 60px;
}
</style>