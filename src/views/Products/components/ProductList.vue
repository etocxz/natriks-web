<template>
  <div class="list">
    <div
      class="card"
      v-for="item in list"
      :key="item.id"
      @click="goDetail(item.id,item.category)"
    >
      <img :src="getImg(item.img)" />

      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{
  list: any[]
}>()

const goDetail = (id: number,category:string) => {
  router.push(`/products/${category}/${id}`)
}

// 关键：本地图片解析
const getImg = (path: string) => {
  return new URL(path, import.meta.url).href
}
</script>


<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 一行4个 */
  gap: 40px;
}

.card {
  text-align: center;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 140px;
  object-fit: contain;   /* 保证电池比例正常 */
  margin-bottom: 12px;
  transition: 0.3s;
}

.card:hover img {
  transform: scale(1.05);
}

.title {
  color: white;
  font-size: 16px;
}

@media (max-width: 768px) {
  .list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .card {
    padding: 14px 10px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
  }

  .card img {
    height: 110px;
    margin-bottom: 10px;
  }

  .title {
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
