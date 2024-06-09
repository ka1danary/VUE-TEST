<template>
  <div class="btn__container">
    <div v-if="status">
      <img src="../../../icons/alert-icons/notifications-on.svg" alt="" />
    </div>
    <div v-else>
      <img src="../../../icons/alert-icons/notifications-off.svg" alt="" />
    </div>
  </div>
</template>
<script>
import "./btn.style.css";
export default {
  name: "my-button-alert",
};
</script>
<style lang="css" scoped></style>
