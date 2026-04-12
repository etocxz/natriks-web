<template>
  <div class="detail">

    <h1>Высокопроизводительная натрий-ионная аккумуляторная батарея 12 В для запуска и остановки двигателя автомобиля.</h1>

    <!-- 上半部分 -->
    <div class="top">

      <ProductGallery :images="images" />

      <ProductInfo
        title="H6"
        desc="Компактные и энергоэффективные натрий-ионные батареи, предназначенные для стабильного питания маломощных устройств. Обеспечивают высокую надёжность, длительный срок службы и экологичность при ежедневном использовании."
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
  'http://www.ygtech.net.cn/upload/20250902173511.jpg',
  'http://www.ygtech.net.cn/upload/20250902173430.jpg',
  'http://www.ygtech.net.cn/upload/20250902173354.jpg',
  'http://www.ygtech.net.cn/upload/20250902173141.jpg'
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
</style>