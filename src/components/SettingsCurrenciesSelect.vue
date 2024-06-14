<template>
  <div class="container">
    <div class="list__values" v-if="!isLoading">
      <div
        v-for="(currency, index) in allCurrencies"
        :key="index"
        :class="{ inactive: !currency.isActive }"
        class="item"
        @click="handleCurrencyClick(currency)"
      >
        <div class="name">
          <div style="color: #2979ff">{{ currency.code }}</div>
          <div>{{ currency.name }}</div>
        </div>
        <div class="select">
          <my-radio-checkbox 
            v-model="currency.isActive" 
            @update:modelValue="(status) => helperSelect(currency.name, status)" 
          />
        </div>
      </div>
    </div>
    <div v-else class="loading">
      <my-loader />
    </div>
  </div>
</template>

<script setup>
import MyRadioCheckbox from "./UI/MyRadioCheckbox.vue";
import { computed } from "vue";
import { useValueStore } from "@/store/ValuesStore";
import MyLoader from "./UI/MyLoader.vue";

const store = useValueStore();

const isLoading = computed(() => store.isCurrenciesLoading);
const allCurrencies = computed(() => store.arrayReadyAssembleObjectWithCurrencies);

const setSettings = store.selectCurrenciesInSettings;

const helperSelect = (name, status) => {
  setSettings(name, status);
};

const handleCurrencyClick = (currency) => {
  const newStatus = !currency.isActive;
  helperSelect(currency.name, newStatus);
};
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
  cursor: pointer; /* Добавляем указатель при наведении */
}

.name {
  display: flex;
  align-items: center;
  font-weight: 600;
}

.name > div {
  margin-right: 10px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.inactive {
  opacity: 0.5;
}
</style>
