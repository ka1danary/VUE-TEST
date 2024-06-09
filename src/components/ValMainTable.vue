<template>
  <div class="container">
    <div>
      <div><value-list-title /></div>
      <div class="value__container">
        <div class="value__list">
          <!-- <value-field v-for="(val, index) in allInfoAboutValues" :key="index" :name="val.name" :icon="val.icon"/> -->
          <value-field/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ValueListTitle from '@/components/UI/ValueListTitle.vue';
import ValueField from '@/components/UI/ValueField.vue';
import { useValueStore } from '@/store/ValuesStore';
import allApiFunctions from '@/API/valueService';

const store = useValueStore();
const allInfoAboutValues = ref([]);


</script>

<style scoped>
.container {
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
}
.value__container {
  background: #eaeff1;
  display: flex;
  justify-content: center;
  
}
.value__list {
  padding-top: 20px;
  padding-bottom: 20px;
  height: 50vh;
  padding: 30px;
  width: 100vw;
}
</style>
