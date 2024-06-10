<template>
  <div class="toggle-switch" @click="toggle">
    <div class="toggle-circle" :class="{ 'toggle-on': isChecked }"></div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isChecked = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    isChecked.value = newValue;
  }
);

const toggle = () => {
  isChecked.value = !isChecked.value;
  emit("update:modelValue", isChecked.value);
};

</script>

<style scoped>
.toggle-switch {
  width: 55px;
  height: 30px;
  background: #e9eef1;
  border-radius: 30px;
  border: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}
.toggle-circle {
  width: 24px;
  height: 24px;
  background: #a9aeb1;
  border-radius: 50%;
  margin: 3px;
  transition: transform 0.3s, background-color 0.3s;
}
.toggle-on {
  transform: translateX(25px);
  background: #0096d5;
  
}
</style>
