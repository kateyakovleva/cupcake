import React from 'react';
import '../app.css';
import {ICurrencies, ICurrencyType} from "../types/type";


interface IProps {
    markets: (ICurrencies | undefined)[];
}

const Table = ({markets}: IProps) => {

    const rate = markets.find((rate) => rate) || {}

    return (
        <div className='table'>
            <table>
                <thead>
                <tr>
                    <th>Pair name/market</th>
                    <th>First</th>
                    <th>Second</th>
                    <th>Third</th>
                </tr>
                </thead>
                <tbody>
                {   //@ts-ignore
                    Object.keys(rate).map((currencyCode: ICurrencyType) => {
                        return (
                            <tr key={currencyCode}>
                                <td>{currencyCode}/CUPCAKE</td>
                                <td>{markets[0] ? markets[0][currencyCode] : ''}</td>
                                <td>{markets[1] ? markets[1][currencyCode] : ''}</td>
                                <td>{markets[2] ? markets[2][currencyCode] : ''}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default Table;