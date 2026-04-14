<template>
  
  <nav class="navbar">
    <!-- 左：Logo -->
    <div class="logo">
      <router-link to='/'>
        <img src="@/assets/LOGO.2.svg" class="logo-img" />
      </router-link>
    </div>

    <!-- 中：导航 -->
    <div class="links">
      <router-link to="/" class="link" exact-active-class="router-link-active">Главная</router-link>
      <router-link to="/technology" class="link">Технология</router-link>
      <router-link to="/products/low" class="link">Продукты</router-link>
      <router-link to="/company" class="link">О нас</router-link>
    </div>

    <!-- <div class="menu-toggle" @click="menuOpen = !menuOpen">
      ☰
    </div>

    <div :class="['nav-links', { open: menuOpen }]">
      <a href="/">Главная</a>
      <a href="/products/low">Продукты</a>
      <a href="/company">О нас</a>
      <a href="/contact">Контакт</a>

    </div> -->

    <!-- 右：按钮 -->
    <div class="actions">
      <button @click="showContact=true"class="contact-btn">Контакт</button>
    </div>
  </nav>
  <ContactModal
  :visible="showContact"
  @close="showContact = false"
/>
</template>

<script setup lang="ts">
// 预留扩展（比如登录状态、滚动监听）
import { onMounted } from 'vue'
import { ref } from 'vue'
import ContactModal from '@/components/ContactModal.vue'

// const menuOpen = ref(false)~
const showContact = ref(false)

onMounted(() => {
  document.querySelectorAll('.router-link-active').forEach(el => {
    el.classList.add('animate')
  })
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 48px;

  background: rgba(2, 2, 3, 0.85);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  padding-bottom: 1px;
}


.logo-img {
  height: 120px;   /* 控制大小 */
  width: auto;    /* 保持比例 */
}

/* LINKS */
.links {
  display: flex;
  gap: 36px;
}

.link {
  position: relative;
  color: #8A92A3;
  text-decoration: none;
  font-size: 20px;
  transition: 0.25s;
}

/* hover 动效（高级感关键） */
.link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2F6BFF;
  transition: width 0.25s;
}

.link:hover {
  color: #E3EAF0;
}

.link:hover::after {
  width: 100%;
}

/* 当前路由高亮（更精确） */
.router-link-active {
  color: #E3EAF0;
}

/* .router-link-active::after {
  width: 100%;
  transition: width 0.25s;
} */
 .router-link-active::after {
  width: 0;
}

.router-link-active.animate::after {
  width: 100%;
}

/* BUTTON */
.contact-btn {
  background: #2F6BFF;
  color: white;
  border: none;

  padding: 10px 25px;
  border-radius: 6px;

  font-size: 20px;
  cursor: pointer;

  transition: 0.25s;
}

.contact-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(47, 107, 255, 0.3);
}

/*手机样式 */
/* 🔥 默认（PC）保持不变 */

/* 隐藏汉堡按钮（PC） */
.menu-toggle {
  display: none;
}


/* ================= 手机适配 ================= */
@media (max-width: 768px) {

  /*  Navbar 内边距缩小 */
  .navbar {
    padding: 12px 16px;
  }

  /*  显示汉堡按钮 */
  .menu-toggle {
    display: block;
    font-size: 24px;
    cursor: pointer;
    color: white;
  }

  /*  导航整体变成下拉层 */
  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;

    background: #0B0F1A;
    backdrop-filter: blur(10px);

    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;

    display: none;   /* 默认隐藏 */
  }

  /*  打开状态 */
  .nav-links.open {
    display: flex;
  }

  /*  每个链接变大一点 */
  .nav-links a {
    font-size: 16px;
  }

}
</style>