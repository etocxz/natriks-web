<template>
  <section class="hero">
    <div class="content">
      <h1>Кто мы</h1>
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
.hero {
  height: 70vh;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  /* 🔥 科技感背景 */
  background: radial-gradient(
    circle at center,
    rgba(47, 107, 255, 0.15),
    transparent 60%
  );
}

.content h1 {
  font-size: 80px;
  margin-bottom: 20px;
}

.content p {
  font-size:20px;
  color: #8A92A3;
  max-width: 1200px;
  margin: 0 auto;
}
</style>