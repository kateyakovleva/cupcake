export interface ICurrencyInfo {
    rates: ICurrencies;
    base: string;
    timestamp: number;
    date: string;
}

export type ICurrencies = {
    [key in ICurrencyType]: number;
};

export type ICurrencyType = 'RUB' | 'USD' | 'EUR';