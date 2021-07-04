import React, {Component} from 'react';

class ProductOverview extends Component {
    render() {
        return (
            <>

                <div className="product-overview w-100 mt-5">

                    <div className="header bg-white w-100">


                        <input checked={null} name="question1" value="0" id="q_55bba1d1e4b0e12ba3df7316_0"
                               type="radio"/>
                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_0">Products in Stock</label>

                        <input name="question1" value="1" id="q_55bba1d1e4b0e12ba3df7316_1"
                               type="radio"/>
                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_1">Warehouse</label>

                        <input  name="question1" value="0" id="q_55bba1d1e4b0e12ba3df7316_2"
                               type="radio"/>
                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_2">Basket</label>

                        <input name="question1" value="1" id="q_55bba1d1e4b0e12ba3df7316_3"
                               type="radio"/>
                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_3">The products you Request</label>

                    </div>


                    <div className="products d-flex flex-wrap">

                        <div className="text d-flex justify-content-end align-items-end mb-3">

                            <a href="">see all <i className="fas fa-angle-double-right"></i></a>
                        </div>


                        <div className="item">
                            <div className="image">
                                <img src="/images/pro8.png" alt=""/>
                            </div>

                            <div className="details">
                                <div className="review d-flex justify-content-between align-items-center">
                                    <div className="stars d-flex align-items-center">
                                        <p>Reviews:</p>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>

                                    <div className="price d-flex flex-column">
                                        $1000
                                    </div>

                                </div>

                                <div className="description cursor-pointer">
                                    <h5>Apple Airpods</h5>

                                    <p>continuewerewrreewrewrwrwrwrwrcontinuew
                                        erewrreewrewrwrwrwrwrcontinuewerewrreewre
                                        wrwrwrwrwrcontinuewerewrreewrewrwrwrwrwrcontinuewerewrreewrewrwrwrwrwrcont
                                        inuewerewrreewrewrwrwrwrwrcontinuewerewrreewrewrwrwrwrwrcontinuewerewrre
                                    </p>
                                </div>


                            </div>

                        </div>



                    </div>


                </div>

            </>
        );
    }
}

export default ProductOverview;