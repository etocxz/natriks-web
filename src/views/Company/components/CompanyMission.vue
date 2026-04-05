<template>
  <section class="mission">
    <div class="grid">
      <div>
        <h3>Mission</h3>
        <p>
          To deliver safe and scalable energy storage solutions through sodium
          battery innovation.
        </p>
      </div>

      <div>
        <h3>Vision</h3>
        <p>
          To become a global leader in next-generation energy storage systems.
        </p>
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
</style>