import React, { useEffect, useState } from 'react'
import '../styles/coinTable.css'

export const CryptoPage = () => {

    const [dataCoins, setDataCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchCoin, setSearchCoin] = useState('');
    useEffect(() => {
        /*  setIsLoading(true);
         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
             .then(res => res.json())
             .then(data => {
                 setDataCoins(data);
                 setIsLoading(false)
                 console.log(data)
                 localStorage.setItem('crypto', JSON.stringify(data));
             })
             .catch(error => {
                 console.log(error)
             }) */
        setDataCoins(JSON.parse(localStorage.getItem('crypto')));
        console.log(JSON.parse(localStorage.getItem('crypto')))
    }, [])


    const handleSearch = (e) => {
        setSearchCoin(e.target.value);
    }

    const filteredCoins = dataCoins.filter((coins) => {
        return coins.name.toLowerCase().includes(searchCoin.toLowerCase());
    })

    return (
        <>

            <div className='cryptoSearch'>
                <h1 className='cryptoSearch__title'>CryptoPage</h1>
                <input
                    type="text"
                    placeholder='Bitcoin...'
                    onChange={handleSearch}
                />
            </div>


            {
                filteredCoins.length === 0 &&
                <h2>There's Nothing</h2>
            }


            {
                filteredCoins.length > 0 &&
                <div className="table-container">
                    {
                        isLoading && <h1>Cargando</h1>
                    }
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Crypto Name</th>
                                <th>Symbol</th>
                                <th>Price</th>
                                <th>Market Cap</th>
                                <th>24h % Var</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                filteredCoins.map((coins) => (
                                    <tr key={coins.id}>
                                        <td>
                                            <img className='table__img' src={coins.image} alt={coins.name} />
                                        </td>
                                        <td>{coins.name}</td>
                                        <td>{coins.symbol.toUpperCase()}</td>
                                        <td>{'$ ' + coins.current_price.toLocaleString()}</td>
                                        <td>{'$ ' + coins.market_cap.toLocaleString()}</td>
                                        {
                                            coins.price_change_percentage_24h > 0 ?
                                                <td className='table-font-green'>{coins.price_change_percentage_24h.toFixed(2)}%</td>
                                                :
                                                <td className='table-font-red'>{coins.price_change_percentage_24h.toFixed(2)}%</td>
                                        }
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            }

        </>
    )
}
