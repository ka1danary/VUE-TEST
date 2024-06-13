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
import allApiFunctions from "./API/valueService";
import { useValueStore } from "./store/ValuesStore";
import { computed } from "vue";
import { useAutoUpdateStore } from "./store/AutoUpdateStore";

const store = useAutoUpdateStore()

// const frequency = computed({
//   get: () => updateStore.frequencyUpdateValue,
//   set: (value) => {
//     const sanitizedValue = parseInt(value, 10);
//     updateStore.frequencyUpdateValue = isNaN(sanitizedValue) ? 0 : sanitizedValue;
//   }
// });

const alertWindow = computed({
  get : () => 
    store.alertStatus,
  
  set : () => {
    setTimeout(() => {
      
    }, 1000)
  }
})

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
