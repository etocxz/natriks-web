<template>
  <div class="detail">

    <h1>Высокопроизводительная натрий-ионная аккумуляторная батарея 12 В для запуска и остановки двигателя автомобиля.</h1>

    <!-- 上半部分 -->
    <div class="top">

      <ProductGallery :images="images" />

      <ProductInfo
        title="H6"
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
  { label: 'Модель', value: '12QT40H6-650' },
  { label: 'Номинальное напряжение', value: '12V' },
  { label: 'Пусковой ток (CCA)', value: '650A' },
  { label: 'Длина, мм', value: '278' },
  { label: 'Ширина, мм', value: '175' },
  { label: 'Высота, мм', value: '190' },
  { label: 'Вес, кг', value: '6.9' },
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

@media (max-width: 768px) {
  .detail {
    padding: 24px 20px 48px;
  }

  h1 {
    font-size: 26px;
    line-height: 1.35;
    margin-bottom: 24px;
  }

  .top {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }
}
</style>
