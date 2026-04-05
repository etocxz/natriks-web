<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <img src="@/assets/LOGO.2.svg" class="hero-logo" />
    </section>
  </div>
</template>

<style scoped>
/* HERO */
.hero {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(
    circle at center,
    rgba(47, 107, 255, 0.15),
    transparent 60%
  );
}

.hero-content {
  text-align: center;
}

.logo {
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 4px;
}


.logo-img {
  height: 100px;
}

.hero-logo {
  width: 2000px;
}

.subtitle {
  margin-top: 20px;
  color: #8A92A3;
  font-size: 18px;
}


/* 图片 */
.image img {
  width: 420px;
  border-radius: 12px;
}
</style>