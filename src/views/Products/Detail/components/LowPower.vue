<template>
  <div class="detail">

    <h1>Маломощные натрий-ионные батареи</h1>

    <!-- 上半部分 -->
    <div class="top">

      <ProductGallery :images="images" />

      <ProductInfo
        title="4820(тип разделения)"
        desc="Высокопроизводительная 12В натрий-ионная батарея для систем запуска и остановки двигателя. Обеспечивает быстрый запуск, стабильную работу в экстремальных условиях и повышенную долговечность по сравнению с традиционными аккумуляторами."
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
  'http://www.ygtech.net.cn/upload/20250902174747.jpg',
  'http://www.ygtech.net.cn/upload/20250902174442.jpg',
  'http://www.ygtech.net.cn/upload/20250902173555705_37542.jpg',
]

const tableData = [
  { label: 'Номинальное напряжение, В', value: '48V' },
  { label: 'Номинальная ёмкость, А·ч', value: '20Ah' },
  { label: 'Габариты, мм', value: '154*180*170 & 154*180*170' },
  { label: 'Вес, кг', value: '12.6' },
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