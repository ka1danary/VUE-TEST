<template>
  <div class="last__update__field">
    <div class="update__title">Последнее обновление:</div>
    <div class="last__update_field__time">22.02.2024 15:00</div>
  </div>
</template>
<script>

export default {
  name: "last-update-field",
};

</script>
<style scoped>
.last__update__field {
  display: flex;
  align-items: center;
  
}
.update__title {
  color: white;
  font-weight: 600;
  width: 200px;
  font-size: 16px;
}
.last__update_field__time {
  background: #f2fafe;
  font-weight: 600;
  border-radius: 5px;
  padding: 10px;
  width: 160px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: all;
}
.last__update_field__time::selection {
  background-color: #CFE0E9;
}
</style>
