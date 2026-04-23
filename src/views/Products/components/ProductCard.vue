<template>
  <div class="product" @click="goCategory":class="{ reverse }">
    <!-- 文本 -->
    <div class="text">
      <h4 class="tag">Рекомендуемый продукт</h4>
      <h2 class="title">{{ title }}</h2>
      <p class="desc">{{ desc }}</p>
      <a href="#" class="link">Узнать больше →</a>
    </div>

    <!-- 图片 -->
    <div class="image">
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goCategory = () => {
  router.push(`/products/${props.category}`)
}

const props =defineProps<{
  id:number
  category: string
  title: string
  desc: string
  img: string
  reverse?: boolean
}>()
</script>

<style scoped>
.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  padding: 60px 0;
}

/* 左右反转 */
.product.reverse {
  flex-direction: row-reverse;
}

/* 文本区域 */
.text {
  max-width: 520px;
}

/* 小标题 */
.tag {
  font-size: 13px;
  color: #8A92A3;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

/* 主标题 */
.title {
  font-size: 42px;
  margin-bottom: 20px;
  line-height: 1.2;
}

/* 描述 */
.desc {
  color: #8A92A3;
  line-height: 1.7;
  margin-bottom: 24px;
}

/* 链接 */
.link {
  color: #2F6BFF;
  text-decoration: none;
  font-weight: 500;
  transition: 0.25s;
}

.link:hover {
  opacity: 0.8;
}

/* 图片区域 */
.image img {
  width: 460px;
  border-radius: 14px;

  transition: transform 0.4s ease;
}

/* hover 微动效（高级感关键） */
.image img:hover {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .product,
  .product.reverse {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    padding: 40px 0;
  }

  /* 鏂囨湰鍖哄煙 */
  .text {
    max-width: none;
    width: 100%;
  }

  /* 涓绘爣棰?*/
  .title {
    font-size: 28px;
    margin-bottom: 14px;
  }

  /* 鎻忚堪 */
  .desc {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 18px;
  }

  /* 鍥剧墖鍖哄煙 */
  .image {
    width: 100%;
  }

  .image img {
    width: 100%;
    max-width: 100%;
    border-radius: 12px;
  }
}
</style>
