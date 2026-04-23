<template>
  <div class="products-page">

    <!-- 宸︿晶 -->
    <CategoryMenu
      v-model="currentCategory"
      :categories="categories"
    />

    <!-- 鍙充晶 -->
    <ProductList :list="filteredProducts" />

  </div>
</template>

<script setup lang="ts">
import { ref, computed,watch} from 'vue'
import CategoryMenu from './components/CategoryMenu.vue'
import ProductList from './components/ProductList.vue'
import { useRoute,useRouter } from 'vue-router'
import imgH6Sample from './assets/H6-sample.svg'
import img4820 from './assets/4820.svg'
import img4820_1 from './assets/4820-1.svg'
import img4833 from './assets/4833.svg'
import img6020 from './assets/6020.svg'
import img6033 from './assets/6033.svg'
import img7220 from './assets/7220.svg'
import img6033_2 from './assets/6033-2.svg'

const currentCategory = ref('low')

const route = useRoute()
watch(
  () => route.params.category,
  (val) => {
    if (val) currentCategory.value = val as string
  },
  { immediate: true }
)

const router = useRouter()
watch(currentCategory, (val) => {
  router.push(`/products/${val}`)
})



const categories = [
  { key: 'low', label: 'Малые тяговые натриевые аккумуляторы' },
  { key: 'car', label: '12V Автомобильные стартерные аккумуляторы' },
]


const products = [
  { id: 1, title: 'H6', category: 'car', img: imgH6Sample },
  { id: 2, title: 'H7', category: 'car', img: imgH6Sample },
  { id: 3, title: 'H8', category: 'car', img: imgH6Sample },
  { id: 4, title: 'H9', category: 'car', img: imgH6Sample },
  { id: 1, title: '4820', category: 'low', img: img4820 },
  { id: 2, title: '4820(Всё в одном)', category: 'low', img: img4820_1 },
  { id: 3, title: '4833', category: 'low', img: img4833 },
  { id: 4, title: '6020', category: 'low', img: img6020 },
  { id: 5, title: '6033', category: 'low', img: img6033 },
  { id: 6, title: '7220', category: 'low', img: img7220 },
  { id: 7, title: '6033', category: 'low', img: img6033_2 },
]

const filteredProducts = computed(() => {
  return products.filter(p => p.category === currentCategory.value)
})
</script>

<style scoped>
.products-page {
  display: flex;
  gap: 40px;
  padding: 60px;
}

@media (max-width: 768px) {
  .products-page {
    flex-direction: column;
    gap: 24px;
    padding: 24px 20px 60px;
  }
}
</style>
