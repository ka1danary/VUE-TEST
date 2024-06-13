import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import allApiFunctions from "@/API/valueService";
import { sortCurrenciesByDateUp } from "@/helpers/copyInfoAboutCurrence";

export const useValueStore = defineStore('valuesStore', () => {
  let allKeysOfCurrencies = ref([]);
  let allValuesOfCurrecies = ref({});
  let allInfoAboutValues = ref([]);

  let arrayReadyAssembleObjectWithCurrencies = ref([]);
  let isCurrencuesLoading = ref(false);
  let isCurrencyLoading = ref(false)

  let lastUpdateAll = ref(new Date())

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
          lastUpdate: new Date().toISOString(),
          isActive: true
        };
      } else {
        console.warn(`Отсутствуют данные для валюты: ${currencyCode}`);
        return null;
      }
    }).filter(currency => currency !== null);

    console.log('Final Array: ', arrayReadyAssembleObjectWithCurrencies.value);
    lastUpdateAll.value = new Date()
    isCurrencuesLoading.value = false;
  };

  const updateConcreteCurrency = async (name) => {
    isCurrencyLoading.value = true
    try {
      const response = await allApiFunctions.getInfoValueOfSpecificCurrency(name);
      const newValue = response.data[name];

      arrayReadyAssembleObjectWithCurrencies.value = arrayReadyAssembleObjectWithCurrencies.value.map(currency => {
        if (currency.name === name) {
          return {
            ...currency,
            value: newValue,
            lastUpdate: new Date().toISOString()
          };
        }
        return currency;
      });

      console.log(`Updated currency ${name}: `, newValue);
    } catch (error) {
      console.error(`Error updating currency ${name}:`, error);
    }
    isCurrencyLoading.value = false
  };

  const selectCurrenciesInSettings = (name, status) => {
    arrayReadyAssembleObjectWithCurrencies.value = arrayReadyAssembleObjectWithCurrencies.value.map(currency => {
      if(currency.name === name) {
        return {
          ...currency,
          isActive: status
        };
      }
      return currency;
    });
    console.log('Массив после настроек ', arrayReadyAssembleObjectWithCurrencies.value);
  }
  


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
    buildFullArrayOfCurrience,
    updateConcreteCurrency,
    isCurrencyLoading,
    lastUpdateAll,
    selectCurrenciesInSettings
  };
});
