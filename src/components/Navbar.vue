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
      <router-link to="/" class="link" exact-active-class="router-link-active">Дом</router-link>
      <router-link to="/technology" class="link">Технология</router-link>
      <router-link to="/products" class="link">Продукты</router-link>
      <router-link to="/company" class="link">Компания</router-link>
    </div>

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
}


.logo-img {
  height: 100px;   /* 控制大小 */
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
</style>