import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import allApiFunctions from "@/API/valueService";

export const useValueStore = defineStore('valuesStore', () => {
  let allKeysOfCurrencies = ref([]);
  let allValuesOfCurrecies = ref({});
  let allInfoAboutValues = ref([]);

  let arrayReadyAssembleObjectWithCurrencies = ref([]);
  let isCurrencuesLoading = ref(false);


  const getAllValuesOfCurrecies = async () => {
    try {
      const response = await allApiFunctions.getAllLatestValueOfCurrencies();
      allValuesOfCurrecies.value = response.data;
      console.log('Price ', allValuesOfCurrecies.value);
    } catch (error) {
      console.error('Error fetching all values:', error);
    }
  };

  const getAllInfoOfCurrencies = async () => {
    try {
      const response = await allApiFunctions.getAllInfoAboutValuesOfCurrencies();
      allInfoAboutValues.value = response.data;
      console.log('info ', allInfoAboutValues.value);
    } catch (error) {
      console.error('Error fetching all info about values:', error);
    }
  };

  const buildFullArrayOfCurrience = async () => {
    isCurrencuesLoading.value = true;

    await getAllValuesOfCurrecies();
    await getAllInfoOfCurrencies();

    allKeysOfCurrencies.value = Object.keys(allValuesOfCurrecies.value);

    arrayReadyAssembleObjectWithCurrencies.value = allKeysOfCurrencies.value.map((currencyCode) => {
      const info = allInfoAboutValues.value[currencyCode];
      const value = allValuesOfCurrecies.value[currencyCode];


      if (info && value) {
        return {
          code: info.symbol,
          name: currencyCode,
          value: value,
          lastUpdate: new Date().toISOString()
        };
      } else {
        console.warn(`Отсутствуют данные для валюты: ${currencyCode}`);
        return null;
      }
    }).filter(currency => currency !== null); // Удаление null значений

    console.log('Final Array: ', arrayReadyAssembleObjectWithCurrencies.value);
    isCurrencuesLoading.value = false;
  };

  onMounted(() => {
    buildFullArrayOfCurrience();
  });

  return {
    allKeysOfCurrencies,
    allValuesOfCurrecies,
    getAllValuesOfCurrecies,
    getAllInfoOfCurrencies,
    allInfoAboutValues,
    isCurrencuesLoading,
    arrayReadyAssembleObjectWithCurrencies,
    buildFullArrayOfCurrience
  };
});
