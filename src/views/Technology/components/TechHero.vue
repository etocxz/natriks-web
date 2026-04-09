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
</style>