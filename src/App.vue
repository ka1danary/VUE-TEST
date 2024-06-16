<template>
  <div class="main">
    <MyHeader />
    <div class="content">
      <div v-if="alertWindow" class="alert">
        <pop-up-window/>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import MyHeader from "./components/header/MyHeader.vue";
import { computed } from "vue";
import { useAutoUpdateStore } from "./store/AutoUpdateStore";
import popUpWindow from "./components/UI/popUpWindow.vue";


const store = useAutoUpdateStore();

const alertWindow = computed({
  get: () => store.alertStatus,
});

</script>

<style scoped>
.content {
  margin-top: 20px;
}
.title {
  font-size: 2em;
}


@media (max-width : 428px){
    .alert {
      display: none;
    }
}
  

</style>
