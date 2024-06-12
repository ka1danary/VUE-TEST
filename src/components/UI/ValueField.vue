<template>
  <div>
    <div class="field">
      <div class="conainer__field" v-if="!loading">
        <div class="item__name">
          <div class="icon">
            <strong> {{ icon }}</strong>
          </div>
          <div class="text">
            <strong>{{ name }}</strong>
          </div>
        </div>
        <div class="item">{{ value }}</div>
        <div class="item">{{ date }}</div>
        <div class="item right__field_btn">
          <img
            src="../../icons/reload-icons/update-val-off.svg"
            alt="reload"
            class="button"
            @click="helperUpdate(name)"
          />
          <img
            src="../../icons/copy/content-copy-off.svg"
            alt="copy"
            class="button"
            @click="helperCopy"
            v-if="!copy"
          />
          <img src="../../icons/copy/check.svg" alt="copyCheck" v-else />
        </div>
      </div>
      <div v-else class="loader">
        <my-loader />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useValueStore } from "@/store/ValuesStore";
import MyLoader from "./MyLoader.vue";
import { copyCurrence } from "@/helpers/copyInfoAboutCurrence";

const props = defineProps({
  icon: {
    type: String,
    default: "$",
  },
  name: {
    type: String,
    default: "USD",
  },
  value: {
    type: Number,
    default: 1,
  },
  date: {
    type: String,
    default: new Date(),
  },
});

const store = useValueStore();
const loading = ref(false);

const copy = ref(false);

const helperUpdate = async (name) => {
  loading.value = true;
  await store.updateConcreteCurrency(name);
  console.log("work");
  loading.value = false;
};

const helperCopy = () => {
  copyCurrence({
    code: props.code,
    name: props.name,
    currenceValue: props.value,
    lastUpdateValue: props.date,
  });

  copy.value = true;

  setTimeout(() => {
    copy.value = false;
  }, 2000);
};
</script>

<style scoped>
.field {
  background: white;
  height: 48px;
  color: #121212;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  padding: 0 30px;
  margin: 10px 0;
}

.conainer__field {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  height: 48px;
}
img {
  cursor: pointer;
}

.right__field_btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  width: 100px;
}

.name {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  color: #2979ff;
  margin-right: 10px;
}

.text {
  display: flex;
  align-items: center;
}

.button {
  transition: background-color 0.2s ease;
  border-radius: 10px;
}

.button:hover {
  background-color: #eaeff1;
  border-radius: 10px;
}

.item__name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
}
</style>
