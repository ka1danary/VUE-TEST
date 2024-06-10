<template>
    <div class="btn__container">
      <div class="button">
        <img src="../../../icons/reload-icons/update-off.svg" alt="reload" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'my-button-reload',
  }
  </script>
  
  <style scoped>
  .btn__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .button {
    transition: background-color 0.3s ease; 
    border-radius: 5px; 
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .button:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  </style>
  