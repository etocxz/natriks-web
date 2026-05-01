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

      <div class="materials">
        <article class="material-card sodium">
          <img src="../assets/Na.png" alt="Na material comparison" />
        </article>

        <article class="material-card lithium">
          <img src="../assets/Li.png" alt="Li material comparison" />
        </article>

        <article class="material-card lead">
          <img src="../assets/Pb.png" alt="Pb material comparison" />
        </article>
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
  width: min(100%, 1280px);
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.copy {
  max-width: 980px;
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

.materials {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.material-card {
  padding: 0;
}

.material-card img {
  width: 100%;
  display: block;
  object-fit: contain;
}

@media (max-width: 1100px) {
  .overview {
    padding: 96px 40px;
  }

  .materials {
    grid-template-columns: 1fr;
  }

  .material-card img {
    height: 420px;
  }
}

@media (max-width: 768px) {
  .overview {
    padding: 72px 20px;
  }

  .container {
    gap: 32px;
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

  .materials {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .material-card img {
    height: auto;
    max-height: 160px;
  }
}
</style>
