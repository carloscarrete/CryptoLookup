import React, { useEffect } from 'react'
import { useState } from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { multipleWidthChart } from '../utils/screens';
import { getData, options } from '../utils/settings';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);


export const CryptoModalPage = ({ currentCrypto, handleCloseModal }) => {

    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${currentCrypto.id}/market_chart?vs_currency=usd&days=7&interval=daily`)
            .then((res) => res.json())
            .then((data) => {
                setDataChart(data.prices);
            })
            .catch((error) => {
                console.log(error);
            })

    }, []);

    const coinChart = dataChart?.map((value) => ({
        x: value[0],
        y: value[1]
    }))

    const data = getData(coinChart, currentCrypto);

    return (
        <div className="modal-container">

            <div className='modal-content'>


                <div className='model-chart'>
                    <Line options={options} data={data} width={multipleWidthChart()} />
                    {/* <Line options={options} data={data} width={350} /> */}
                    <img className='modal-img' src={currentCrypto.image} alt={currentCrypto.id} />
                </div>

                <div className='modal-pre-info'>

                    <div className='model-chart'>
                    </div>

                    <div className='modal-info'>
                        <h5>Last Updated: </h5>
                        <h5 className='modal-description'>{currentCrypto.last_updated}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Market Capitalization: </h5>
                        <h5 className='modal-description'>{currentCrypto.market_cap.toLocaleString()}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Circulating Supply: </h5>
                        <h5 className='modal-description'>{currentCrypto.circulating_supply.toLocaleString()}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Current Price: </h5>
                        <h5 className='modal-description'>{currentCrypto.current_price.toLocaleString()}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Fully Diluted Valuation: </h5>
                        <h5 className='modal-description'>{currentCrypto.fully_diluted_valuation.toLocaleString()}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>24h High: </h5>
                        <h5 className='modal-description'>{currentCrypto.high_24h.toLocaleString()}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>24h Low: </h5>
                        <h5 className='modal-description'>{currentCrypto.low_24h.toLocaleString()}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Market Cap Change in 24h: </h5>
                        <h5 className='modal-description'>{currentCrypto.market_cap_change_24h.toLocaleString()}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Market Cap Change Percentage in 24h: </h5>
                        <h5 className='modal-description'>{currentCrypto.market_cap_change_percentage_24h}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Market Cap Rank: </h5>
                        <h5 className='modal-description'>{currentCrypto.market_cap_rank}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Name: </h5>
                        <h5 className='modal-description'>{currentCrypto.name}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Price Change in 24h: </h5>
                        <h5 className='modal-description'>{currentCrypto.price_change_24h.toLocaleString()}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Price Change Percentage in 24h: </h5>
                        <h5 className='modal-description'>{currentCrypto.price_change_percentage_24h}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Symbol: </h5>
                        <h5 className='modal-description'>{currentCrypto.symbol}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Total Supply: </h5>
                        <h5 className='modal-description'>{currentCrypto.total_supply.toLocaleString()}</h5>
                    </div>
                    <div className='modal-info'>
                        <h5>Total Volume: </h5>
                        <h5 className='modal-description'>{currentCrypto.total_volume.toLocaleString()}</h5>
                    </div>
                </div>
                <button onClick={handleCloseModal}>Cerrar Modal</button>
            </div>

        </div>
    )
}
