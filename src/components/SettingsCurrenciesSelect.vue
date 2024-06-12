<template>
  <div class="container">
    <div class="list__values" v-if="!isLoading">
      <div class="item" v-for="(currency, index) in allCurrence" :key="index">
        <div class="name">
          <div style="color: #2979ff">{{ currency.code }}</div>
          <div>{{ currency.name }}</div>
        </div>
        <div class="select">
          <my-radio-checkbox :isActive="currency.isActive" />
        </div>
      </div>
    </div>
    <div v-else class="loading">
          
      <my-loader/>
    </div>
  </div>
</template>

<script setup>
import MyRadioCheckbox from "./UI/MyRadioCheckbox.vue";
import { computed } from "vue";
import { useValueStore } from "@/store/ValuesStore";
import MyLoader from "./UI/MyLoader.vue";

const store = useValueStore();

const loadingCurrenceInfo = computed(() => store.isCurrencuesLoading);
const isLoading = computed(() => store.isCurrencuesLoading)
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
  padding: 0 30px;
  margin-bottom: 10px;
  
}
.name {
  display: flex;
  align-items: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
}
.name > div {
  margin-right: 10px;
  
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px
}
</style>
