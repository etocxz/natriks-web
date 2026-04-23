<template>
  <div class="list">
    <div
      class="card"
      v-for="item in list"
      :key="item.id"
      @click="goDetail(item.id,item.category)"
    >
      <img :src="item.img" />

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
</script>


<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)); /* 涓€琛?涓?*/
  gap: 28px;
  flex: 1;
  align-content: start;
}

.card {
  padding: 22px 18px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(47, 107, 255, 0.28);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 190px;
  object-fit: contain;   /* 淇濊瘉鐢垫睜姣斾緥姝ｅ父 */
  margin-bottom: 18px;
  transition: 0.3s;
}

.card:hover img {
  transform: scale(1.05);
}

.title {
  color: white;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.2;
}

@media (max-width: 1180px) {
  .list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 960px) {
  .list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .card {
    padding: 14px 10px;
    border-radius: 12px;
  }

  .card img {
    height: 110px;
    margin-bottom: 10px;
  }

  .title {
    font-size: 16px;
    line-height: 1.5;
  }
}
</style>
