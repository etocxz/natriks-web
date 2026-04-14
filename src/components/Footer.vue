<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- 左：品牌 -->
      <div class="brand">
        <div class="logo">NAtriKs</div>
        <p class="desc">
          Инновационные технологии хранения энергии.
        </p>
      </div>

      <!-- 中：导航 -->
      <div class="links">
        <div class="column">
          <h4>Компания</h4>
          <router-link to="/company">О нас</router-link>
          <router-link to="/technology">Технология</router-link>
        </div>

        <div class="column">
          <h4>Продукты</h4>
          <router-link to="/products/low">Решения</router-link>
          <!-- <router-link to="/products">Модули</router-link> -->
        </div>

        <div class="column">
          <h4>Контакт</h4>
          <p>Электронная почта: info@natriks.ru</p>
          <!-- <p>Телефон: +7(992)341-77-05</p> -->
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="bottom">
      © 2026. Все права защищены
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0B0F1A;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 80px;
}

/* 容器 */
.footer-container {
  display: flex;
  justify-content: space-between;
  padding: 60px 80px;
}

/* 品牌 */
.logo {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.desc {
  color: #8A92A3;
  max-width: 260px;
  font-size: 14px;
  line-height: 1.6;
}

/* 链接区域 */
.links {
  display: flex;
  gap: 80px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.column h4 {
  font-size: 14px;
  margin-bottom: 10px;
  color: #E3EAF0;
}

/* 链接样式 */
.column a {
  color: #8A92A3;
  text-decoration: none;
  font-size: 13px;
  transition: 0.2s;
}

.column a:hover {
  color: #E3EAF0;
}

/* 文本 */
.column p {
  font-size: 13px;
  color: #8A92A3;
}

/* 底部 */
.bottom {
  text-align: center;
  padding: 20px;
  font-size: 12px;
  color: #6B7280;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/*手机样式 */
@media (max-width: 768px) {

  /*  主容器改为上下布局 */
  .footer-container {
    flex-direction: column;
    gap: 40px;
    padding: 40px 20px;
  }

  /*  品牌区域居中 */
  .brand {
    text-align: center;
    align-items: center;
  }

  /*  links 改为竖排 */
  .links {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  /*  每一列居中 */
  .column {
    align-items: center;
  }

  /*  文字居中 */
  .column h4,
  .column a,
  .column p {
    text-align: center;
  }

  /*  底部间距优化 */
  .bottom {
    font-size: 12px;
    padding: 16px;
  }
}
</style>