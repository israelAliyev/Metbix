import React, {Component} from 'react';
import '../../../css/shippingInfo.css'

class ShippingInfo extends Component {
    render() {
        return (
            <div>


                <div className="shipping-info d-flex flex-row justify-content-around align-items-center flex-wrap">

                    <div className="first-info d-flex">

                        <i className="bi bi-truck"></i>
                        <div className="content ms-3">
                          <p>Free Delivery</p>
                           <p >On all Orders over $99</p>
                        </div>

                    </div>

                    <hr/>


                    <div className="first-info d-flex">

                        <i className="bi bi-credit-card-2-front"></i>
                        <div className="content ms-3">
                            <p>Safe Payment</p>
                            <p >100% secure payment</p>
                        </div>

                    </div>

                    <hr/>


                    <div className="first-info d-flex">

                        <i className="bi bi-chat-right-text"/>
                        <div className="content ms-lg-3 ms-2">
                            <p>24/7 Help Center</p>
                            <p>Dedicated 24/7 support</p>
                        </div>

                    </div>

                    <hr/>


                    <div className="first-info d-flex">

                        <i className="bi bi-hand-index"></i>
                        <div className="content ms-3">
                            <p>Friendly Service</p>
                            <p>30 days you are satisfied</p>
                        </div>

                    </div>


                </div>


            </div>
        );
    }
}

export default ShippingInfo;