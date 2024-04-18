import {ICurrencyInfo} from "../types/type";

export const getFirstMarket = async (): Promise<ICurrencyInfo> => {
    const response = await fetch('http://localhost:3000/api/v1/first')
    return await response.json()
}

export const getFirstMarketPoll = async (): Promise<ICurrencyInfo> => {
    const response = await fetch('http://localhost:3000/api/v1/first/poll')
    return await response.json()
}

export const getSecondMarket = async (): Promise<ICurrencyInfo> => {
    const response = await fetch('http://localhost:3000/api/v1/second')
    return await response.json()
}

export const getSecondMarketPoll = async (): Promise<ICurrencyInfo> => {
    const response = await fetch('http://localhost:3000/api/v1/second/poll')
    return await response.json()
}

export const getThirdMarket = async (): Promise<ICurrencyInfo> => {
    const response = await fetch('http://localhost:3000/api/v1/third')
    return await response.json()
}

export const getThirdMarketPoll = async (): Promise<ICurrencyInfo> => {
    const response = await fetch('http://localhost:3000/api/v1/third/poll')
    return await response.json()
}