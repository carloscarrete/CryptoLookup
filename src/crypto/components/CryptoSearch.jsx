import React from 'react'

export const CryptoSearch = ({ handleSearch, filteredCoins }) => {
    return (
        <>
            <div className='cryptoSearch'>
                <h1 className='cryptoSearch__title' style={{ color: '#D4D4D4' }}>CryptoLookup</h1>
                <input
                    type="text"
                    placeholder='Bitcoin...'
                    onChange={handleSearch}
                />
            </div>
            {
                filteredCoins.length === 0 &&
                <h2 style={{
                    color:'#e04545'
                }}>No matches found for the cryptocurrency search.</h2>
            }
        </>
    )
}
