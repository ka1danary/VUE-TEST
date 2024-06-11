<template>
  <div class="field">
    <div class="item__name">
      <div class="icon">
        <strong> {{ icon }}</strong>
      </div>
      <div class="text">
        <strong>{{ name }}</strong>
      </div>
    </div>
    <div class="item">{{ value }}</div>
    <div class="item">{{ date }}</div>
    <div class="item right__field_btn">
      <img src="../../icons/reload-icons/update-val-off.svg" alt="reload" class="button" />
      <img src="../../icons/copy/content-copy-off.svg" alt="copy" class="button" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: "$",
  },
  name: {
    type: String,
    default: "USD",
  },
  value: {
    type: Number,
    default: 1,
  },
  date: {
    type: String,
    default: "19.04.2024 16:00",
  },
});
</script>

<style scoped>
.field {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  background: white;
  height: 48px;
  color: #121212;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  padding: 0 30px;
  margin: 10px 0;
}

img {
  cursor: pointer;
}

.right__field_btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  width: 100px;
}

.name {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  color: #2979ff;
  margin-right: 10px;
}

.text {
  display: flex;
  align-items: center;
}

.button {
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.button:hover {
  transform: scale(1.03);
  background-color: #EAEFF1;
  border-radius: 10px;
}

.item__name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
}
</style>
