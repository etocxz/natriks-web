<template>
  <section class="news">
    <div class="slider"
    @mouseenter="stopAutoPlay"
  @mouseleave="startAutoPlay">

      <!-- 每一页 -->
      <div
        v-for="(item, index) in news"
        :key="item.id"
        class="slide"
        :class="{ active: index === current }"
      >
        <img :src="item.image" class="bg" />

        <div class="content">
          <h2>{{ item.title }}</h2>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <!-- 左右按钮 -->
      <button class="nav left" @click="prev">‹</button>
      <button class="nav right" @click="next">›</button>

      <!-- 小圆点 -->
      <div class="dots">
        <span
          v-for="(_, i) in news"
          :key="i"
          :class="{ active: i === current }"
          @click="go(i)"
        />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { getNews } from '../api'
import type { NewsItem } from '../types'

const news = ref<NewsItem[]>([])
const current = ref(0)

onMounted(async () => {
  news.value = await getNews()
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})

const next = () => {
  if (current.value < news.value.length - 1) {
    current.value++
  }
}

const prev = () => {
  if (current.value > 0) {
    current.value--
  }
}

const go = (i: number) => {
  current.value = i
}

let timer: any = null

const startAutoPlay = () => {
  timer = setInterval(() => {
    if (current.value < news.value.length - 1) {
      current.value++
    } else {
      current.value = 0   // 🔥 回到第一张
    }
  }, 4000) // 4秒切换
}

const stopAutoPlay = () => {
  clearInterval(timer)
}
</script>

<style scoped>
.news {
  height: 80vh;
}

/* 容器 */
.slider {
  position: relative;
  height: 100%;
  overflow: hidden;
}

/* 每一页 */
.slide {
  position: absolute;
  inset: 0;

  opacity: 0;
  transition: opacity 0.6s ease;
}

/* 当前页 */
.slide.active {
  opacity: 1;
  z-index: 1;
}

/* 背景图 */
.bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 内容 */
.content {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;
  color: white;
}

.content h2 {
  font-size: 48px;
  margin-bottom: 20px;
}

.content p {
  font-size: 16px;
  color: rgba(255,255,255,0.8);
}

/* 按钮 */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  background: rgba(0,0,0,0.4);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.nav.left {
  left: 20px;
}

.nav.right {
  right: 20px;
}

/* 小圆点 */
.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.dots span {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: 0.3s;
}

.dots .active {
  width:20px;
  border-radius:10px;
  background: white;
}
</style>