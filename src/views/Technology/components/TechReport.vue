<template>
  <section class="report">
    <div class="report-inner">
      <h2>Безопасность и надежность</h2>

      <div class="report-grid">
        <article class="report-card pass">
          <div class="copy">
            <h3>Перезаряд</h3>
            <p class="label">Входные параметры</p>
            <p>1C до 16,7 В</p>
            <p class="label">Состояние теста</p>
            <p>Без возгорания и взрыва</p>
          </div>

          <div class="chart">
            <img src="../assets/overcharge.png" alt="Overcharge chart" />
          </div>

          <div class="card-footer">
            <span>GB 38031 PASS</span>
            <strong>+2 °C</strong>
          </div>
        </article>

        <article class="report-card pass">
          <div class="copy">
            <h3>Переразряд</h3>
            <p class="label">Входные параметры</p>
            <p>1C до 0 В</p>
            <p class="label">Состояние теста</p>
            <p>Без возгорания и взрыва</p>
          </div>

          <div class="chart">
            <img src="../assets/overdischarge.png" alt="Overdischarge chart" />
          </div>

          <div class="card-footer">
            <span>GB 38031 PASS</span>
            <strong>+13 °C</strong>
          </div>
        </article>

        <article class="report-card pass">
          <div class="copy">
            <h3>Короткое замыкание</h3>
            <p class="label">Входные параметры</p>
            <p>&lt;50мОм, 10 мин</p>
            <p class="label">Состояние теста</p>
            <p>Без возгорания и взрыва</p>
          </div>

          <div class="chart">
            <img src="../assets/short_circuit.png" alt="Short circuit chart" />
          </div>

          <div class="card-footer">
            <span>GB 38031 PASS</span>
            <strong>+29 °C</strong>
          </div>
        </article>

        <article class="report-card warning">
          <div class="copy">
            <h3>Сдавливание</h3>
            <p class="label">Входные параметры</p>
            <p>&lt;2 мин, φ15мм</p>
            <p class="label">Состояние теста</p>
            <p>Без возгорания и взрыва</p>
          </div>

          <div class="chart">
            <img src="../assets/crush.png" alt="Crush chart" />
          </div>

          <div class="card-footer">
            <span>GB 38031 PASS</span>
            <strong>+86 °C</strong>
          </div>
        </article>

        <article class="report-card danger">
          <div class="copy">
            <h3>Прокол гвоздем</h3>
            <p class="label">Входные параметры</p>
            <p>25 мин, φ6 мм</p>
            <p class="label">Состояние теста</p>
            <p>Без возгорания и взрыва</p>
          </div>

          <div class="chart">
            <img src="../assets/nail.png" alt="Nail penetration chart" />
          </div>

          <div class="card-footer">
            <span>GB 38031 PASS</span>
            <strong>+456 °C</strong>
          </div>
        </article>

        <article class="report-card hot">
          <div class="copy">
            <h3>Тепловой разгон</h3>
            <p class="label">Входные параметры</p>
            <p>Постоянный нагрев 500 Вт</p>
            <p class="label">Состояние теста</p>
            <p>Без возгорания и взрыва</p>
          </div>

          <div class="chart">
            <img src="../assets/thermal_runaway.png" alt="Thermal runaway chart" />
          </div>

          <div class="card-footer">
            <span>GB 38031 PASS</span>
            <strong>+335 °C</strong>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.report {
  position: relative;
  padding: 120px 64px;
  background: transparent;
}

.report::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(18, 24, 36, 0) 0%,
      rgba(20, 27, 40, 0.16) 16%,
      rgba(21, 28, 41, 0.34) 42%,
      rgba(22, 30, 44, 0.54) 100%
    ),
    radial-gradient(circle at 22% 18%, rgba(47, 107, 255, 0.05), transparent 34%);
  pointer-events: none;
  z-index: 0;
}

.report-inner {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.report h2 {
  margin: 0 0 28px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: #e3eaf0;
  font-size: 42px;
  line-height: 1.2;
}

.report-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.report-card {
  min-height: 236px;
  display: grid;
  grid-template-columns: 0.95fr 1.45fr;
  grid-template-rows: 1fr auto;
  gap: 12px 16px;
  padding: 20px 20px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 247, 250, 0.96));
  color: #151923;
  overflow: hidden;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;
  transition: 0.25s;
}

.report-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22);
}

.copy h3 {
  margin: 0 0 14px;
  color: #1d2330;
  font-size: 22px;
  line-height: 1.15;
}

.copy p {
  margin: 0 0 4px;
  color: #151923;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.35;
}

.copy .label {
  margin-top: 8px;
  color: #9ba3ae;
  font-size: 10px;
  font-weight: 600;
}

.chart {
  align-self: center;
  height: 128px;
  padding: 8px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(21, 25, 35, 0.06);
}

.chart img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  filter: contrast(1.04) saturate(1.03);
}

.card-footer {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px -20px 0;
  padding: 11px 20px;
  background: rgba(255, 255, 255, 0.92);
  border-top: 1px solid rgba(21, 25, 35, 0.06);
}

.card-footer span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 118px;
  min-height: 24px;
  padding: 0 12px;
  border-radius: 999px;
  background: #090c12;
  color: #87e236;
  font-size: 10px;
  font-weight: 800;
}

.card-footer strong {
  color: #151923;
  font-size: 18px;
}

.warning .card-footer strong {
  color: #ff8b1c;
}

.danger .card-footer,
.danger .card-footer span {
  background: #c90404;
}

.danger .card-footer strong,
.danger .card-footer span,
.hot .card-footer strong,
.hot .card-footer span {
  color: #ffffff;
}

.hot .card-footer,
.hot .card-footer span {
  background: #ff8b1c;
}

@media (max-width: 1024px) {
  .report {
    padding-inline: 40px;
  }

  .report-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .report {
    padding: 72px 20px;
  }

  .report h2 {
    font-size: 28px;
    line-height: 1.3;
  }

  .report-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .report-card {
    min-height: auto;
    grid-template-columns: 1fr;
    padding: 20px 18px 0;
  }

  .copy h3 {
    font-size: 22px;
  }

  .chart {
    height: 180px;
  }

  .card-footer {
    margin: 8px -18px 0;
    padding: 10px 18px;
  }
}
</style>
