import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useValueStore } from "./ValuesStore";

export const useAutoUpdateStore = defineStore('alertStore', () => {

    const frequencyUpdateValue = ref(parseInt(localStorage.getItem('frequencyUpdateValue')) || 30);
    const autoUpdateMode = ref(localStorage.getItem('autoUpdateMode') === 'true');
    const alertStatus = ref(false);
    const intervalId = ref(null);

    const currenceStore = useValueStore();

    // сохраняем в localStorage
    const saveToLocalStorage = () => {
        localStorage.setItem('frequencyUpdateValue', frequencyUpdateValue.value.toString());
        localStorage.setItem('autoUpdateMode', autoUpdateMode.value.toString());
    };

    // помогает вызвать функцию обновления данных
    const autoUpdateHelper = () => {
        currenceStore.updateAllCurrencies();
        alertStatus.value = true;
        setTimeout(() => {
            alertStatus.value = false;
        }, 10000);
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
        saveToLocalStorage();
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
