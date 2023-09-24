const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/    // Formato fecha
const match = regexData.exec('2018-04-20')      // Valida si comple con el formato
console.table(match)