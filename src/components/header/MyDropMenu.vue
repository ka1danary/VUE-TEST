<template>
  <div>
    <div class="menu__icon" @click="isOpen = true">
      <img src="../../icons/menu.svg" alt="menu" />
    </div>
    <div class="menu__overlay" v-if="isOpen" @click.self="isOpen = false">
      <div class="manu__content">
        <div class="container__btn">
          <button class="close__btn" @click="isOpen = false">✖</button>
        </div>
        <div class="last__update">
          Последнее обновление:
          <div class="date__time" style="margin-left: 15px">
            <div class="date">{{ parsedDate.day }}.{{ parsedDate.month }}</div>
            <div class="time">
              {{ parsedDate.hours }}:{{ parsedDate.minutes }}
            </div>
          </div>
        </div>
        <div>
          <router-link to="/" class="menu__item" @click="helper">
            <img src="../../icons/home-icons/home-dropdown.svg" alt="home" />
            <div>Главная</div>
          </router-link>
        </div>
        <div>
          <router-link to="/settings" class="menu__item" @click="helper">
            <img
              src="../../icons/setting-icons/settings-off.svg"
              alt="settings"
            />
            <div>Настройки</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useValueStore } from "@/store/ValuesStore";
import { parseDate } from "@/helpers/helperFunction";

const valueStore = useValueStore();

const lastUpdate = computed(() => valueStore.lastUpdateAll);

const isOpen = ref(false);

const helper = () => {
  isOpen.value = false;
};

const parsedDate = computed(() => parseDate(lastUpdate.value));
</script>

<style scoped>
.menu__icon {
  cursor: pointer;
  height: 60px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  margin-right: 10px;
}

.menu__overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.manu__content {
  width: 50%;
  height: 100%;
  background: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0 10px 10px 0px;
  overflow-y: auto;
  padding: 20px;
}

.container__btn {
  display: flex;
  align-items: start;
  width: 100%;
  justify-content: end;
  height: 70px;
}

.close__btn {
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
  transition: color 0.3s;
}

.close__btn:hover {
  color: #0096d5;
}

.date__time {
  display: flex;
  align-items: center;
  background: #dfecf1;
  border-radius: 15px;
  padding: 10px;
  font-weight: 600;
  user-select: all;
}

.date {
  margin-right: 15px;
}

.menu__item {
  font-size: 1.2em;
  margin: 20px 0;
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 2px solid #d2dbde;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;
}

.menu__item:hover {
  color: #2979ff;
  background-color: #f0f0f0;
}

.last__update {
  display: flex;
  align-items: center;
}

@media (max-width: 600px) {
  .manu__content {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 30px;
  }
}
</style>
