<template>
    <div class="value__list__title">
      <div class="item">Название</div>
      <div class="item">Значение</div>
      <div class="item">Дата</div>
      <div class="item">Функции</div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .value__list__title {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    height: 50px;
    padding: 0 30px;
    font-size: 1.3em;
    background: white;
    border-bottom: 1px solid #d2dbee;
  }
  
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  