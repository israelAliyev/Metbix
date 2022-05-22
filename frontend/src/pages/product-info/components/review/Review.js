import React, {Component, useEffect, useState} from 'react';

const Reviews = (props) => {

    const [bigImage, setBigImage] = useState('');
    const [product_rating, set_product_rating] = useState(0);

    const [product_id, set_product_id] = useState(undefined);
    const [product_picture, set_product_picture] = useState(undefined);
    const [product_name, set_product_name] = useState(undefined);
    const [department_id, set_department_id] = useState(undefined);
    const [category_id, set_category_id] = useState(undefined);


    useEffect(() => {

        set_product_id(props.review.productId)
        set_product_picture(props.review.productsPictures[0].picturePath)


        props.review.productBrand.brandName && props.review.productBrand.brandName !== "Other" ?

            set_product_name(`${props.review.productBrand.brandName} ${props.review.productModel.modelName && props.review.productModel.modelName !== "Other" ? props.review.productModel.modelName : null}`)

            : set_product_name(props.review.productShortDesc);


        props.review.productDepartment ? set_department_id(props.review.productDepartment.departmentId) : set_department_id(null)

        props.review.productCategory ? set_category_id(props.review.productCategory.categoryId) : set_category_id(null)

        let sum = 0;

        for (let i = 0; i < props.review.productReviews.length; i++) {
            sum += product_rating + props.review.productReviews[i].reviewRating
        }

        set_product_rating(sum)


    }, [props])


    return (
        <>

            <div className="review mt-5">

                {!bigImage ?

                    <div>
                        <div className="main">

                            <div className="header d-flex justify-content-between">

                                <p>Ratings and Reviews</p>

                                <button onClick={() => {
                                    window.location.href = `/evaluate?product-id=${product_id}&name=${product_name}&department-id=${department_id}&category-id=${category_id}&picture=${btoa(product_picture)}`
                                }}>Write a Review
                                </button>

                            </div>

                            <div className="rating-info d-flex mt-4 align-items-center">


                                <div className="ratings-info-stars">
                                    <div className="item d-flex align-items-center">

                                        <span>5</span>

                                        <div className="stars d-flex">
                                            <i className="fas fa-star"/><i className="fas fa-star"/><i
                                            className="fas fa-star"/><i className="fas fa-star"/><i
                                            className="fas fa-star"/>
                                        </div>

                                        <div className="rating-info-bar">
                                            <div/>
                                        </div>

                                        <span>{props.review.productReviews.filter(review => review.reviewRating === 5).length}</span>
                                    </div>
                                    <div className="item d-flex align-items-center">

                                        <span>4</span>

                                        <div className="stars d-flex">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="far fa-star"></i>
                                        </div>

                                        <div className="rating-info-bar">
                                            <div/>
                                        </div>

                                        <span>{props.review.productReviews.filter(review => review.reviewRating === 4).length}</span>
                                    </div>
                                    <div className="item d-flex align-items-center">

                                        <span>3</span>

                                        <div className="stars d-flex">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="fas fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        </div>

                                        <div className="rating-info-bar">
                                            <div/>
                                        </div>

                                        <span>{props.review.productReviews.filter(review => review.reviewRating === 3).length}</span>
                                    </div>
                                    <div className="item d-flex align-items-center">

                                        <span>2</span>

                                        <div className="stars d-flex">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        </div>

                                        <div className="rating-info-bar">
                                            <div/>
                                        </div>

                                        <span>{props.review.productReviews.filter(review => review.reviewRating === 2).length}</span>
                                    </div>
                                    <div className="item d-flex align-items-center">

                                        <span>1</span>

                                        <div className="stars d-flex">
                                            <i className="fas fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        </div>

                                        <div className="rating-info-bar">
                                            <div/>
                                        </div>

                                        <span>{props.review.productReviews.filter(review => review.reviewRating === 1).length}</span>
                                    </div>

                                </div>

                                <div className="rating-star d-flex align-items-center">

                                    <span>{parseFloat(product_rating/props.review.productReviews.length).toFixed(1)}</span>


                                    <div className="stars d-flex me-2">

                                        <i className={parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 0 && parseFloat(product_rating/props.review.productReviews.length).toFixed(1) < 1 ? "fas fa-star-half-alt" : parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 0 ? "fas fa-star" : "far fa-star"}/>
                                        <i className={parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 1 && parseFloat(product_rating/props.review.productReviews.length).toFixed(1) < 2 ? "fas fa-star-half-alt" : parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 1 ? "fas fa-star" : "far fa-star"}/>
                                        <i className={parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 2 && parseFloat(product_rating/props.review.productReviews.length).toFixed(1) < 3 ? "fas fa-star-half-alt" : parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 2 ? "fas fa-star" : "far fa-star"}/>
                                        <i className={parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 3 && parseFloat(product_rating/props.review.productReviews.length).toFixed(1) < 4 ? "fas fa-star-half-alt" : parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 3 ? "fas fa-star" : "far fa-star"}/>
                                        <i className={parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 4 && parseFloat(product_rating/props.review.productReviews.length).toFixed(1) < 5 ? "fas fa-star-half-alt" : parseFloat(product_rating/props.review.productReviews.length).toFixed(1) > 4 ? "fas fa-star" : "far fa-star"}/>

                                    </div>

                                    <p>/{props.review.productReviews.length} Evaluation</p>
                                </div>

                            </div>

                        </div>

                        <hr/>

                        <div className="sub">

                            <div className="for-scroll">

                                <div className="review-wrapper">

                                    {props.review.productReviews.map((review) => (
                                    <div className="review-section-r">

                                        <p className="title">{review.reviewTitle}</p>

                                        <p className="content">{review.reviewDescription}</p>

                                        <div className="info-comment-id d-flex align-items-center mt-1">
                                            <i className={review.reviewRating > 0 ? "fas fa-star" : "far fa-star"}/>
                                            <i className={review.reviewRating > 1 ? "fas fa-star" : "far fa-star"}/>
                                            <i className={review.reviewRating > 2 ? "fas fa-star" : "far fa-star"}/>
                                            <i className={review.reviewRating > 3 ? "fas fa-star" : "far fa-star"}/>
                                            <i className={review.reviewRating > 4 ? "fas fa-star me-2" : "far fa-star me-2"}/>
                                            |
                                            <p>by: israel</p>
                                            |
                                            <p>{new Date(review.reviewDate).toDateString()}</p>
                                        </div>

                                        <div className="photos d-flex flex-wrap">

                                            {review.reviewPictures.map(pic => (
                                            <img onClick={() => {
                                                setBigImage(pic.picturePath)
                                            }} src={pic.picturePath} alt="Review_photo"/>
                                            ))}
                                        </div>

                                        <hr/>

                                    </div>


                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                    :

                    <div className="photo">
                        <img src={bigImage} alt=""/>

                        <i onClick={() => {
                            setBigImage('')
                        }} className="bi bi-x-lg"/>
                    </div>
                }
            </div>

        </>
    );
}

export default Reviews;