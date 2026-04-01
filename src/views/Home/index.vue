<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <img src="@/assets/LOGO.2.svg" class="hero-logo" />
    </section>

    <!-- PRODUCTS -->
    <section class="products">
      <!-- 产品1 -->
      <div class="product">
        <div class="text">
          <h4>Featured Product</h4>
          <h2>Energy Storage Systems</h2>
          <p>
            High-performance sodium battery systems designed for large-scale
            energy storage with enhanced safety and cost efficiency.
          </p>
          <a href="#">Learn More →</a>
        </div>

        <div class="image">
          <img src="https://via.placeholder.com/500x400" />
        </div>
      </div>

      <!-- 产品2（反转布局） -->
      <div class="product reverse">
        <div class="image">
          <img src="https://via.placeholder.com/500x400" />
        </div>

        <div class="text">
          <h4>Featured Product</h4>
          <h2>Battery Modules</h2>
          <p>
            Modular battery solutions for flexible deployment across various
            industrial and grid-scale applications.
          </p>
          <a href="#">Learn More →</a>
        </div>
      </div>
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

/* PRODUCTS */
.products {
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  gap: 120px;
}

/* 单个产品 */
.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

/* 反转布局 */
.product.reverse {
  flex-direction: row-reverse;
}

/* 文本 */
.text {
  max-width: 500px;
}

.text h4 {
  color: #8A92A3;
  margin-bottom: 10px;
  font-size: 14px;
}

.text h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.text p {
  color: #8A92A3;
  line-height: 1.6;
  margin-bottom: 20px;
}

.text a {
  color: #2F6BFF;
  text-decoration: none;
  font-weight: 500;
}

/* 图片 */
.image img {
  width: 420px;
  border-radius: 12px;
}
</style>