<template>
  <section class="report">
    <div class="report-inner">
      <h2>Надежность автомобильного класса</h2>

      <div class="report-grid">
        <article class="report-card pass">
          <div class="copy">
            <h3>Перезаряд</h3>
            <p class="label">Входные параметры</p>
            <p>1C до 16,7 В</p>
            <p class="label">Состояние теста</p>
            <p>Без возгорания и взрыва</p>
          </div>

          <div class="chart chart-overcharge">
            <span class="line blue"></span>
            <span class="line red"></span>
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

          <div class="chart chart-overdischarge">
            <span class="line blue"></span>
            <span class="line red"></span>
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

          <div class="chart chart-short">
            <span class="line blue"></span>
            <span class="line red"></span>
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

          <div class="chart chart-crush">
            <span class="line blue"></span>
            <span class="line red"></span>
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

          <div class="chart chart-nail">
            <span class="line blue"></span>
            <span class="line red"></span>
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

          <div class="chart chart-thermal">
            <span class="line blue"></span>
            <span class="line red"></span>
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
  padding: 120px 80px;
  background:
    radial-gradient(circle at 18% 20%, rgba(47, 107, 255, 0.14), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
}

.report-inner {
  max-width: 1180px;
  margin: 0 auto;
}

.report h2 {
  margin: 0 0 28px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #e3eaf0;
  font-size: 42px;
  line-height: 1.2;
}

.report-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.report-card {
  min-height: 210px;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  grid-template-rows: 1fr auto;
  gap: 12px 18px;
  padding: 22px 22px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.96);
  color: #151923;
  overflow: hidden;
  transition: 0.25s;
}

.report-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22);
}

.copy h3 {
  margin: 0 0 14px;
  color: #1d2330;
  font-size: 24px;
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
  position: relative;
  align-self: center;
  height: 92px;
  border-left: 1px solid #d7dce5;
  border-bottom: 1px solid #d7dce5;
  background:
    linear-gradient(to right, rgba(33, 40, 54, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(33, 40, 54, 0.08) 1px, transparent 1px);
  background-size: 22px 18px;
}

.line {
  position: absolute;
  left: 8%;
  right: 8%;
  height: 3px;
  border-radius: 999px;
}

.line.blue {
  top: 54%;
  background: #36a5ff;
}

.line.red {
  top: 28%;
  background: #ff4b4b;
}

.chart-overcharge .blue {
  transform: rotate(-5deg);
  transform-origin: left center;
}

.chart-overdischarge .red {
  top: 52%;
  transform: rotate(-12deg);
  transform-origin: left center;
}

.chart-short .red {
  top: 30%;
  background: repeating-linear-gradient(135deg, #ff4b4b 0 7px, #ff8c8c 7px 10px);
}

.chart-crush .red {
  top: 38%;
  width: 70%;
  transform: rotate(16deg);
  transform-origin: left center;
}

.chart-nail .red {
  top: 34%;
  width: 76%;
  transform: rotate(12deg);
  transform-origin: left center;
}

.chart-nail::before,
.chart-crush::before {
  content: '';
  position: absolute;
  left: 18%;
  top: 12%;
  width: 2px;
  height: 70%;
  background: #ff4b4b;
}

.chart-thermal .red {
  top: 32%;
  width: 78%;
  transform: rotate(10deg);
  transform-origin: left center;
}

.card-footer {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px -22px 0;
  padding: 10px 22px;
  background: #ffffff;
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
    height: 120px;
  }

  .card-footer {
    margin: 8px -18px 0;
    padding: 10px 18px;
  }
}
</style>
