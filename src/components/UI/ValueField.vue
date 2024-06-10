<template>
  <div class="field">

    <div class="name">
      <div class="icon">
        <strong> {{ icon }}</strong>
      </div>
      <div class="item">{{ name }}</div>
    </div>

    <div class="item">{{ value }}</div>

    <div class="item">{{ date }}</div>

    <div class="right__field_btn">
      <div>
        <img src="../../icons/reload-icons/update-val-off.svg" alt="reload" />
      </div>
      <div>
        <img src="../../icons/copy/content-copy-off.svg" alt="copy" />
      </div>
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
  height: 48px;
  color: #121212;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  padding-left: 70px;
  padding-right: 70px;
}
img {
  cursor: pointer;
}

.right__field_btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 70px;
  user-select: none;
}
.name {
  display: flex;
  justify-content: space-between;
  
}
.icon {
  color: #2979ff;
}

.item {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
