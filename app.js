// This is my function that sums two numbers
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // 1. Convertimos el valor a Euros (Dólar / 1.07)
    let valueInEuro = valueInDollar / 1.07;
    // 2. Convertimos de Euro a Yen (Euro * 156.5)
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el resultado
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // 1. Convertimos el valor a Euros (Yen / 156.5)
    let valueInEuro = valueInYen / 156.5;
    // 2. Convertimos de Euro a Libra (Euro * 0.87)
    let valueInPound = valueInEuro * 0.87;
    // Retornamos el resultado
    return valueInPound;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound }