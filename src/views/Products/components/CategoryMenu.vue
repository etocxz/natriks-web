<template>
  
  <div class="menu">
    <div calss="head">
      <h3>Центр продуктов </h3>
    </div>
    <div
      v-for="item in categories"
      :key="item.key"
      :class="['item', { active: item.key === modelValue }]"
      @click="$emit('update:modelValue', item.key)"
      
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  categories: { key: string; label: string }[]
}>()

defineEmits(['update:modelValue'])
</script>

<style scoped>
.menu {
  padding-top: 60px;
  width: 320px;
}

.head{
  align-items: center;
  padding-bottom: 10px;
}

.item {
  padding: 16px;
  cursor: pointer;
  background: #5c8fa3;
  margin-bottom: 6px;
}

.item.active {
  background: #2c51f6;
  color: white;
}

@media (max-width: 768px) {
  .menu {
    width: 100%;
    padding-top: 0;
  }

  .head{
    padding-bottom: 14px;
  }

  .head h3 {
    font-size: 20px;
    line-height: 1.4;
    margin: 0;
  }

  .item {
    padding: 14px 16px;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 8px;
    border-radius: 10px;
  }
}
</style>
