<template>
  <section class="capabilities">
    <h2>Наши возможности</h2>

    <div class="items">
      <div class="item">
        <h4>Батарейные технологии</h4>
        <p>Передовые достижения в области химии и проектирования на основе натрия.</p>
      </div>

      <div class="item">
        <h4>Энергетические системы</h4>
        <p>Масштабируемые решения для хранения данных в электросетях и промышленности.</p>
      </div>

      <div class="item">
        <h4>Кастомизация</h4>
        <p>Индивидуальные решения для различных условий эксплуатации.</p>
      </div>
    </div>
  </section>
</template> 

<style scoped>
.capabilities {
  padding: 120px 80px;
}

.capabilities h2 {
  font-size: 36px;
  margin-bottom: 60px;
}

.items {
  display: flex;
  gap: 40px;
}

.item {
  flex: 1;
  padding: 30px;

  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;

  transition: 0.3s;
}

.item:hover {
  border-color: #2F6BFF;
  transform: translateY(-4px);
}

h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  color: #8A92A3;
}
</style>