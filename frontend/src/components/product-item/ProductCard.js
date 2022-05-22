import React, {useEffect} from 'react';
import '../../css/product-item.css'
import {useSelector} from "react-redux";

function ProductCard(props) {

    const price = useSelector(state => state.price)

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null

    }
    // useEffect(() => {
    //     console.log(price)
    // }, [price])

    return (
        <>
            <div onClick={() => {openInNewTab('/product-info?product-id='+props.product.productId)}} className="product-card-item">
                <div className="image">
                    <img src={props.product.coverPhoto} alt=""/>
                    {props.remove &&
                    < i onClick={() => {props.remove(props.product.productId)}} className="ri-close-line"/>
                    }
                </div>

                <div className="details">
                    <div className="review d-flex justify-content-between">
                        <div className="stars d-flex align-items-center">
                            <p>{parseFloat(props.product.rating).toFixed(1)}</p>
                            <i className={props.product.rating > 0 ? 'bx bxs-star' : 'bx bx-star'}/>
                            <i className={props.product.rating > 1 ? 'bx bxs-star' : 'bx bx-star'}/>
                            <i className={props.product.rating > 2 ? 'bx bxs-star' : 'bx bx-star'}/>
                            <i className={props.product.rating > 3 ? 'bx bxs-star' : 'bx bx-star'}/>
                            <i className={props.product.rating > 4 ? 'bx bxs-star' : 'bx bx-star'}/>
                        </div>


                        {price.response &&
                        <div className="price d-flex flex-column">

                            {`${price.response.symbol}${parseFloat(props.product.productPrice / price.response.data[props.product.productCurrency]).toFixed(2)}`}
                        </div>
                        }


                    </div>

                    <div className="description cursor-pointer">

                        {props.product.productBrand.brandName && props.product.productBrand.brandName !== "Other" ?

                            <h5 className="product-title">{props.product.productBrand.brandName} {props.product.productModel.modelName && props.product.productModel.modelName !== "Other" ? props.product.productModel.modelName : null}</h5>

                            : <h6 >{props.product.productShortDesc}</h6>}

                        {props.product.productBrand.brandName && props.product.productBrand.brandName !== "Other" ?
                            <p>{props.product.productShortDesc}</p>
                            : props.product.productShortDesc}
                    </div>


                </div>

            </div>

        </>
    );
}

export default ProductCard;