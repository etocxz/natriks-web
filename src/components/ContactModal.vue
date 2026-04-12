<template>
  <div v-if="visible" class="overlay" @click.self="close">
    <div class="modal">

      <!-- 左侧 -->
      <div class="left">
        <img src="@/assets/LOGO.2.svg" class="logo" />

        <p class="info">Электронная почта: info@natriks.ru</p>
        <!-- <p class="info">Phone: +7 999 123 4567</p> -->
      </div>

      <!-- 右侧 -->
      <div class="right">
        <h2>Связаться с нами</h2>

        <input placeholder="Ваше имя" />
        <input placeholder="Электронная почта" />
        <input placeholder="Телефон" />

        <button class="submit">Отправлять</button>
      </div>

      <!-- 关闭按钮 -->
      <span class="close" @click="close">×</span>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
/* 遮罩 */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2000;
}

/* 弹窗 */
.modal {
  width: 800px;
  display: flex;

  background: #0B0F1A;
  border-radius: 12px;
  overflow: hidden;

  position: relative;
}

/* 左侧 */
.left {
  width: 40%;
  padding: 40px;

  border-right: 1px solid rgba(255,255,255,0.05);
}

.logo {
  width: 120px;
  margin-bottom: 30px;
}

.info {
  color: #8A92A3;
  margin-bottom: 10px;
}

/* 右侧 */
.right {
  width: 60%;
  padding: 40px;

  display: flex;
  flex-direction: column;
}

.right h2 {
  margin-bottom: 20px;
}

input {
  margin-bottom: 12px;
  padding: 12px;

  background: rgba(255,255,255,0.05);
  border: none;
  color: white;
  border-radius: 6px;
}

/* 按钮 */
.submit {
  margin-top: 10px;
  padding: 12px;

  background: #2F6BFF;
  border: none;
  color: white;
  cursor: pointer;
}

/* 关闭按钮 */
.close {
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  font-size: 20px;
}
</style>