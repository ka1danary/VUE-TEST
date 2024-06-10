import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";

export const useAlertStore = defineStore('alertStore', () => {

    const frequencyUpdateValue = ref(30)
    

    const autoUpdateCurrenciesValues = () => {
        setTimeout(() => {
            
        }, frequencyUpdateValue)
    }

    return {

    }

})
