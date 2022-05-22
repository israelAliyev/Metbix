import React, {useState , useEffect} from 'react';
import currencies from '../../../products-json/currency/currencies.json'

function Currency(props) {

    const [currency_id, set_currency_id] = useState(null);

    const [currency_query, set_currency_query] = useState("");

    const app_currency = JSON.parse(localStorage.getItem("currency"))

    return (
        <>

            {/*changing currency-converter 0f products-json and selecting laguages*/}

            <li className="nav-item mt-2-5 ms-3">
                <div className="dropdown navbar-languages-currency">
                    <div
                        className="d-flex text-white mt-0 mt-2"
                        id="dropdownMenuButtonLanguagesAndCurrency"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                    <span>
                     <img width="23" src="/images/united-kingdom.png"/>{" "}
                        <span> - {app_currency ? app_currency.id : currency_id ? currency_id : "USD"}</span>
                      <span>
                        <i className="fas fa-caret-down"/>
                      </span>
                    </span>
                    </div>

                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuButtonLanguagesAndCurrency"
                    >
                        <h6 className="text-center">Languages</h6>
                        <li>
                            <li className="dropdown-submenu language-hyper">
                                <a className="dropdown-item " tabindex="-1" href="#">
                                    <img width="23" src="/images/united-kingdom.png"/> English
                                </a>
                            </li>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <h6 className="text-center">Currency</h6>
                        <li>
                            <li className="dropdown-submenu">
                                <a className="dropdown-item" tabindex="-1" href="#">
                                    {app_currency ? app_currency.id : currency_id ? currency_id : "USD"}
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <input onChange={(e) => {set_currency_query(e.target.value)}}
                                            type="text"
                                            placeholder="Search currency.."
                                        />
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>

                                    <div className="for-overflow-dropdown-items">

                                        {currencies.map((cur) => (
                                            currency_query ?
                                                cur.id.includes(currency_query.toUpperCase()) &&
                                            <li onClick={() => {
                                                set_currency_id(cur.id);
                                                localStorage.setItem("currency", JSON.stringify(cur));
                                            }} className="dropdown-item">{cur.id}</li>
                                                :
                                                <li onClick={() => {
                                                    set_currency_id(cur.id);
                                                    localStorage.setItem("currency", JSON.stringify(cur));
                                                }} className="dropdown-item">{cur.id}</li>
                                        ))}

                                    </div>
                                </ul>
                            </li>
                        </li>
                    </ul>
                </div>
            </li>

        </>
    );
}

export default Currency;