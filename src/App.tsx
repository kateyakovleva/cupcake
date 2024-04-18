import React, {useEffect, useState} from 'react';
import './app.css';
import Table from "./components/Table";
import {ICurrencies} from "./types/type";
import {
    getFirstMarket,
    getFirstMarketPoll,
    getSecondMarket,
    getSecondMarketPoll,
    getThirdMarket,
    getThirdMarketPoll
} from "./api/api";


function App() {
    const [first, setFirst] = useState<ICurrencies>();
    const [second, setSecond] = useState<ICurrencies>();
    const [third, setThird] = useState<ICurrencies>();

    const getFirstPoll = async () => {
        const response = await getFirstMarketPoll()
        setFirst(response.rates)
        getFirstPoll().then()
    }

    const getSecondPoll = async () => {
        const response = await getSecondMarketPoll()
        setSecond(response.rates)
        getSecondPoll().then()
    }

    const getThirdPoll = async () => {
        const response = await getThirdMarketPoll()
        setThird(response.rates)
        getThirdPoll().then()
    }

    useEffect(() => {
        getFirstMarket().then(response => setFirst(response.rates));
        getSecondMarket().then(response => setSecond(response.rates));
        getThirdMarket().then(response => setThird(response.rates));

        getFirstPoll().then();
        getSecondPoll().then();
        getThirdPoll().then();
    }, [])

    return (
        <div className="app">
            <div className='app_container'>
                <Table
                    markets={[first, second, third]}
                />
            </div>
        </div>
    );
}

export default App;
