<template>
  <div class="detail">

    <h1>Маломощные натрий-ионные батареи</h1>

    <!-- 上半部分 -->
    <div class="top">

      <ProductGallery :images="images" />

      <ProductInfo
        title="4820(тип разделения)"
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
  new URL('../../assets/6033-2.svg', import.meta.url).href

]

const tableData = [
  { label: 'Номинальное напряжение, В', value: '72V' },
  { label: 'Номинальная ёмкость, А·ч', value: '33Ah' },
  { label: 'Габариты, мм', value: '266*230*170 & 266*230*170' },
  { label: 'Вес, кг', value: '29.4' },
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
