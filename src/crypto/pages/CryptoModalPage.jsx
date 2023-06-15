import React from 'react'

export const CryptoModalPage = ({currentCrypto, handleCloseModal}) => {
    return (
        <div className="modal-container">

            <div className='modal-content'>
                <img className='modal-img' src={currentCrypto.image} alt={currentCrypto.id} />
                <div className='modal-pre-info'>
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
