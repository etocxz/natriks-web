<template>
  <div class="product" :class="{ reverse }">
    <!-- 文本 -->
    <div class="text">
      <h4 class="tag">Product</h4>
      <h2 class="title">{{ title }}</h2>
      <p class="desc">{{ desc }}</p>
      <a href="#" class="link">Learn More →</a>
    </div>

    <!-- 图片 -->
    <div class="image">
      <img :src="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  image: string
  reverse?: boolean
}>()
</script>

<style scoped>
.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  padding: 80px 0;
}

.product.reverse {
  flex-direction: row-reverse;
}

/* 文本 */
.text {
  max-width: 520px;
}

.tag {
  font-size: 13px;
  color: #8A92A3;
  margin-bottom: 10px;
}

.title {
  font-size: 40px;
  margin-bottom: 16px;
}

.desc {
  color: #8A92A3;
  line-height: 1.7;
  margin-bottom: 20px;
}

.link {
  color: #2F6BFF;
  text-decoration: none;
}

/* 图片 */
.image img {
  width: 460px;
  border-radius: 14px;
  transition: 0.3s;
}

.image img:hover {
  transform: scale(1.03);
}
</style>