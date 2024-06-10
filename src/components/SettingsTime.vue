<template>
    <div class="container">
      <div class="auto__update__mode">
        Автоматическое обновление данных
        <my-custom-checkbox style="margin-left: 30px" />
      </div>
      <div class="frequency__user__field">
        <div>Частота обновления:</div>
        <input
          style="margin-left: 30px"
          class="time__field"
          v-model="inputValue"
          @input="handleInput"
          maxlength="4"
        />
        <div style="margin-left: 30px">мин.</div>
      </div>
      <div></div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import MyCustomCheckbox from "@/components/UI/MyCustomCheckbox.vue";
  
  const inputValue = ref("");
  
  const handleInput = (event) => {
    // Оставляем только цифры и ограничиваем длину до 4 символов
    const value = event.target.value.replace(/\D/g, "").slice(0, 4);
    inputValue.value = value;
  };
  </script>
  
  <style scoped>
  .container {
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
    background: rgb(255, 255, 255);
    padding: 30px;
  }
  .auto__update__mode {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 1.3em;
    font-weight: 600;
  }
  
  .frequency__user__field {
    display: flex;
    height: 40px;
    align-items: center;
  }
  
  .time__field {
    border-radius: 5px;
    background: rgb(234, 239, 241);
    width: 83px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 5px;
    text-align: center;
    font-size: 1em;
    border: 1px solid transparent;
    transition: border-color 0.3s ease;
  }
  
  .time__field:focus {
    border-color: #a4c4d1; 
  }
  </style>
  