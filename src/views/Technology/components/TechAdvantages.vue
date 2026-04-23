<template>
  <section class="advantages">
    <h2>Преимущества</h2>

    <div class="advantages-layout">
      <div class="accordion-list">
        <details class="item fade-up" open>
          <summary><span>Зарядка</span></summary>

          <div class="item-content">
            <h4>Характеристика:</h4>
            <ul>
              <li>Быстрая зарядка и высокая эффективность</li>
              <li>Заряд до <strong>80% всего за 20 минут</strong></li>
              <li>Скорость зарядки в 2 раза выше, чем у свинцово-кислотных аккумуляторов</li>
              <li>Низкий уровень саморазряда</li>
            </ul>

            <h4>Ценность для пользователя:</h4>
            <ul>
              <li>Снижение нагрузки на двигатель</li>
              <li>Экономия топлива и эксплуатационных затрат</li>
            </ul>
          </div>
        </details>

        <details class="item fade-up">
          <summary><span>Безопасность и надежность</span></summary>

          <div class="item-content">
            <h4>Характеристика:</h4>
            <ul>
              <li>Отсутствие риска возгорания при проколе</li>
              <li>Отсутствие риска возгорания при сжатии</li>
              <li>Отсутствие риска возгорания при коротком замыкании</li>
              <li>Уровень безопасности соответствует высококлассным свинцово-кислотным аккумуляторам</li>
            </ul>
          </div>
        </details>

        <details class="item fade-up">
          <summary><span>Отличная работа при низких температурах</span></summary>

          <div class="item-content">
            <h4>Характеристики:</h4>
            <ul>
              <li>Работоспособность при температурах от -40°C до +70°C</li>
              <li>Сохранение до 90% ёмкости при -20°C</li>
              <li>Сохранение до 85% ёмкости при -40°C</li>
              <li>Мгновенный запуск двигателя в сильный мороз</li>
              <li>Пусковая способность до 3 раз выше, чем у свинцово-кислотных аккумуляторов</li>
            </ul>

            <h4>Ценность для пользователя:</h4>
            <ul>
              <li>Надёжный запуск в любых климатических условиях</li>
              <li>Минимальный риск отказа в зимний период</li>
            </ul>
          </div>
        </details>

        <details class="item fade-up">
          <summary><span>Долговечность и ресурс</span></summary>

          <div class="item-content">
            <h4>Характеристики:</h4>
            <ul>
              <li>До 3000 циклов глубокого разряда</li>
              <li>Срок службы в 5-10 раз выше, чем у свинцовых аккумуляторов</li>
            </ul>

            <h4>Ценность для пользователя:</h4>
            <ul>
              <li>Срок службы приближен к ресурсу автомобиля</li>
              <li>Минимальная потребность в замене</li>
              <li>Снижение совокупной стоимости владения до 61%</li>
            </ul>
          </div>
        </details>

        <details class="item fade-up">
          <summary><span>Экологичность</span></summary>

          <div class="item-content">
            <h4>Не содержит:</h4>
            <ul>
              <li>Свинец</li>
              <li>Кадмий</li>
            </ul>

            <p>Снижение углеродных выбросов до 90%</p>

            <h4>Ценность для пользователя:</h4>
            <ul>
              <li>Снижение негативного воздействия на окружающую среду</li>
              <li>Безопасность для человека и экосистемы</li>
            </ul>
          </div>
        </details>
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

.advantages h2 {
  font-size: 36px;
  margin-bottom: 44px;
}

.advantages-layout {
  display: flex;
  justify-content: center;
}

.accordion-list {
  width: min(100%, 980px);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.item {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.025);
  overflow: hidden;
  transition: 0.3s;
}

/* hover 楂樼骇鏁堟灉 */
.item:hover {
  border-color: rgba(47, 107, 255, 0.5);
  box-shadow: 0 10px 30px rgba(47, 107, 255, 0.1);
  transform: translateY(-3px);
}

.item[open] {
  border-color: rgba(47, 107, 255, 0.55);
  background: rgba(47, 107, 255, 0.055);
}

summary {
  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 24px;
  cursor: pointer;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

summary span {
  display: inline-flex;
  align-items: center;
  color: #e3eaf0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
}

summary::after {
  content: '';
  width: 12px;
  height: 12px;
  flex: 0 0 auto;
  border-right: 2px solid #e3eaf0;
  border-bottom: 2px solid #e3eaf0;
  transform: rotate(45deg);
  transition: 0.25s;
}

.item[open] summary::after {
  transform: rotate(225deg);
}

.item-content {
  padding: 4px 72px 30px 72px;
  color: #c6ccd8;
}

.item-content h4 {
  margin: 22px 0 10px;
  color: #e3eaf0;
  font-size: 16px;
}

.item-content ul {
  margin: 0;
  padding-left: 22px;
}

.item-content li,
.item-content p {
  color: #9ca6b8;
  font-size: 15px;
  line-height: 1.75;
}

.item-content strong {
  color: #ffffff;
}

.fade-up {
  opacity: 0;
  transform: translateY(24px);
}

.fade-up.show {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .advantages {
    padding: 72px 20px;
  }

  .advantages h2 {
    font-size: 28px;
    line-height: 1.3;
    margin-bottom: 24px;
  }

  .accordion-list {
    gap: 14px;
  }

  .item:hover {
    transform: translateY(-2px);
  }

  summary {
    min-height: 58px;
    padding: 0 18px;
  }

  summary span {
    font-size: 16px;
  }

  .item-content {
    padding: 0 18px 24px 18px;
  }

  .item-content h4 {
    font-size: 15px;
  }

  .item-content li,
  .item-content p {
    font-size: 14px;
    line-height: 1.7;
    word-break: break-word;
  }
}
</style>
