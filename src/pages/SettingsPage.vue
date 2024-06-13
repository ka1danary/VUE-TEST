<template>
  <div class="page__container">
    <div class="page__content">
      <div class="title_page">
        <div class="title">Настройки</div>
      </div>
      <div>
        <div class="text__block">
          Вы можете добавить или отключить определенные валюты
        </div>
        <div style="margin-bottom: 30px">
          <settings-currencies-select />
        </div>
      </div>
      <div>
        <div>
          <settings-time />
        </div>
        <!-- <div class="btns">
          <router-link to="/" style="text-decoration: none;">
            <my-custom-type-button widthButton="200px" typeButton="reject" @click="store.setStateTrueForHome"/>
          </router-link>
          <my-custom-type-button widthButton="200px" />
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import "./pages.css";
import SettingsTime from "@/components/SettingsTime.vue";
import SettingsCurrenciesSelect from "@/components/SettingsCurrenciesSelect.vue";
import MyCustomTypeButton from "@/components/UI/buttons/MyCustomTypeButton.vue";
import { ref } from "vue";
import { useHeaderStore } from "@/store/HeaderStore";

name: "settings-page";

const store = useHeaderStore()

</script>
<style scoped>
.text__block {
  height: 80px;
  display: flex;
  align-items: center;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
}
</style>
