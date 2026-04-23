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

      <div v-if="currentItem" class="adv-detail">
        <div class="detail-head">
          <span :class="['detail-badge', currentItem.key]">{{ currentItem.title }}</span>
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
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const advantageItems = [
  {
    key: 'charging',
    title: 'Зарядка',
    featureLabel: 'Характеристика:',
    valueLabel: 'Ценность для пользователя:',
    note: '',
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
  padding: 120px 80px;
}

.advantages h2 {
  font-size: 36px;
  margin-bottom: 44px;
}

.advantages-layout {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 340px minmax(0, 1fr);
  gap: 56px;
  align-items: start;
}

.adv-nav {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.adv-tab {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 22px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-left: 3px solid transparent;
  border-radius: 2px;
  background: transparent;
  color: rgba(227, 234, 240, 0.92);
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  text-align: left;
}

.adv-tab:hover {
  border-color: rgba(255, 255, 255, 0.58);
  color: #ffffff;
  transform: translateX(3px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}

.tab-label {
  display: inline-block;
  padding: 0;
  color: inherit;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.45;
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
  border-color: rgba(255, 255, 255, 0.78);
  border-left-color: #ffffff;
  color: #ffffff;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.2);
}

.adv-detail {
  min-height: 420px;
  padding: 10px 0 0;
}

.detail-head {
  margin-bottom: 24px;
}

.detail-badge {
  display: inline-block;
  padding: 0 0 10px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
}

.detail-body {
  max-width: 640px;
}

.detail-section + .detail-section {
  margin-top: 22px;
}

.detail-section h4 {
  margin: 0 0 10px;
  color: rgba(255, 255, 255, 0.96);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.detail-section p,
.detail-section li {
  color: rgba(218, 225, 235, 0.78);
  font-size: 15px;
  line-height: 1.85;
}

.detail-section ul {
  margin: 0;
  padding-left: 24px;
}

.detail-section li::marker {
  color: rgba(255, 255, 255, 0.92);
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
    gap: 28px;
  }

  .adv-detail {
    min-height: auto;
    padding-top: 0;
  }
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

  .detail-badge {
    font-size: 14px;
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
