<template>
  <div>
    <div class="container">
      <div class="alert__text_container">
        <div>
          <strong> 19.00.2004 15:00</strong> 
        </div>
        <div class="text">Автоматическое обновление данных</div>
        <br />
        <div class="text"> Следущее обновление в  16:00 </div>
        
      </div>
      <div class="alert__bottom">
        <button>Ok</button>
      </div>
    </div>
  </div>
</template>
<script setup>
name: "pop-up-window";
</script>
<style scoped>
.container {
  width: 205px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.alert__text_container {
  height: 130px;
  border-bottom: 2px solid #d2dbde;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 10px;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.alert__bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #0096D5;
  font-size: 1.3em;
}

button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;
}
</style>
