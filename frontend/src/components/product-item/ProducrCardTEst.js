import React, {useEffect} from 'react';
import '../../css/product-item.css'

function ProductCardTest(props) {


    return (
        <>
            <div className="product-card-item">
                <div className="image">
                    <img src="/images/isi.jpg" alt=""/>

                </div>

                <div className="details">
                    <div className="review d-flex justify-content-between">
                        <div className="stars d-flex align-items-center">
                            <p>3.3</p>
                            <i className='bx bx-star'/>
                            <i className='bx bx-star'/>
                            <i className='bx bxs-star'/>
                            <i className='bx bxs-star'/>
                            <i className='bx bxs-star'/>
                        </div>


                        <div className="price d-flex flex-column">
                            $445
                        </div>


                    </div>

                    <div className="description cursor-pointer">

                            <h5 className="product-title">Apple Iphone 6s</h5>


                            <p>Sscs sdfsdfsdf sdfsdfsd dsfdsfdsf dsfds</p>
                    </div>


                </div>

            </div>

        </>
    );
}

export default ProductCardTest;