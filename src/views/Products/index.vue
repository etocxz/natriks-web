<template>
  <div class="products-page">

    <!-- 左侧 -->
    <CategoryMenu
      v-model="currentCategory"
      :categories="categories"
    />

    <!-- 右侧 -->
    <ProductList :list="filteredProducts" />

  </div>
</template>

<script setup lang="ts">
import { ref, computed,watch} from 'vue'
import CategoryMenu from './components/CategoryMenu.vue'
import ProductList from './components/ProductList.vue'
import { useRoute,useRouter } from 'vue-router'

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
  { key: 'car', label: ' 12V Автомобильные стартерные аккумуляторы' },
]

// 模拟数据（后面可以换API）
const products = [
  { id: 1, title: 'H6', category: 'car', img: '../assets/H6-sample.svg' },
  { id: 2, title: 'H7', category: 'car', img: '../assets/H6-sample.svg' },
  { id: 3, title: 'H8', category: 'car', img: '../assets/H6-sample.svg' },
  { id: 4, title: 'H9', category: 'car', img: '../assets/H6-sample.svg' },
  { id: 1, title: '4820(тип разделения)', category: 'low', img: '../assets/4820.svg' },
  { id: 2, title: '4820(Всё в одном)', category: 'low', img: '../assets/4820-1.svg' },
  { id: 3, title: '4833(тип разделения)', category: 'low', img: '../assets/4833.svg' },
  { id: 4, title: '6020(тип разделения)', category: 'low', img: '../assets/6020.svg' },
  { id: 5, title: '6033(тип разделения)', category: 'low', img: '../assets/6033.svg' },
  { id: 6, title: '7220(тип разделения)', category: 'low', img: '../assets/7220.svg' },
  { id: 7, title: '6033(тип разделения)', category: 'low', img: '../assets/6033-2.svg' },
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
</style>