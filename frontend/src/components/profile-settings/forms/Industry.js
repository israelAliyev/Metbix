import React, {Component} from 'react';

class Industry extends Component {
    render() {
        return (
            <>
                <div className="industry d-flex flex-wrap justify-content-between">

                    <div className="item">
                        <label className="title">Industry</label>
                        <select>
                            <option value="0">Select car:</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Ford</option>
                        </select>
                    </div>

                    <div className="item">
                        <label className="title">Company Type</label>
                        <select>
                            <option value="0">Select car:</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Ford</option>
                        </select>
                    </div>

                    <div className="item">
                        <label className="title">Company Size</label>
                        <input type="text"/>
                    </div>


                    <div className="item">
                        <label className="title">Founded</label>
                        <input type="text"/>
                    </div>


                </div>
            </>
        );
    }
}

export default Industry;