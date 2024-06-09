<template>
  <div class="field">
    <div class="left__field">
      <div class="name">
        <div class="icon">
         <strong>  {{ icon }}</strong>
        </div>
        <div>{{ name }}</div>
      </div>
      <div>{{ value }}</div>
      <div>{{date}}</div>
    </div>
    <div class="right__field_btn">
      <div>
        <img src="../../icons/reload-icons/update-val-off.svg" alt="reload">
      </div>
      <div>
        <img src="../../icons/copy/content-copy-off.svg" alt="copy">
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    default: '$'
  },
  name: {
    type: String,
    default: "USD"
  },
  value : {
    type : Number,
    default : 1
  },
  date : {
    type : String,
    default : '19.04.2024 16:00'
  }
});
</script>

<style scoped>
.field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 48px;
  color: #121212;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  padding-left: 30px;
  padding-right: 30px;
}
img {
  cursor: pointer;
  
}
.left__field {
  display: flex;
  align-items: center;
  min-width: 400px;
  width: 90%;

}
.right__field_btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 70px;
  user-select: none;
  
}
.name {
  display: flex;
  justify-content: space-around;
  width: 100px;
}
.icon {
  color : #2979FF;
}
</style>
