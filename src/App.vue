<template>
  <div class="main">
    <MyHeader />
    <div class="content">
      <router-view /> 
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MyHeader from "./components/header/MyHeader.vue";
import { useValueStore } from "./store/ValuesStore";
import { useHeaderStore } from "@/store/HeaderStore";
import {counter} from '@/store/HeaderStore'
import popUpWindow from "./components/UI/popUpWindow.vue";
import MyRadioCheckbox from '@/components/UI/MyRadioCheckbox.vue'




// onMounted(() => {
//   getAllValues()
// });

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
