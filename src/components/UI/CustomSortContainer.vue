<template>
    <div class="dropdown" @click.stop="toggleDropdown" ref="dropdown">
      <div class="dropdown__button">
        <span>Сортировать по</span>
        <span class="arrow" :class="{ open: isOpen }">
            <img src='../../icons/arrows/arrow_down.svg' alt="">
        </span>
      </div>
      <div v-if="isOpen" class="dropdown__content">
        <div 
          class="dropdown__item" 
          :class="{ selected: selectedOption === 'ascending' }"
          @click="selectOption('ascending')"
        >
          Возрастанию
        </div>
        <div 
          class="dropdown__item" 
          :class="{ selected: selectedOption === 'descending' }"
          @click="selectOption('descending')"
        >
          Убыванию
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isOpen = ref(false);
  const selectedOption = ref('ascending');
  const dropdown = ref(null);
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const closeDropdown = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
      isOpen.value = false;
    }
  };
  
  const selectOption = (option) => {
    selectedOption.value = option;
    isOpen.value = false;
  };
  
  onMounted(() => {
    document.addEventListener('click', closeDropdown);
  });
  
  onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
  });
  </script>
  
  <style scoped>
  .dropdown {
    position: relative;
    display: inline-block;
    width: 200px;
  }
  
  .dropdown__button {
    background-color: #0096d5;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .arrow {
    margin-left: 10px;
  }
  
  .arrow.open {
    transform: rotate(180deg);
  }
  
  .dropdown__content {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #0096d5;
    margin-top: 5px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
    overflow: hidden;
    width: 200px;
  }
  
  .dropdown__item {
    padding: 10px;
    cursor: pointer;
    color: white;
  }
  
  .dropdown__item:hover,
  .dropdown__item.selected {
    background-color: #007bb3;
  }
  </style>
  