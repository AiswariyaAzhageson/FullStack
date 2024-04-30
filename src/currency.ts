class CurrencyConverter {
    private exchangeRate: number;

    constructor(exchangeRate: number) {
        this.exchangeRate = exchangeRate;
    }

    convert(amount: number): number {
        return amount * this.exchangeRate;
    }
}

// Example usage
const exchangeRateUSDToEUR = 0.85; // 1 USD = 0.85 EUR
const converter = new CurrencyConverter(exchangeRateUSDToEUR);

const amountInUSD = 100;
const amountInEUR = converter.convert(amountInUSD);

console.log(`${amountInUSD} USD is equal to ${amountInEUR} EUR.`);
