<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/LOGO2.svg" class="logo-img" alt="Logo" />
      </router-link>
    </div>

    <div class="links">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="link"
        exact-active-class="router-link-active"
      >
        {{ item.label }}
      </router-link>
    </div>

    <div class="actions">
      <button class="contact-btn" @click="showContact = true">Контакты</button>
    </div>

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="menuOpen"
      aria-label="Toggle navigation"
      @click="menuOpen = !menuOpen"
    >
      ☰
    </button>

    <div :class="['mobile-menu', { open: menuOpen }]">
      <router-link
        v-for="item in navItems"
        :key="`${item.to}-mobile`"
        :to="item.to"
        class="mobile-link"
        exact-active-class="router-link-active"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </router-link>

      <button
        class="contact-btn mobile-contact-btn"
        @click="showContact = true; menuOpen = false"
      >
        Контакты
      </button>
    </div>
  </nav>

  <ContactModal :visible="showContact" @close="showContact = false" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ContactModal from '@/components/ContactModal.vue'

const menuOpen = ref(false)
const showContact = ref(false)

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/technology', label: 'Технология' },
  { to: '/products/low', label: 'Продукты' },
  { to: '/company', label: 'О нас' },
]

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
  gap: 24px;
  padding: 10px 48px;
  background: rgba(2, 2, 3, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.logo {
  width: 180px;
  height: 72px;   /* 导航栏里的占位保持固定 */
  display: flex;
  align-items: center;
  overflow: visible;
}

.logo-img {
  height: 190px;
  width: auto;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  flex: 1;
}

.link,
.mobile-link {
  position: relative;
  color: #8a92a3;
  text-decoration: none;
  font-size: 20px;
  transition: 0.25s;
}

.link::after,
.mobile-link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2f6bff;
  transition: width 0.25s;
}

.link:hover,
.mobile-link:hover {
  color: #e3eaf0;
}

.link:hover::after,
.mobile-link:hover::after {
  width: 100%;
}

.router-link-active {
  color: #e3eaf0;
}

.router-link-active::after {
  width: 0;
}

.router-link-active.animate::after {
  width: 100%;
}

.actions {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.contact-btn {
  background: #2f6bff;
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

.menu-toggle {
  display: none;
  margin-left: auto;
  padding: 8px;
  border: none;
  background: transparent;
  color: white;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}

.mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    padding: 12px 16px;
    gap: 12px;
    flex-wrap: wrap;
  }

  .logo-img {
    height: 76px;
  }

  .links,
  .actions {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    display: none;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background: #0b0f1a;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .mobile-menu.open {
    display: flex;
  }

  .mobile-link {
    font-size: 16px;
    padding: 12px 8px;
    border-radius: 8px;
  }

  .mobile-link::after {
    bottom: 6px;
  }

  .mobile-link:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  .mobile-contact-btn {
    width: 100%;
    margin-top: 8px;
    font-size: 16px;
  }
}
</style>
