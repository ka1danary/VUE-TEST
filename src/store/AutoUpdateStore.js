import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useValueStore } from "./ValuesStore";

export const useAutoUpdateStore = defineStore('alertStore', () => {
    const frequencyUpdateValue = ref(30);
    const autoUpdateMode = ref(true);
    const alertStatus = ref(false);
    const intervalId = ref(null);

    const currenceStore = useValueStore();

    // помогает вызвать функцию обновления данных
    const autoUpdateHelper = () => {
        currenceStore.buildFullArrayOfCurrience();
    };

    // начало автом обновления 
    const startAutoUpdate = () => {
        if (intervalId.value) {
            clearInterval(intervalId.value);
        }


        if (autoUpdateMode.value && frequencyUpdateValue.value > 0) {
            intervalId.value = setInterval(autoUpdateHelper, frequencyUpdateValue.value * 60000);
        }
    };

    const stopAutoUpdate = () => {
        if (intervalId.value) {
            clearInterval(intervalId.value);
            intervalId.value = null;
        }
    };

    watch([autoUpdateMode, frequencyUpdateValue], () => {
        if (autoUpdateMode.value) {
            startAutoUpdate();
        } else {
            stopAutoUpdate();
        }
    }, { immediate: true });

    return {
        frequencyUpdateValue,
        alertStatus,
        autoUpdateMode,
        startAutoUpdate,
        stopAutoUpdate,
    };
});
