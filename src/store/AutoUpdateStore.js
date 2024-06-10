import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";

export const useAutoUpdateStore = defineStore('alertStore', () => {

    const frequencyUpdateValue = ref(30)
    const autoUpdateMode = ref(true)
    const alertStatus = ref(false)

    const autoUpdateCurrenciesValues = () => {

        if (alert) {
            setTimeout(() => {

            }, frequencyUpdateValue)
        }
        else {
            console.log('Настройка автоматического обновления отключена пользователем')
        }
    }

    return {
        autoUpdateCurrenciesValues,
        frequencyUpdateValue,
        alertStatus
    }

})
