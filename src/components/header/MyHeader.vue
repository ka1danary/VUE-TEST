<template>
  <div class="header">
    <div class="header__container">
      <div class="header__left__menu">
        <router-link to="/">
          <div @click="headerStore.setStateTrueForHome">
            <my-route-button typeIcon="home" :status="headerStore.homeIcon" />
          </div>
        </router-link>
        
        <router-link to="/settings">
          <my-route-button
            typeIcon="settings"
            :status="headerStore.settingsIcon"
            @click="headerStore.setStateTrueForSettings"
          />
        </router-link>
      
      </div>
      <div class="header__right__menu" >
        <last-update-field :date="valueStore.lastUpdateAll" />
        <div @click="helperReload">
          <my-button-reload />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useValueStore } from "@/store/ValuesStore";
import { useHeaderStore } from "@/store/HeaderStore";
import { computed } from "vue";
import MyRouteButton from "../UI/buttons/MyRouteButton.vue";
import LastUpdateField from "../UI/LastUpdateField.vue";

const headerStore = useHeaderStore();
const valueStore = useValueStore();

const helperReload = async () => {
  await valueStore.buildFullArrayOfCurrience();

  console.log('Update');
}


</script>

<style scoped>
.header {
  width: 100vw;
  height: 60px;
  background: #0096d5;
  user-select: none;
}
.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__left__menu {
  display: flex;
  justify-content: space-around;
  width: 150px;
  margin-left: 20px;
}

.header__right__menu {
  display: flex;
  justify-content: right;
  width: 350px;
  margin-right: 10px;
}
</style>
