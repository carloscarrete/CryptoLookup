import React, { useEffect, useState } from 'react'
import '../styles/coinTable.css'
import '../styles/modal.css'
import { CryptoSearch } from '../components/CryptoSearch';
import { TableCrypto } from '../components/TableCrypto';
import { CryptoModalPage } from './CryptoModalPage';


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
        setCurrentCrypto(e);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>

            < CryptoSearch handleSearch={handleSearch} filteredCoins={filteredCoins} />
            {
                filteredCoins &&
                (
                    < TableCrypto filteredCoins={filteredCoins} isLoading={isLoading} handleOpenModal={handleOpenModal} />
                )
            }


            {modalOpen && (
                <CryptoModalPage currentCrypto={currentCrypto} handleCloseModal={handleCloseModal} />
            )}
        </>
    )
}
