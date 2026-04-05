<template>
  <section class="capabilities">
    <h2>Our Capabilities</h2>

    <div class="items">
      <div class="item">
        <h4>Battery Technology</h4>
        <p>Advanced sodium-based chemistry and design.</p>
      </div>

      <div class="item">
        <h4>Energy Systems</h4>
        <p>Scalable storage solutions for grid and industry.</p>
      </div>

      <div class="item">
        <h4>Customization</h4>
        <p>Tailored solutions for diverse environments.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.capabilities {
  padding: 120px 80px;
}

.capabilities h2 {
  font-size: 36px;
  margin-bottom: 60px;
}

.items {
  display: flex;
  gap: 40px;
}

.item {
  flex: 1;
  padding: 30px;

  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;

  transition: 0.3s;
}

.item:hover {
  border-color: #2F6BFF;
  transform: translateY(-4px);
}

h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  color: #8A92A3;
}
</style>