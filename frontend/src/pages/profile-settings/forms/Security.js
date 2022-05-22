import React, {Component} from 'react';

class Security extends Component {
    render() {
        return (
            <>
                <div className="security d-flex flex-wrap justify-content-between">

                    <div className="item">
                        <label className="title">New Password</label>
                        <input type="password"/>
                    </div>

                    <div className="item">
                        <label className="title">Ols Password</label>
                        <input type="password"/>
                    </div>

                    <div className="item">
                        <label className="title">Confirm Old Password</label>
                        <input type="password"/>
                    </div>


                    <div className="number">
                        <label className="title">Show my number:</label>

                        <div className="d-flex align-items-center">
                        <input type="checkbox" className="me-1"/>
                        <p><span>+994</span> 77 518 40 97</p>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Security;