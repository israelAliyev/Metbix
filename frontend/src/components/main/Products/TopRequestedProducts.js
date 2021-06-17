import React, {Component} from 'react';
import '../../../css/toprequestedproducts.css'

class TopRequestedProducts extends Component {
    render() {
        return (
            <>

                <div className="top-requested-products mt-5">


                    <div className="products-container">

                        <div className="image"></div>

                        <div className="review">
                            <div className="stars">

                                <span>Reviews:</span>

                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"/>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>

                            </div>
                            <h5>$ 100</h5>
                    </div>

                        <h4 className="name">Indy earbuds</h4>
                        <div className="detail">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas
                                aliquam quam, at ullamcorper massa tincidunt nec. Integer diam justo, ultrices nec velit et,
                                mattis finibus orci
                            </p>
                        </div>

                        <div className="btn-box">
                            <span className="like"> <i className="fa fa-heart-o"/> </span>

                            <div className="btn">
                                <p>Add to cart</p>
                                <div className="cart-icon">
                                    <li className="fa fa-shopping-cart"/>
                                </div>
                            </div>
                        </div>

                </div>
                </div>

            </>
        );
    }
}

export default TopRequestedProducts;