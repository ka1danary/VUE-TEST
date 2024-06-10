<template>
  <div class="container">
    <div class="list__values">
      <div class="item">
        <div class="name">
          <div style="color: #0096d5">$</div>
          <div>USD</div>
        </div>
        <div class="select">
          <my-radio-checkbox />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyRadioCheckbox from "./UI/MyRadioCheckbox.vue";
</script>
<style scoped>
.container {
  background: rgb(234, 239, 241);
  height: 400px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  padding: 30px;
  overflow-y: scroll;
}
.list__values {
}
.container::-webkit-scrollbar {
  width: 15px;
}
.container::-webkit-scrollbar-track {
  background: rgb(207, 224, 233);
}
.container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(89, 187, 228);
}
.item {
  height: 48px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.name {
  display: flex;
  width: 50px;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}
.select {
}
</style>
