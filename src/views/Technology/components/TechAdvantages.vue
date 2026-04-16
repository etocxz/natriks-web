<template>
  <section class="advantages">
    <h2>Преимущества</h2>

    <div class="grid">
      <div class="item fade-up">
        <h3>Зарядка</h3>
        <p>Быстрая зарядка и высокая эффективность  
Заряд до 80% всего за 20 минут  
Скорость зарядки в 2 раза выше  

Ценность:
Снижение нагрузки на двигатель  
Экономия топлива</p>
      </div>

      <div class="item fade-up">
        <h3>Безопасность</h3>
        <p>Отсутствие риска возгорания  
(прокол / сжатие / короткое замыкание)

Высокий уровень безопасности</p>
      </div>

      <div class="item fade-up">
        <h3>Работа в экстремальных условиях</h3>
        <p>Работа от -40°C до +70°C  
90% ёмкости при -20°C  
85% при -40°C  

Ценность:
Надёжный запуск в любых условиях</p>
      </div>
      <div class="item fade-up">
        <h3>Долговечность</h3>
        <p>До 3000 циклов  
Срок службы в 5–10 раз выше  

Ценность:
Меньше замен  
Снижение затрат</p>
      </div>
      <div class="item fade-up">
        <h3>Экологичность</h3>
        <p>До 3000 циклов  
Срок службы в 5–10 раз выше  

Ценность:
Меньше замен  
Снижение затрат</p>
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

@media (max-width: 768px) {
  .advantages {
    padding: 72px 20px;
  }

  .grid {
    flex-direction: column;
    gap: 20px;
    margin-top: 24px;
  }

  .item {
    padding: 24px 18px;
  }

  .item:hover {
    transform: translateY(-2px);
  }

  h2 {
    font-size: 28px;
    line-height: 1.3;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  p {
    font-size: 14px;
    line-height: 1.7;
    word-break: break-word;
  }
}
</style>
