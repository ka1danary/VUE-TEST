import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import allApiFunctions from "@/API/valueService";

export const useValueStore = defineStore('valuesStore', () => {

  let allKeysOfCurrencies = ref([]);
  let allValuesOfCurrecies = ref({});
  let allInfoAboutValues = ref([]);
  let isCurrencuesLoading = ref(false);
  

  const getAllValuesOfCurrecies = async () => {
    try {
      allValuesOfCurrecies.value = await allApiFunctions.getAllLatestValueOfCurrencies()
        .then((responce) => { return responce })
        .catch((error) => { throw error })

      console.log('Price ', allValuesOfCurrecies.value);
    } catch (error) {
      console.error('Error fetching all values:', error);
    }
  };

  const getAllKeysFromValuesOfCurrencies = () => {
    allKeysOfCurrencies.value = Object.keys(allValuesOfCurrecies.value);
    console.log('Keys ', allKeysOfCurrencies.value);
  };

  const getAllInfoOfCurrencies = async () => {
    try {
      isCurrencuesLoading.value = false;
      const response = await allApiFunctions.getAllInfoAboutValuesOfCurrencies()
        .then((response) => { return response })
        .catch((error) => { throw error })

      allInfoAboutValues.value = response.data;
      console.log('info ', allInfoAboutValues.value);
      isCurrencuesLoading.value = true;
    } catch (error) {
      console.error('Error fetching all info about values:', error);
    }
  };

  watch(allValuesOfCurrecies, async (newVal, oldVal) => {
    if (Object.keys(newVal).length !== 0) {
      await getAllKeysFromValuesOfCurrencies();
      await getAllInfoOfCurrencies();
      console.log('Observer work');
    }
  });


  return {
    allKeysOfCurrencies,
    allValuesOfCurrecies,
    getAllValuesOfCurrecies,
    getAllInfoOfCurrencies,
    allInfoAboutValues,
    isCurrencuesLoading
  };
});
