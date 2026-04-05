<template>
  <section class="advantages">
    <h2>Advantages</h2>

    <div class="grid">
      <div class="item fade-up">
        <h3>Safety</h3>
        <p>Lower risk of thermal runaway compared to lithium batteries.</p>
      </div>

      <div class="item fade-up">
        <h3>Cost Efficiency</h3>
        <p>Utilizes abundant sodium resources to reduce cost.</p>
      </div>

      <div class="item fade-up">
        <h3>Low Temperature</h3>
        <p>Stable performance in cold environments.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const els = document.querySelectorAll('.fade-up')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show')
      }
    })
  })

  els.forEach(el => observer.observe(el))
})
</script>

<style scoped>
.advantages {
  padding: 120px 80px;
}

.grid {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}

.item {
  position: relative;
  padding: 40px;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid transparent;

  transition: 0.3s;
}

/* hover 高级效果 */
.item:hover {
  border-color: rgba(47, 107, 255, 0.5);
  box-shadow: 0 10px 30px rgba(47, 107, 255, 0.1);
  transform: translateY(-6px);
}   
</style>