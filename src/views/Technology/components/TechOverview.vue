<template>
  <section class="overview">
    <div class="container">
      <div class="copy">
        <h2>Обзор технологии</h2>

        <p>
          Натрий-ионные аккумуляторы — это современная технология хранения энергии, в
          которой перенос заряда осуществляется ионами натрия. По принципу работы они
          близки к литий-ионным батареям, но используют более доступные и широко
          распространённые материалы.
        </p>

        <p>
          Натрий является одним из самых распространённых элементов на Земле, что делает
          такие аккумуляторы перспективным решением для снижения зависимости от
          дефицитных и дорогих ресурсов, таких как литий и кобальт.
        </p>
      </div>

      <div class="media">
        <img src="../assets/intro.png" alt="Technology introduction" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.overview {
  padding: 120px 80px;
  display: flex;
  justify-content: center;
}

.container {
  width: min(100%, 1240px);
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
}

.copy h2 {
  margin: 0 0 26px;
  color: #f1f5fb;
  font-size: 56px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.copy p {
  margin: 0;
  color: #8a92a3;
  font-size: 18px;
  line-height: 1.95;
}

.copy p + p {
  margin-top: 18px;
}

.media {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}

.media::before {
  content: '';
  position: absolute;
  inset: auto 50% -8% auto;
  width: min(72%, 640px);
  height: 72%;
  border-radius: 28px;
  background: radial-gradient(circle, rgba(47, 107, 255, 0.18), transparent 70%);
  filter: blur(28px);
  z-index: 0;
  transform: translateX(50%);
}

.media img {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 920px;
  display: block;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.28);
}

@media (max-width: 1024px) {
  .overview {
    padding: 96px 40px;
  }

  .container {
    gap: 28px;
  }

  .media img {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .overview {
    padding: 72px 20px;
  }

  .copy h2 {
    font-size: 36px;
    margin-bottom: 18px;
    line-height: 1.15;
  }

  .copy p {
    font-size: 15px;
    line-height: 1.8;
  }

  .media img {
    max-width: 100%;
    border-radius: 18px;
  }
}
</style>
