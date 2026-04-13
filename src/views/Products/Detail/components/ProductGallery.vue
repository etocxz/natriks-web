<template>
  <div class="gallery">

    <img :src="images[current]" class="image" />

    <!-- 左右按钮 -->
    <button class="nav left" @click="prev">‹</button>
    <button class="nav right" @click="next">›</button>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  images: string[]
}>()

const current = ref(0)

const next = () => {
  if (current.value < props.images.length - 1) current.value++
}

const prev = () => {
  if (current.value > 0) current.value--
}
</script>

<style scoped>
.gallery {
  position: relative;
  max-width: 1400px;
  height: 320px;
  overflow: hidden;
  border-radius: 12px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 按钮 */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  width: 40px;
  height: 40px;
  border-radius: 50%;

  background: rgba(0,0,0,0.4);
  color: white;
  border: none;
  cursor: pointer;
}

.left { left: 10px }
.right { right: 10px }
</style>