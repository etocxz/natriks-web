<template>
  <section class="hero">
    <div class="content">
      <h1>About NAtriKs</h1>
      <p>
        Engineering next-generation sodium battery systems for a sustainable
        energy future.
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
  font-size: 56px;
  margin-bottom: 20px;
}

.content p {
  color: #8A92A3;
  max-width: 600px;
  margin: 0 auto;
}
</style>