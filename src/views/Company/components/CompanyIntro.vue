<template>
  <section class="intro">
    <div class="container">
      <h2>Кто мы</h2>
      <p>
        Мы — одна из первых компаний, начавших коммерческое внедрение натрий-ионных аккумуляторов в России. 
Мы работаем с этой технологией в различных сферах, включая автомобильные стартерные батареи и системы накопления энергии.
      </p>
      <p>
        Мы сотрудничаем с ведущими исследовательскими центрами в Китае, 
включая Tsinghua University и Shanghai Jiao Tong University.
Это сотрудничество обеспечивает нам доступ к передовым научным разработкам.
      </p>
    </div>
  </section>
</template>

<style scoped>
.intro {
  padding: 140px 0;
  display: flex;
  justify-content: center;
}

.container {
  max-width: 900px;
  text-align: left;
}

h2 {
  font-size: 36px;
  margin-bottom: 24px;
}

p {
  font-size: 16px;
  color: #8A92A3;
  line-height: 1.9;
}

@media (max-width: 768px) {
  .intro {
    padding: 72px 20px;
  }

  .container {
    max-width: none;
    width: 100%;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 18px;
    line-height: 1.3;
  }

  p {
    font-size: 14px;
    line-height: 1.8;
    word-break: break-word;
  }
}
</style>
