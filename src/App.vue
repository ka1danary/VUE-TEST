<template>
  <div class="main">
    <MyHeader />

    <div class="content">
        <div v-if="store.alertStatus">
          <pop-up-window/>
        </div>
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
import popUpWindow from "./components/UI/popUpWindow.vue";

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
    store.alertStatus
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
