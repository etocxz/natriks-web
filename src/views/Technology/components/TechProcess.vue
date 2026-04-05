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
</style>