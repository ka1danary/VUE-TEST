<template>
  <div class="page__container">
    <div class="page__content">
      <div class="title_page">
        <div class="title">Настройки</div>
      </div>
      <div class="select__cur__container">
        <div  class="text__block" style="margin-right: 15px">
          Выберите базовую валюту
        </div>
        <div>
          <my-selected-base-currency/>
        </div>
      </div>
      <div>
        <div class="text__block">
          Вы можете добавить или отключить определенные валюты для отслеживания
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
// import MyCustomTypeButton from "@/components/UI/buttons/MyCustomTypeButton.vue";
// import { ref } from "vue";
import { useHeaderStore } from "@/store/HeaderStore";
import MySelectedBaseCurrency from '@/components/MySelectBaseCurrency.vue'

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

.select__cur__container{
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  
  
  border-bottom: 1px solid #d2dbde;
}
</style>
