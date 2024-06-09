import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import allApiFunctions from "@/API/valueService";

export const useValueStore = defineStore('valuesStore', () => {
  let allKeys = ref([]);
  let allValues = ref({});
  let allInfoAboutValues = ref([]);
  let isValLoading = ref(false);

  const getAllValues = async () => {
    try {
      allValues.value = await allApiFunctions.getAllLatestValueOfCurrencies()
        .then((responce) => { return responce })
        .catch((error) => { throw error })
        
      console.log('Price ', allValues.value);
    } catch (error) {
      console.error('Error fetching all values:', error);
    }
  };

  const getAllKeysList = () => {
    allKeys.value = Object.keys(allValues.value);
    console.log('Keys ', allKeys.value);
  };

  const getAllInfoAboutValues = async () => {
    try {
      isValLoading.value = false;
      const response = await allApiFunctions.getAllInfoAboutValuesOfCurrencies()
        .then((response) => { return response })
        .catch((error) => { throw error })

      allInfoAboutValues.value = response.data;
      console.log('info ', allInfoAboutValues.value);
      isValLoading.value = true;
    } catch (error) {
      console.error('Error fetching all info about values:', error);
    }
  };

  watch(allValues, async (newVal, oldVal) => {
    if (Object.keys(newVal).length !== 0) {
      await getAllKeysList();
      await getAllInfoAboutValues();
      console.log('Observer work');
    }
  });

  
  return {
    allKeys,
    allValues,
    getAllValues,
    getAllInfoAboutValues,
    allInfoAboutValues,
    isValLoading
  };
});
