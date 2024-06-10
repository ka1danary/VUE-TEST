<template>
    <div class="radio" @click="toogleRadio">
      <div v-if="radioStatus" class="radio__on">
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    radioStatus: {
      type: Boolean,
      default: true,
    },
  });
  
  const emit = defineEmits(['update:radioStatus']);
  
  const toogleRadio = () => {
    emit('update:radioStatus', !props.radioStatus);
  };
  
  </script>
  
<style scoped>
.radio {
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 25px;
  background: rgb(210, 219, 222);
  display: flex;
  align-items: center;
  justify-content: center;
}
.radio__on {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: rgb(0, 150, 213);
}
</style>
