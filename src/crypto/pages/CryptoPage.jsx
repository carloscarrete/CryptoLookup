import React, { useEffect, useState } from 'react'
import '../styles/coinTable.css'
import '../styles/modal.css'


export const CryptoPage = () => {

    const [dataCoins, setDataCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchCoin, setSearchCoin] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [currentCrypto, setCurrentCrypto] = useState();


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

    const handleOpenModal = (e) => {
        console.log(e)
        setModalOpen(true);
        setCurrentCrypto(e);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

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
                                    <tr key={coins.id} onClick={() => handleOpenModal(coins)}>
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

            {modalOpen && (
                <div className="modal-container">
                    {/*  <div className="modal-content">
                            <h2>Modal</h2>
                            <p>Contenido del modal...</p>
                            <button onClick={handleCloseModal}>Cerrar Modal</button>
                        </div> */}
                    <div className='modal-content'>
                        <img className='modal-img' src={currentCrypto.image} alt={currentCrypto.id} />
                        <div className='modal-pre-info'>
                            <div className='modal-info'>
                                <h5>Last Updated: </h5>
                                <h5 className='xd'>{currentCrypto.last_updated}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Market Capitalization: </h5>
                                <h5 className='xd'>{currentCrypto.market_cap.toLocaleString()}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Circulating Supply: </h5>
                                <h5 className='xd'>{currentCrypto.circulating_supply.toLocaleString()}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Current Price: </h5>
                                <h5 className='xd'>{currentCrypto.current_price.toLocaleString()}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Fully Diluted Valuation: </h5>
                                <h5 className='xd'>{currentCrypto.fully_diluted_valuation.toLocaleString()}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>24h High: </h5>
                                <h5 className='xd'>{currentCrypto.high_24h.toLocaleString()}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>24h Low: </h5>
                                <h5 className='xd'>{currentCrypto.low_24h.toLocaleString()}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Market Cap Change in 24h: </h5>
                                <h5 className='xd'>{currentCrypto.market_cap_change_24h.toLocaleString()}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Market Cap Change Percentage in 24h: </h5>
                                <h5 className='xd'>{currentCrypto.market_cap_change_percentage_24h}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Market Cap Rank: </h5>
                                <h5 className='xd'>{currentCrypto.market_cap_rank}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Name: </h5>
                                <h5 className='xd'>{currentCrypto.name}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Price Change in 24h: </h5>
                                <h5 className='xd'>{currentCrypto.price_change_24h.toLocaleString()}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Price Change Percentage in 24h: </h5>
                                <h5 className='xd'>{currentCrypto.price_change_percentage_24h}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Symbol: </h5>
                                <h5 className='xd'>{currentCrypto.symbol}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Total Supply: </h5>
                                <h5 className='xd'>{currentCrypto.total_supply.toLocaleString()}</h5>
                            </div>
                            <div className='modal-info'>
                                <h5>Total Volume: </h5>
                                <h5 className='xd'>{currentCrypto.total_volume.toLocaleString()}</h5>
                            </div>
                        </div>
                        <button onClick={handleCloseModal}>Cerrar Modal</button>
                    </div>

                </div>
            )}
        </>
    )
}
