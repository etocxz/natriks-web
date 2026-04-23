<template>
  <section class="advantages">
    <h2>Преимущества</h2>

    <div class="advantages-layout fade-up">
      <div class="adv-nav">
        <button
          v-for="item in advantageItems"
          :key="item.key"
          type="button"
          :class="['adv-tab', item.key, { active: item.key === currentKey }]"
          @click="currentKey = item.key"
        >
          <span class="tab-label">{{ item.title }}</span>
          <span class="tab-icon"></span>
        </button>
      </div>

      <div
        v-if="currentItem"
        :class="['adv-detail', currentItem.key]"
        :style="{ '--detail-bg': `url(${currentItem.background})` }"
      >
        <div class="detail-overlay"></div>

        <div class="detail-content">
          <div class="detail-head">
            <span class="detail-badge">{{ currentItem.title }}</span>
          </div>

          <div class="detail-body">
            <section v-if="currentItem.features.length" class="detail-section">
              <h4>{{ currentItem.featureLabel }}</h4>
              <ul>
                <li v-for="feature in currentItem.features" :key="feature">{{ feature }}</li>
              </ul>
            </section>

            <section v-if="currentItem.note" class="detail-section">
              <p>{{ currentItem.note }}</p>
            </section>

            <section v-if="currentItem.values.length" class="detail-section">
              <h4>{{ currentItem.valueLabel }}</h4>
              <ul>
                <li v-for="value in currentItem.values" :key="value">{{ value }}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import chargingBg from '../assets/charging.jpg'
import ecoBg from '../assets/eco.png'
import coldBg from '../assets/cold.jpg'
import durabilityBg from '../assets/durability.png'
import safetyBg from '../assets/safety.png'

const advantageItems = [
  {
    key: 'charging',
    title: 'Зарядка',
    featureLabel: 'Характеристика:',
    valueLabel: 'Ценность для пользователя:',
    note: '',
    background: chargingBg,
    features: [
      'Быстрая зарядка и высокая эффективность',
      'Заряд до 80% всего за 20 минут',
      'Скорость зарядки в 2 раза выше, чем у свинцово-кислотных аккумуляторов',
      'Низкий уровень саморазряда',
    ],
    values: [
      'Снижение нагрузки на двигатель',
      'Экономия топлива и эксплуатационных затрат',
    ],
  },
  {
    key: 'eco',
    title: 'Экологичность',
    featureLabel: 'Не содержит:',
    valueLabel: 'Ценность для пользователя:',
    note: 'Снижение углеродных выбросов до 90%',
    background: ecoBg,
    features: ['Свинец', 'Кадмий'],
    values: [
      'Снижение негативного воздействия на окружающую среду',
      'Безопасность для человека и экосистемы',
    ],
  },
  {
    key: 'cold',
    title: 'Отличная работа при низких температурах',
    featureLabel: 'Характеристики:',
    valueLabel: 'Ценность для пользователя:',
    note: '',
    background: coldBg,
    features: [
      'Работоспособность при температурах от -40°C до +70°C',
      'Сохранение до 90% ёмкости при -20°C',
      'Сохранение до 85% ёмкости при -40°C',
      'Мгновенный запуск двигателя в сильный мороз',
      'Пусковая способность до 3 раз выше, чем у свинцово-кислотных аккумуляторов',
    ],
    values: [
      'Надёжный запуск в любых климатических условиях',
      'Минимальный риск отказа в зимний период',
    ],
  },
  {
    key: 'durability',
    title: 'Долговечность и ресурс',
    featureLabel: 'Характеристики:',
    valueLabel: 'Ценность для пользователя:',
    note: '',
    background: durabilityBg,
    features: [
      'До 3000 циклов глубокого разряда',
      'Срок службы в 5-10 раз выше, чем у свинцовых аккумуляторов',
    ],
    values: [
      'Срок службы приближен к ресурсу автомобиля',
      'Минимальная потребность в замене',
      'Снижение совокупной стоимости владения до 61%',
    ],
  },
  {
    key: 'safety',
    title: 'Безопасность и надежность',
    featureLabel: 'Характеристика:',
    valueLabel: '',
    note: '',
    background: safetyBg,
    features: [
      'Отсутствие риска возгорания при проколе',
      'Отсутствие риска возгорания при сжатии',
      'Отсутствие риска возгорания при коротком замыкании',
      'Уровень безопасности соответствует высококлассным свинцово-кислотным аккумуляторам',
    ],
    values: [],
  },
] as const

