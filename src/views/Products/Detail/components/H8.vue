<template>
  <div class="detail">

    <h1>Высокопроизводительная натрий-ионная аккумуляторная батарея 12 В для запуска и остановки двигателя автомобиля.</h1>

    <!-- 上半部分 -->
    <div class="top">

      <ProductGallery :images="images" />

      <ProductInfo
        title="H8"
        desc=""
        />

    </div>

    <!-- 表格 -->
    <ProductTable :data="tableData" />

  </div>
</template>

<script setup lang="ts">
import ProductGallery from './ProductGallery.vue'
import ProductInfo from './ProductInfo.vue'
import ProductTable from './ProductTable.vue'

const images = [
  new URL('../../assets/H6-sample.svg', import.meta.url).href
]

const tableData = [
  { label: 'Модель', value: '12QT40H8-800' },
  { label: 'Номинальное напряжение', value: '12V' },
  { label: 'Пусковой ток (CCA)', value: '800A' },
  { label: 'Длина, мм', value: '355' },
  { label: 'Ширина, мм', value: '175' },
  { label: 'Высота, мм', value: '190' },
  { label: 'Вес, кг', value: '8.5' },
]
</script>

<style scoped>
.detail {
  padding: 80px;
}

.top {
  display: flex;
  gap: 60px;
  align-items: center;
}
</style>