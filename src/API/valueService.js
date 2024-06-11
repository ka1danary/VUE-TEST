import axios from 'axios';

const API_KEY = 'fca_live_u8XgZNsdhaDUHXJiAZg38sEXPltUFz0i3LkSup58';
const BASE_URL = 'https://api.freecurrencyapi.com/v1';

const URL_LATEST = `${BASE_URL}/latest?apikey=${API_KEY}`;
const URL_CURRENCIES = `${BASE_URL}/currencies?apikey=${API_KEY}`;

const allApiFunctions = {

  getAllLatestValueOfCurrencies() {
    return axios.get(URL_LATEST)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        throw error; 
      });
  },

  getAllInfoAboutValuesOfCurrencies() {
    return axios.get(URL_CURRENCIES)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error)
        throw error
    })
  }
};

export default allApiFunctions