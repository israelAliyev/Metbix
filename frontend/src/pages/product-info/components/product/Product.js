import React, {useEffect, useState} from 'react';
import Slider from "../slider/Slider";
import {useDispatch, useSelector} from "react-redux";
import {
    convertCurrency,
    existProductInBasket,
    sellProduct,
    whichAccountExistByEmail,
    addProductBasket,
    removeProductBasket
} from "../../../../services";


function Product(props) {

    const [store_url, set_store_url] = useState(window.location.href);
    const [store_name, set_store_name] = useState(null);

    const [store_email, set_store_email] = useState(null);

    const [product_rating, set_product_rating] = useState(0);
    const [product_quantity, set_product_quantity] = useState(0);

    const my_email = JSON.parse(localStorage.getItem("__|^|__"));


    const dispatch = useDispatch();
    const price = useSelector(state => state.price)
    const product_in_basket = useSelector(state => state.product_in_basket)
    const which_account_exist_by_email = useSelector(state => state.which_account_exist_by_email)


    useEffect(() => {

        setTimeout(() => {
            if (my_email) {
                dispatch(whichAccountExistByEmail(my_email.iiasrl));
            }
        }, 500)

    }, [])

    useEffect(() => {

            dispatch(convertCurrency());

        if (my_email) {
            dispatch(existProductInBasket(props.product.productId, my_email.iiasrl))
        }

        if (props.product.company) {
            set_store_url('/company?company-id=' + props.product.company.companyId);
            set_store_name(props.product.company.companyName);
            set_store_email(props.product.company.companyEmail)

            if (props.product.company.companyRatingsCount) {
                set_product_rating({
                    rating: parseFloat(props.product.company.companyRating / props.product.company.companyRatingsCount).toFixed(1),
                    rating_count: props.product.company.companyRatingsCount
                })
            }

        } else {
            set_store_url('/user?user-id=' + props.product.user.userId);
            set_store_name(props.product.user.userName);
            set_store_email(props.product.user.userEmail);

            if (props.product.user.userRatingsCount) {
                set_product_rating({
                    rating: !Number.isNaN(parseFloat(props.product.user.userRating / props.product.user.userRatingsCount).toFixed(1)) && parseFloat(props.product.user.userRating / props.product.user.userRatingsCount).toFixed(1),
                    rating_count: props.product.user.userRatingsCount
                });
            }
        }


    }, [props])


    const sellInMyStore = async () => {


        let electronicsBatteries = [];

        if (props.product.electronicsBatteries) {

            for (let i = 0; i < props.product.electronicsBatteries.length; i++) {

                electronicsBatteries.push({battery: props.product.electronicsBatteries[i].battery});
            }
        }


        let electronicsScreenSizes = [];

        if (props.product.electronicsScreenSizes) {

            for (let i = 0; i < props.product.electronicsScreenSizes.length; i++) {

                electronicsScreenSizes.push({screenSize: props.product.electronicsScreenSizes[i].screenSize});
            }
        }


        let automotiveDistanceTraveleds = [];

        if (props.product.automotiveDistanceTraveleds) {

            for (let i = 0; i < props.product.automotiveDistanceTraveleds.length; i++) {

                automotiveDistanceTraveleds.push({distanceTraveled: props.product.automotiveDistanceTraveleds[i].distanceTraveled});
            }
        }


        let productsPictures = [];

        if (props.product.productsPictures) {

            for (let i = 0; i < props.product.productsPictures.length; i++) {

                productsPictures.push({picturePath: props.product.productsPictures[i].picturePath});
            }
        }


        const obj = {
            ...props.product, accountEmail: "shaqverdiyev888@gmail.com",
            electronicsBatteries: electronicsBatteries.length > 0 ? electronicsBatteries : null,
            electronicsScreenSizes: electronicsScreenSizes.length > 0 ? electronicsScreenSizes : null,
            automotiveDistanceTraveleds: automotiveDistanceTraveleds.length > 0 ? automotiveDistanceTraveleds : null,
            productsPictures: productsPictures.length > 0 ? productsPictures : null
        };

        if (obj.productsHomeOptions) delete obj.productsHomeOptions.homeID
        if (obj.productsJobOptions) delete obj.productsJobOptions.jobID

        await dispatch(sellProduct(obj));

        setTimeout(() => {

            if (which_account_exist_by_email === 'user') {
                window.location.href = '/user?user-email=' + my_email.iiasrl
            } else if (which_account_exist_by_email === 'company') {
                window.location.href = '/company?company-email=' + my_email.iiasrl
            } else {
                window.location.href = '/'
            }

        }, 1000)
    }

    const removeProductBasketHandler = () => {

        if (my_email) {
            dispatch(removeProductBasket(my_email.iiasrl, props.product.productId))

            setTimeout(() => {
                dispatch(existProductInBasket(props.product.productId, my_email.iiasrl))
            }, 100)
        } else {
            window.location.href = '/register'
        }
    }


    const addProductBasketHandler = () => {

        if (my_email) {
            dispatch(addProductBasket(my_email.iiasrl, props.product.productId))

            setTimeout(() => {
                dispatch(existProductInBasket(props.product.productId, my_email.iiasrl))
            }, 100)
        } else {
            window.location.href = '/register'
        }
    }

    return (
        <>

            <div className="main d-flex justify-content-start">

                <div className="photos">
                    <Slider productsPictures={props.product.productsPictures}/>
                </div>
                <div className="operations">


                    {props.product.productBrand.brandName && props.product.productBrand.brandName !== "Other" ?

                        <h2 className="product-title">{props.product.productBrand.brandName} {props.product.productModel.modelName && props.product.productModel.modelName !== "Other" ? props.product.productModel.modelName : null}</h2>

                        : <h3>{props.product.productShortDesc}</h3>}

                    {props.product.productBrand.brandName && props.product.productBrand.brandName !== "Other" ?
                        <p>{props.product.productShortDesc}</p>
                        : null}


                    <a href={store_url} className="product-link">visit {store_name} store</a>

                    <div className="product-rating">

                        {/*<i className="far fa-star"></i>*/}

                        <i className={product_rating.rating > 0 && product_rating.rating < 1 ? "fas fa-star-half-alt" : product_rating.rating > 0 ? "fas fa-star" : "far fa-star"}/>
                        <i className={product_rating.rating > 1 && product_rating.rating < 2 ? "fas fa-star-half-alt" : product_rating.rating > 1 ? "fas fa-star" : "far fa-star"}/>
                        <i className={product_rating.rating > 2 && product_rating.rating < 3 ? "fas fa-star-half-alt" : product_rating.rating > 2 ? "fas fa-star" : "far fa-star"}/>
                        <i className={product_rating.rating > 3 && product_rating.rating < 4 ? "fas fa-star-half-alt" : product_rating.rating > 3 ? "fas fa-star" : "far fa-star"}/>
                        <i className={product_rating.rating > 4 && product_rating.rating < 5 ? "fas fa-star-half-alt me-2" : product_rating.rating > 4 ? "fas fa-star me-2" : "far fa-star me-2"}/>


                        <span> {product_rating.rating} ({product_rating.rating_count})</span>
                    </div>

                    {price.response &&
                    <div className="product-price">

                        {props.product.productOldPrice &&
                        <p className="last-price">Old
                            Price: <span>{price.response.symbol} {parseFloat(props.product.productOldPrice / price.response.data[props.product.productCurrency]).toFixed(2)}</span>
                        </p>
                        }

                        <p className="new-price">New
                            Price: <span>{price.response.symbol}{parseFloat(props.product.productPrice / price.response.data[props.product.productCurrency]).toFixed(2)} ({props.product.productOldPrice < props.product.productPrice ? "+" + parseInt(props.product.productPrice - props.product.productOldPrice).toString() : props.product.productPrice - props.product.productOldPrice}%)</span>
                        </p>
                    </div>
                    }

                    {/*<hr/>*/}
                    <div className="options mb-2 mt-2">

                        <div className="count">
                            <p>Quantity: </p>
                            <i onClick={() => {
                                set_product_quantity(product_quantity > 0 ? product_quantity - 1 : 0)
                            }} className="bi bi-dash"/>
                            <input value={product_quantity} readOnly={true} type="text"/>
                            <i onClick={() => {
                                set_product_quantity(product_quantity < props.product.productQuantity + 1 ? product_quantity + 1 : 0)
                            }} className="bi bi-plus"/>
                            <span>You can select up to {props.product.productQuantity} products</span>
                        </div>

                        <div className="buttons d-flex">

                            <button
                                className={`btn btn-dark me-4 ${!my_email || my_email.iiasrl === store_email ? `disabled` : null}`}>Send
                                Request
                            </button>
                            <button onClick={sellInMyStore}
                                    className={`btn btn-warning me-3 ${!my_email || my_email.iiasrl === store_email ? `disabled` : null}`}>Sell
                                in My Store
                            </button>

                            {product_in_basket.response ?
                                <i onClick={removeProductBasketHandler} className="bi bi-bag-check"/>
                                : <i onClick={addProductBasketHandler} className="bi bi-bag-plus"/>}

                        </div>


                        <div className="featured-information mt-4">
                            <div className="featured-information-header">Featured Information</div>
                            <div className="starred-attributes">
                                <ul>
                                    <li><span title="Garanti Tipi"
                                              className="attribute-label">Warranty</span><i>:</i><span
                                        title="Warranty"
                                        className="attribute-value">{props.product.productWarranty ? "Yes" : !props.product.productWarranty ? "No" : "No Selected"}</span>
                                    </li>
                                    <li><span title="Ekran Yenilenme Hızı"
                                              className="attribute-label">Weight</span><i>:</i><span
                                        title="Weight"
                                        className="attribute-value">{props.product.productWeight ? props.product.productWeight + " kg" : "No Selected"}</span>
                                    </li>
                                    <li><span title="Çözünürlük"
                                              className="attribute-label">Condition</span><i>:</i><span
                                        title="Condition"
                                        className="attribute-value">{props.product.productStatus ? props.product.productStatus : "No Selected"}</span>
                                    </li>
                                    <li><span title="Ekran Boyutu"
                                              className="attribute-label">Domestic Shipping</span><i>:</i><span
                                        title="Domestic Shipping"
                                        className="attribute-value">{props.product.productDomesticShipping ? "Yes" : !props.product.productDomesticShipping ? "No" : "No Selected"}</span>
                                    </li>
                                    <li><span title="Panel Tipi"
                                              className="attribute-label">Quantity</span><i>:</i><span title="VA"
                                                                                                       className="attribute-value">{props.product.productQuantity}</span>
                                    </li>
                                    <li><span title="Tepki Süresi"
                                              className="attribute-label">International Shipping</span><i>:</i><span
                                        title="1 ms"
                                        className="attribute-value">{props.product.productInternationalShipping ? "Yes" : !props.product.productInternationalShipping ? "No" : "No Selected"}</span>
                                    </li>
                                </ul>
                            </div>
                            <hr/>
                            <div className="content-descriptions" data-drroot="content-descriptions">
                                <ul id="content-descriptions-list" className="starred">
                                    <li className="return-info">Free returns within 15 days. Click for detailed
                                        <a href="/help" className="product-description-link"> information</a>.
                                    </li>

                                    <li className="return-info">Click to go to the
                                        <a href="/" className="product-description-link"> store</a>.
                                    </li>
                                    <li>Department
                                        - {props.product.productDepartment ? props.product.productDepartment.department : "No Selected"}</li>
                                    <li>Category
                                        - {props.product.productCategory ? props.product.productCategory.categoryName : "No Selected"}</li>
                                </ul>
                                <div className="all-features">
                                    <div className="opacity-layout"></div>
                                    <a rel="nofollow" className="button-all-features">All Features Of Product</a>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        </>
    );
}

export default Product;

