<template>
  <section class="news">
    <h2>Latest News</h2>

    <div class="slider" @mouseenter="pause" @mouseleave="start">
        <button class="nav left" @click="prev">‹</button>
      <div
        class="track"
        :style="{ transform: `translateX(-${offset}px)` }"
      >
        <div v-for="item in displayList" :key="item.id" class="card">
          <img :src="item.image" />
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
      <button class="nav right" @click="next">›</button>
    </div>

    <!-- 指示点 -->
    <div class="dots">
      <span
        v-for="(_, i) in news.length"
        :key="i"
        :class="{ active: i === current }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const visibleCount = 3
const maxIndex = () => news.value.length - visibleCount

import { ref, onMounted, onUnmounted } from 'vue'
import { getNews } from '../api'
import type { NewsItem } from '../types'

const news = ref<NewsItem[]>([])
const displayList = ref<NewsItem[]>([])

const current = ref(0)
const offset = ref(0)

let timer: any = null
const CARD_WIDTH = 724

onMounted(async () => {
  news.value = await getNews()

  displayList.value = news.value

  start()
})

const start = () => {
  timer = setInterval(() => {
    current.value++
    offset.value += CARD_WIDTH

    
  }, 3000)
}

const next = () => {
  if (current.value < maxIndex()) {
    current.value++
    offset.value += CARD_WIDTH
  }
}

const prev = () => {
  if (current.value > 0) {
    current.value--
    offset.value -= CARD_WIDTH
  }
}

const pause = () => {
  clearInterval(timer)
}

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.news {
  padding: 120px 80px;
}

h2 {
  font-size: 36px;
  margin-bottom: 40px;
}

/* 滑动窗口 */
.slider {
  position: relative;   /* 🔥 必须加 */
  overflow: hidden;
}

/* 按钮通用样式 */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);

  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  transition: 0.3s;
}

/* hover效果 */
.nav:hover {
  background: rgba(47, 107, 255, 0.4);
}

/* 左右位置 */
.nav.left {
  left: 10px;
}

.nav.right {
  right: 10px;
}

/* 轨道 */
.track {
  display: flex;
  gap: 24px;
  transition: 0.4s ease;
}

/* 卡片 */
.card {
  min-width: 700px;
  border-radius: 16px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.02);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-6px);
}

/* 图片 */
.card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

/* 内容 */
.content {
  padding: 16px;
}

h3 {
  font-size: 16px;
  margin-bottom: 8px;
}

p {
  font-size: 13px;
  color: #8A92A3;
}

/* 指示点 */
.dots {
  margin-top: 20px;
}

.dots span {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.dots .active {
  background: #2F6BFF;
}
</style>