import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import allApiFunctions from "@/API/valueService";
import { sortCurrenciesByDateUp } from "@/helpers/copyInfoAboutCurrence";

export const useValueStore = defineStore('valuesStore', () => {
  const allKeysOfCurrencies = ref([]);
  const allValuesOfCurrencies = ref({});
  const allInfoAboutValues = ref([]);

  const arrayReadyAssembleObjectWithCurrencies = ref(JSON.parse(localStorage.getItem('arrayReadyAssembleObjectWithCurrencies')) || []);
  const hasDataAlreadyBeenDownloaded = ref(JSON.parse(localStorage.getItem('hasDataAlreadyBeenDownloaded')) || false);
  const isCurrenciesLoading = ref(false);
  const isCurrencyLoading = ref(false);

  const lastUpdateAll = ref(new Date(JSON.parse(localStorage.getItem('lastUpdateAll')) || new Date()));

  const saveToLocalStorageCurrencies = () => {
    localStorage.setItem('arrayReadyAssembleObjectWithCurrencies', JSON.stringify(arrayReadyAssembleObjectWithCurrencies.value));
    localStorage.setItem('lastUpdateAll', JSON.stringify(lastUpdateAll.value));
    localStorage.setItem('hasDataAlreadyBeenDownloaded', JSON.stringify(hasDataAlreadyBeenDownloaded.value));
  };

  const getAllValuesOfCurrencies = async () => {
    try {
      const response = await allApiFunctions.getAllLatestValueOfCurrencies();
      allValuesOfCurrencies.value = response.data;
      console.log('Price ', allValuesOfCurrencies.value);
    } catch (error) {
      console.error('Error fetching all values:', error);
    }
  };

  const getAllInfoOfCurrencies = async () => {
    try {
      const response = await allApiFunctions.getAllInfoAboutValuesOfCurrencies();
      allInfoAboutValues.value = response.data;
      console.log('Info ', allInfoAboutValues.value);
    } catch (error) {
      console.error('Error fetching all info about values:', error);
    }
  };

  const buildFullArrayOfCurrencies = async () => {
    isCurrenciesLoading.value = true;

    await getAllValuesOfCurrencies();
    await getAllInfoOfCurrencies();

    allKeysOfCurrencies.value = Object.keys(allValuesOfCurrencies.value);

    arrayReadyAssembleObjectWithCurrencies.value = allKeysOfCurrencies.value.map((currencyCode) => {
      const info = allInfoAboutValues.value[currencyCode];
      const value = allValuesOfCurrencies.value[currencyCode];

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
    })

    console.log('Полный объект =>  ', arrayReadyAssembleObjectWithCurrencies.value);
    lastUpdateAll.value = new Date();
    isCurrenciesLoading.value = false;
    hasDataAlreadyBeenDownloaded.value = true;
    saveToLocalStorageCurrencies();
  };

  const updateConcreteCurrency = async (name) => {
    isCurrencyLoading.value = true;
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
      saveToLocalStorageCurrencies();
    } catch (error) {
      console.error(`Ошибка обновления ${name}:`, error);
    }
    isCurrencyLoading.value = false;
  };

  const updateAllCurrencies = async () => {
    isCurrencyLoading.value = true;
    try {
      const response = await allApiFunctions.getAllLatestValueOfCurrencies();
      const newData = response.data;

      arrayReadyAssembleObjectWithCurrencies.value = arrayReadyAssembleObjectWithCurrencies.value.map(currency => {
        return {
          ...currency,
          value: newData[currency.name],
          lastUpdate: new Date().toISOString()
        };
      });

      lastUpdateAll.value = new Date();

      console.log('Обнолвенные валюты => ', arrayReadyAssembleObjectWithCurrencies.value);
      saveToLocalStorageCurrencies();
    } catch (error) {
      console.error('Ошибка обнолвения:', error);
      throw error;
    } finally {
      isCurrencyLoading.value = false;
    }
  };

  const selectCurrenciesInSettings = (name, status) => {
    arrayReadyAssembleObjectWithCurrencies.value = arrayReadyAssembleObjectWithCurrencies.value.map(currency => {
      if (currency.name === name) {
        return {
          ...currency,
          isActive: status
        };
      }
      return currency;
    });
    console.log('Массив после настроек => ', arrayReadyAssembleObjectWithCurrencies.value);
    saveToLocalStorageCurrencies();
  };

  watch(arrayReadyAssembleObjectWithCurrencies, () => {
    saveToLocalStorageCurrencies();
  }, { deep: true });

  onMounted(() => {
    if (!hasDataAlreadyBeenDownloaded.value || arrayReadyAssembleObjectWithCurrencies.value.length === 0) {
      buildFullArrayOfCurrencies();
    }
  });

  return {
    allKeysOfCurrencies,
    allValuesOfCurrencies,
    getAllValuesOfCurrencies,
    getAllInfoOfCurrencies,
    allInfoAboutValues,
    isCurrenciesLoading,
    arrayReadyAssembleObjectWithCurrencies,
    buildFullArrayOfCurrencies,
    updateConcreteCurrency,
    isCurrencyLoading,
    lastUpdateAll,
    selectCurrenciesInSettings,
    updateAllCurrencies
  };
});
