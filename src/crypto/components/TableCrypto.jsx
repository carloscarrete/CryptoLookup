import React from 'react'

export const TableCrypto = ({filteredCoins , isLoading, handleOpenModal}) => {
    return (
        <>
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
                                <th id="table__market">Market Cap</th>
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
                                        <td id='table__market--td'>{'$ ' + coins.market_cap.toLocaleString()}</td>
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
