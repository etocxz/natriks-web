<template>
  <section class="process">
    <h2>How It Works</h2>

    <div class="steps">
      <div class="step">
        <span>01</span>
        <p>Charge sodium ions into the electrode structure</p>
      </div>

      <div class="step">
        <span>02</span>
        <p>Store energy through electrochemical reactions</p>
      </div>

      <div class="step">
        <span>03</span>
        <p>Release energy during discharge</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  padding: 120px 80px;
}

.steps {
  display: flex;
  gap: 40px;
  position: relative;
}

/* 中间线 */
.steps::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.step span {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 24px;
  color: #2F6BFF;
}

@media (max-width: 768px) {
  .process {
    padding: 72px 20px;
  }

  .steps {
    flex-direction: column;
    gap: 24px;
  }

  /* 涓棿绾?*/
  .steps::before {
    display: none;
  }

  .step {
    padding: 18px 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .step span {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .step p {
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
  }
}
</style>
