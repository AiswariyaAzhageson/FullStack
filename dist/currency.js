"use strict";
class CurrencyConverter {
    constructor(exchangeRate) {
        this.exchangeRate = exchangeRate;
    }
    convert(amount) {
        return amount * this.exchangeRate;
    }
}
const exchangeRateUSDToEUR = 0.85;
const converter = new CurrencyConverter(exchangeRateUSDToEUR);
const amountInUSD = 100;
const amountInEUR = converter.convert(amountInUSD);
console.log(`${amountInUSD} USD is equal to ${amountInEUR} EUR.`);
//# sourceMappingURL=currency.js.map