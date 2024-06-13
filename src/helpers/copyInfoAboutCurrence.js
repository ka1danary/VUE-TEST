
export const copyCurrence = async (currenceObject) => {
    const convertToJson = JSON.stringify(currenceObject)
    await navigator.clipboard.writeText(convertToJson)
        .then((copyText) => {
            return copyText
        })
        .catch((error) => {
            throw error
        })
}

export const buildCurrenceObject = (code, name, value, lastUpdate) => {
    const templateObject = {

        code: code,
        name: name,
        value: value,
        lastUpdate: lastUpdate
    }
    return templateObject
}

export const parseDate = (date) => {
    const dateObject = new Date(date);
    const day = dateObject.getDate().toString().padStart(2, '0');  
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');  
    const year = dateObject.getFullYear();

    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');

    return {
        dateObject,
        day,
        month,
        year,
        hours,
        minutes
    }
}

export const sortCurrenciesByDateUp = (currenciesArray) => {
    return currenciesArray.sort((a, b) => a.value > b.value ? 1 : -1)
}

export const sortCurrenciesByDateDown = (currenciesArray) => {
    return currenciesArray.sort((a, b) => a.value < b.value ? 1 : -1)
}

export const calculateDate = (dateString, minutes) => {
    
    const date = new Date(dateString);
    
    date.setMinutes(date.getMinutes() + minutes);
    return date.toISOString();
}
  