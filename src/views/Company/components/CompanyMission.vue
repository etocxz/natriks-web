<template>
  <section class="mission">
    <div class="grid">
      <div>
        <h3>Миссия</h3>
        <p>
          Наша миссия — внедрять инновационные решения в области хранения энергии, 
делая их доступными, надежными и эффективными для бизнеса и повседневной жизни.
        </p>
      </div>

      <div>
        <h3>Видение</h3>
        <p>
        Стать мировым лидером в области систем хранения энергии нового поколения.        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission {
  padding: 120px 80px;
}

.grid {
  display: flex;
  gap: 40px;
}

.grid > div {
  flex: 1;
  padding: 40px;

  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;

  transition: 0.3s;
}

.grid > div:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.04);
}

@media (max-width: 768px) {
  .mission {
    padding: 72px 20px;
  }

  .grid {
    flex-direction: column;
    gap: 20px;
  }

  .grid > div {
    padding: 24px 18px;
  }

  .grid > div:hover {
    transform: translateY(-2px);
  }

  h3 {
    font-size: 22px;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  p {
    font-size: 14px;
    line-height: 1.8;
    margin: 0;
    word-break: break-word;
  }
}
</style>
