
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

export const buildCurrenceObject = (id, code, name, value, lastUpdate) => {
    const templateObject = {
        id : id, 
        code : code,
        name : name,
        value : value,
        lastUpdate : lastUpdate
    }
    return templateObject
}

