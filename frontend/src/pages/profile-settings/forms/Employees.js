import React, {Component} from 'react';

class Employees extends Component {
    render() {
        return (
            <>
                <div className="employees d-flex flex-wrap justify-content-between">

                <div className="item">
                    <label className="title">Employees</label>
                    <input type="text"/>
                </div>


                <div className="item">
                    <label className="title">Production Capacity </label>
                    <input type="text"/>
                </div>

                <div className="item">
                    <label className="title">Total annue revennue</label>
                    <input type="text"/>
                </div>

                </div>
            </>
        );
    }
}

export default Employees;