const currentKey = ref<(typeof advantageItems)[number]['key']>('charging')

const currentItem = computed(() =>
  advantageItems.find(item => item.key === currentKey.value) ?? advantageItems[0]
)

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
  padding: 88px 40px 72px;
}

.advantages h2 {
  font-size: 56px;
  line-height: 1.1;
  margin-bottom: 34px;
}

.advantages-layout {
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 380px minmax(0, 1fr);
  gap: 40px;
  align-items: start;
}

.adv-nav {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.adv-tab {
  min-height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 22px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-left: 3px solid transparent;
  border-radius: 2px;
  background: transparent;
  color: rgba(227, 234, 240, 0.88);
  cursor: pointer;
  transition: border-color 0.25s ease, color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
  text-align: left;
}

.adv-tab:hover {
  border-color: rgba(255, 255, 255, 0.42);
  color: #ffffff;
  transform: translateX(3px);
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);
}

.tab-label {
  display: inline-block;
  color: inherit;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.01em;
}

.tab-icon {
  width: 10px;
  height: 10px;
  flex: 0 0 auto;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(45deg);
  transition: 0.25s;
  opacity: 0.85;
}

.adv-tab.active .tab-icon {
  transform: rotate(225deg);
  opacity: 1;
}

.adv-tab.active {
  border-color: rgba(255, 255, 255, 0.56);
  border-left-color: rgba(255, 255, 255, 0.92);
  color: #ffffff;
  background: rgba(255, 255, 255, 0.025);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.14);
}

.adv-detail {
  position: relative;
  min-height: 460px;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
  background-image: var(--detail-bg);
  background-size: cover;
  background-position: center;
}

.detail-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(8, 12, 20, 0.88) 0%, rgba(8, 12, 20, 0.78) 38%, rgba(8, 12, 20, 0.55) 100%),
    linear-gradient(180deg, rgba(8, 12, 20, 0.18), rgba(8, 12, 20, 0.58));
}

.detail-content {
  position: relative;
  z-index: 1;
  min-height: 460px;
  padding: 30px 34px 30px 40px;
  display: flex;
  flex-direction: column;
}

.detail-head {
  margin-bottom: 20px;
}

.detail-badge {
  display: inline-block;
  padding: 0 0 10px;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
}

.detail-body {
  max-width: 820px;
}

.detail-section + .detail-section {
  margin-top: 18px;
}

.detail-section h4 {
  margin: 0 0 8px;
  color: rgba(255, 255, 255, 0.98);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.detail-section p,
.detail-section li {
  color: rgba(239, 244, 250, 0.88);
  font-size: 19px;
  line-height: 1.68;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);
}

.detail-section ul {
  margin: 0;
  padding-left: 26px;
}

.detail-section li::marker {
  color: rgba(255, 255, 255, 0.98);
}

.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.fade-up.show {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .advantages-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .adv-detail,
  .detail-content {
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .advantages {
    padding: 72px 20px;
  }

  .advantages h2 {
    font-size: 36px;
    line-height: 1.3;
    margin-bottom: 24px;
  }

  .adv-nav {
    gap: 12px;
  }

  .adv-tab {
    min-height: 60px;
    padding: 0 16px;
  }

  .tab-label {
    font-size: 14px;
  }

  .detail-content {
    padding: 24px 20px;
  }

  .detail-badge {
    font-size: 20px;
  }

  .detail-section h4 {
    font-size: 15px;
  }

  .detail-section p,
  .detail-section li {
    font-size: 14px;
    line-height: 1.7;
    word-break: break-word;
  }
}
</style>
