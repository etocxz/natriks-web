<template>
  <table class="table">
    <tr v-for="row in data" :key="row.label">
      <td class="label">{{ row.label }}</td>
      <td class="value">{{ row.value }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
defineProps<{
  data: { label: string; value: string }[]
}>()
</script>

<style scoped>
.table {
  width: 100%;
  margin-top: 60px;
  border-collapse: collapse;
  
}

/* 行 */
tr {
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* 左列 */
.label {
  padding: 16px;
  color: #8A92A3;
  width: 40%;
}

/* 右列 */
.value {
  padding: 16px;
  color: white;
}

/* hover效果 */
tr:hover {
  background: rgba(255,255,255,0.03);
}

@media (max-width: 768px) {
  .table {
    margin-top: 32px;
  }

  .label,
  .value {
    padding: 12px 10px;
    font-size: 14px;
    line-height: 1.5;
    vertical-align: top;
  }

  .label {
    width: 44%;
  }
}
</style>
