<template>
  <div class="container">
    <div class="list__values">
      <div class="item" v-for="(currency, index) in allCurrence" :key="index">
        <div class="name">
          <div style="color: #0096d5">{{ currency.code }}</div>
          <div>{{ currency.name }}</div>
        </div>
        <div class="select">
          <my-radio-checkbox :isActive="currency.isActive" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyRadioCheckbox from "./UI/MyRadioCheckbox.vue";
import { computed } from "vue";
import { useValueStore } from "@/store/ValuesStore";

const store = useValueStore();

const loadingCurrenceInfo = computed(() => store.isCurrencuesLoading);
const allCurrence = computed(
  () => store.arrayReadyAssembleObjectWithCurrencies
);
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
  margin-bottom: 10px;
}
.name {
  display: flex;
  align-items: center;
  font-weight: 600;
}
.name > div {
  margin-right: 10px;
}
.select {
}
</style>
