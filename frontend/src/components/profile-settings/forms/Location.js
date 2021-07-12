import React, {Component} from 'react';

class Location extends Component {
    render() {
        return (
            <>

                <div className="location d-flex flex-wrap justify-content-between">

                    <div className="item">
                        <label className="title">Country</label>
                        <select>
                            <option value="0">Select car:</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Ford</option>
                        </select>
                    </div>

                    <div className="item">
                        <label className="title">City</label>
                        <select>
                            <option value="0">Select car:</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Ford</option>
                        </select>
                    </div>

                    <div className="item">
                        <label className="title">Address</label>
                        <input type="text"/>
                    </div>


                    <div className="item">
                        <label className="title">ZIP Code</label>
                        <input type="text"/>
                    </div>

                    <div className="continents w-100 d-flex flex-column mt-3">

                        <label>Continents branches</label>

                        <div>

                            <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_0">Africa</label>

                            <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_1">Asia</label>


                            <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_2">Europe</label>

                            <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_3">N.America</label>

                            <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_4">S.America</label>

                            <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_5">Australia</label>


                        </div>
                    </div>

                </div>

            </>
        );
    }
}

export default Location;