<template>
  <div class="container">
    <div class="name__container">
      <div class="icon" style="color : #2979ff">
        <strong>
          {{ baseCurrency.code }}
        </strong>
      </div>
      <div class="name"  style="">
        <strong>
          {{ baseCurrency.name }}
        </strong>
      </div>
    </div>
    <div class="price"  style="">
        <strong>1</strong>
        </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useValueStore } from "../../store/ValuesStore";

const valueStore = useValueStore();

const baseCurrency = computed(() => valueStore.selectedBaseCurrency);
</script>
<style scoped>
.container {
    background: white;
  border: 3px solid #8eb4f7;
  height: 48px;
  color: #121212;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  padding: 0 30px;
  margin: 10px 0;
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  height: 48px;
}
.name__container {
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: space-between;
}
.icon {
}
.name {
}
.price {
}
</style>
