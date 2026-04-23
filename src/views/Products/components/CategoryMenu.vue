<template>
  
  <div class="menu">
    <div calss="head">
      <h2>Центр продуктов </h2>
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
  padding-top: 28px;
  width: 360px;
  flex-shrink: 0;
}

.head{
  align-items: center;
  padding-bottom: 18px;
}

.head h3 {
  margin: 0;
  color: #eef3fb;
  font-size: 34px;
  line-height: 1.15;
}

.item {
  padding: 20px 22px;
  cursor: pointer;
  background: rgba(103, 155, 179, 0.92);
  margin-bottom: 10px;
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 22px;
  font-weight: 600;
  line-height: 1.35;
  transition: 0.2s ease;
}

.item:hover {
  transform: translateX(4px);
  background: rgba(114, 168, 193, 0.96);
}

.item.active {
  background: #2c51f6;
  color: white;
  box-shadow: 0 14px 30px rgba(44, 81, 246, 0.22);
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
    font-size: 24px;
    line-height: 1.4;
  }

  .item {
    padding: 14px 16px;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 8px;
    border-radius: 10px;
  }
}
</style>
