import React, {useState, useEffect} from 'react';
import axios from "axios";
import Coin from './Coin';
import '../../css/finance.css';
import {currency_data as DataCurency} from './CurrencyData'
import {Dropdown} from "react-bootstrap";


function Finance(props) {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [currentCurrency, setCurrentCurrency] = useState('USD');
    const [currentCurrencySymbol, setCurrentCurrencySymbol] = useState('$');

    useEffect(() => {
        axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`
        )
            .then(res => {
                setCoins(res.data);
            })
            .catch(error => console.log(error));
    }, [currentCurrency]);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    console.log(currentCurrency)
    return (
        <>
            <div className='finance'>

                <div className='coin-search'>

                    <form>
                        <input
                            className='coin-input'
                            type='text'
                            onChange={handleChange}
                            placeholder='Search'
                        />
                    </form>
                </div>

                <div className="currency-converter d-flex justify-content-between">

                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {currentCurrency}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {DataCurency.map((currency) => {
                                return (

                                    <Dropdown.Item href="" onClick={() => {
                                        setCurrentCurrency(currency.currency_name)
                                        setCurrentCurrencySymbol(currency.currency_symbol)
                                    }}>
                                        <p><span>{currency.currency_name}</span>{currency.currency_country}</p>
                                    </Dropdown.Item>

                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>

                </div>

                <div className="table-header">
                    <div className='table-coin d-flex'>
                        <p>Coin</p>
                        <p>Symbol</p>
                    </div>
                    <div className='table-coin-data d-flex'>
                        <p>Price</p>
                        <p className="table-coin-volume">Volume</p>
                        <p>Price Change</p>
                        <p>Mkt Cap</p>

                    </div>
                </div>

                {filteredCoins.map(coin => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                            currency_symbol={currentCurrencySymbol}

                        />
                    );
                })}
            </div>

        </>
    );
}

export default Finance;