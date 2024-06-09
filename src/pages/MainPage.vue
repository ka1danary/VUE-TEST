<template>
  <div class="page_container">
    <div>
      <div class="title_page">
        <div class="title">Валюта</div>
        <div>Сортировка</div>
      </div>
      <div class="page__content">
        <value-main-table />
      </div>
    </div>
  </div>
</template>
<script setup>
import ValueMainTable from "@/components/ValMainTable.vue";
import "./pages.css";
</script>
<style scoped></style>
