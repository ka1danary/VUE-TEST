<template>
  <div class="main">
    <MyHeader />
    <div class="content">
     
        <router-view />
        
        
    </div>
  </div>
</template>

<script setup>
import MyHeader from "./components/header/MyHeader.vue";


// onMounted(() => {
//   getAllValues()
// });

const currencyObject = {
  id: "1",
  code: "$",
  name: "USD",
  value: 3.123,
  lastUpdate: "Date Object in String",
};
</script>

<style scoped>
.content {
  width: 100vh;
  margin-top: 20px;
}
.title {
  font-size: 2em;
}
</style>
