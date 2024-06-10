<template>
  <div class="container">
    <div>
      <div><value-list-title /></div>
      <div class="value__container">
        <div class="value__list">
          <!-- <value-field v-for="(val, index) in allInfoAboutValues" :key="index" :name="val.name" :icon="val.icon"/> -->
          <div>
            <value-field />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ValueListTitle from "@/components/UI/ValueListTitle.vue";
import ValueField from "@/components/UI/ValueField.vue";
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
  height: 400px;
  padding: 30px;
  width: 100vw;
  overflow-y: scroll;
}
.value__list::-webkit-scrollbar {
  width: 15px;
}
.value__list::-webkit-scrollbar-track {
  background: rgb(207, 224, 233);
}
.value__list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(89, 187, 228);
}
</style>
