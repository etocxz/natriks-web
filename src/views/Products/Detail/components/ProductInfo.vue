<template>
  <div class="info">
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()
</script>

<style scoped>
.info {
  max-width: 1000px;
  padding-left:200px;
}

h2 {
  font-size: 28px;
  margin-bottom: 16px;
}

p {
  color: #8A92A3;
  line-height: 1.7;
}
</style>