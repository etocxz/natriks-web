<template>
  <section class="hero">
    <h1>Натрий-ионные системы накопления энергии</h1>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 70vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  overflow: hidden;
}


/* 背景光 */
.hero::before {
  content: '';
  position: absolute;
  width: 800px;
  height: 800px;

  background: radial-gradient(
    circle,
    rgba(47, 107, 255, 0.2),
    transparent 70%
  );

  animation: glowMove 8s infinite linear;
}

/* 动画 */
@keyframes glowMove {
  0% { transform: translate(-20%, -20%); }
  50% { transform: translate(20%, 20%); }
  100% { transform: translate(-20%, -20%); }
}

@media (max-width: 768px) {
  .hero {
    min-height: 44vh;
    height: auto;
    padding: 56px 20px;
  }

  .hero::before {
    width: 420px;
    height: 420px;
  }

  h1 {
    font-size: 28px;
    line-height: 1.35;
    position: relative;
    z-index: 1;
  }
}
</style>
