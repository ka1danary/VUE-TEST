<template>
  <div class="page__container">
    <div class="page__content">
      <div class="title_page">
        <div class="title">Валюта</div>
        <div>
          <custom-sort-container/>
        </div>
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
import CustomSortContainer from '@/components/UI/CustomSortContainer.vue'
</script>
<style scoped></style>
