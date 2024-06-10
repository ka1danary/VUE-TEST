<template>
  <div class="btn__container" :style="{ width: widthButton }">
    <div class="confirm" v-if="typeButton === 'Confirm'" :style="{ width: widthButton }">
      Подтвердить
    </div>
    <div class="reject" v-else :style="{ width: widthButton }">
      Отмена
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  typeButton: {
    type: String,
    default: "Confirm",
  },
  widthButton: {
    type: String,
    default: "10vw",
  },
});
</script>

<style scoped>
.confirm,
.reject {
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.confirm {
  background: rgb(0, 150, 213);
  color: white;
}

.reject {
  background: white;
  color: black;
}

.confirm:hover {
  background: rgb(0, 130, 190);
  color: #fff;
}

.reject:hover {
  background: rgb(241, 241, 241);
  color: #000;
}
</style>
