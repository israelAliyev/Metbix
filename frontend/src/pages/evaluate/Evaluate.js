import React, {Component, useEffect, useState} from 'react';
import '../../css/evaluate.css';
import useQuery from "../../services/url-query-parameter/url-query-parameter";
import LoadingPhoto from "../../animations/components/sell-product/LoadingPhoto";
import Loading from "../../animations/components/login/Loading";
import {useDispatch} from "react-redux";
import {app} from "../../services/firebase/firebase"
import {v4 as uuid} from "uuid";
import {addReview} from "../../services";

function Evaluate(props) {

    const dispatch = useDispatch();
    let query = useQuery();

    let id = query.get("product-id");
    let picture = query.get("picture");
    let name = query.get("name");
    let departmentId = query.get("department-id");
    let categoryId = query.get("category-id");

    useEffect(() => {

        if (Number.isNaN(parseInt(id)) || picture === null || name === null || (departmentId === null && categoryId === null)) {
            window.location.href = "/"
            console.log(picture)
        }

    }, [])


    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(undefined);

    const [startDesc1, setStarDEsc1] = useState(null);
    const [startDesc, setStarDEsc] = useState(null);
    const [starRating, setStarRating] = useState(null);

    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewDescription, setReviewDescription] = useState("");
    const [reviewRating, setReviewRating] = useState(null);

    const [reviewPictures, setReviewPictures] = useState([
        {pathId: 1, picturePath: '', fileName: '', loading: false},
        {pathId: 2, picturePath: '', fileName: '', loading: false},
        {pathId: 3, picturePath: '', fileName: '', loading: false},
        {pathId: 4, picturePath: '', fileName: '', loading: false},
        {pathId: 5, picturePath: '', fileName: '', loading: false}])
    const [reviewPicturesCount, setReviewPicturesCount] = useState(0)
    const [reviewPhotoIndex, setReviewPhotoIndex] = useState(0)


    const handleChooseReviewPhoto = async (e) => {


        if (e.target.files[0]) {

            let newArr1 = [...reviewPictures];

            newArr1[reviewPhotoIndex].loading = true;

            setReviewPictures(newArr1);

            let newArr = [...reviewPictures];

            const file = e.target.files[0];
            const fileName = e.target.files[0].name + uuid();

            const storageRef = app.storage().ref();

            const fileRef = storageRef.child(`product-info-photos/${fileName}`);
            await fileRef.put(file);

            newArr[reviewPhotoIndex].picturePath = await fileRef.getDownloadURL();
            newArr[reviewPhotoIndex].fileName = fileName;
            newArr[reviewPhotoIndex].loading = false;

            setReviewPicturesCount(reviewPicturesCount + 1)
            setReviewPictures(newArr);

        }

    }

    const deleteReviewPhoto = async (index) => {


        const storageRef = app.storage().ref();


        let fileRef = storageRef.child(`product-info-photos/${reviewPictures[index].fileName}`);

        await fileRef.delete().then(() => {

            let newArr = [...reviewPictures];

            newArr[index].loading = false;

            newArr[index].picturePath = ''
            newArr[index].fileName = null

            setReviewPicturesCount(reviewPicturesCount - 1)

            setReviewPictures(newArr)

        }).catch((error) => {
            console.log("File deleted failure")
        });
    }

    useEffect(() => {

        console.log(startDesc)

    }, [startDesc])

    const handleAddReview = async () => {

        const review = {
            productId: id,
            reviewTitle,
            reviewDescription,
            reviewRating,
            reviewPictures
        }


        if (findError()) {
            setError(findError())
        } else {

            if (!loading) {
                setLoading(true)

                await dispatch(addReview(review));

                setTimeout(() => {
                    window.location.href = "/product-info?product-id="+id;
                }, 1000)
            }
        }

    }

    const findError = () => {

        if (!reviewTitle && !reviewRating) {
            return "Review Title or Rating cannot be empty";
        }
        return null;
    }

    return (
        <>

            <div className="evaluate mt-5 mb-5">


                <div className="header-product d-flex">

                    <img src={atob(picture)} alt=""/>


                    <div className="info d-flex flex-column">

                        <p>RATE AND REVIEW</p>

                        <a>{name}</a>

                        <div className="rate d-flex align-items-center mt-2">

                            <h4>Rate this product</h4>

                            <div className="d-flex align-items-center">
                                <i onClick={() => {
                                    setReviewRating(1)
                                    setStarDEsc("Missed the marks")
                                }} onMouseOut={() => {
                                    setStarRating(null)
                                }} onMouseOver={() => {
                                    setStarRating(1)
                                    setStarDEsc1("Missed the mark")
                                }}
                                   className={`ri-star-fill ${reviewRating >= 1 || starRating >= 1 ? `text-warning` : null}`}/>


                                <i onClick={() => {
                                    setReviewRating(2)
                                    setStarDEsc("Meh. Not impressed")
                                }} onMouseOut={() => {
                                    setStarRating(null)
                                }} onMouseOver={() => {
                                    setStarRating(2)
                                    setStarDEsc1("Meh. Not impressed")
                                }}
                                   className={`ri-star-fill ${reviewRating >= 2 || starRating >= 2 ? `text-warning` : null}`}/>


                                <i onClick={() => {
                                    setReviewRating(3)
                                    setStarDEsc("It's okay")
                                }} onMouseOut={() => {
                                    setStarRating(null)
                                }} onMouseOver={() => {
                                    setStarRating(3)
                                    setStarDEsc1("It's okay")
                                }}
                                   className={`ri-star-fill ${reviewRating >= 3 || starRating >= 3 ? `text-warning` : null}`}/>


                                <i onClick={() => {
                                    setReviewRating(4)
                                    setStarDEsc("Better than expected")
                                }} onMouseOut={() => {
                                    setStarRating(null)
                                }} onMouseOver={() => {
                                    setStarRating(4)
                                    setStarDEsc1("Better than expected")
                                }}
                                   className={`ri-star-fill ${reviewRating >= 4 || starRating >= 4 ? `text-warning` : null}`}/>


                                <i onClick={() => {
                                    setReviewRating(5)
                                    setStarDEsc("Awesome sauce!")
                                }} onMouseOut={() => {
                                    setStarRating(null)
                                }} onMouseOver={() => {
                                    setStarRating(5)
                                    setStarDEsc1("Awesome sauce!")
                                }}
                                   className={`ri-star-fill ${reviewRating >= 5 || starRating >= 5 ? `text-warning` : null}`}/>


                                <p>{startDesc1}</p>

                                <p className={reviewRating && !starRating ? "show-start-desc" : null}>{startDesc}</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="forms">

                    <div className="row-reviewContent mt-4 d-flex flex-column position-relative">


                        <div className="text d-flex justify-content-between align-items-end">
                            <p>Review title</p>
                            <span>{reviewTitle.length}</span>
                        </div>
                        <textarea onChange={(e) => {
                            setReviewTitle(e.target.value)
                        }} maxLength="100" placeholder="Sum it up in a few words" name="" id="" cols="20"
                                  rows="2"/>


                        <div className="text d-flex justify-content-between align-items-end">
                            <p>Write your product review</p>
                            <span>{reviewDescription.length}</span>
                        </div>

                        <textarea onChange={(e) => {
                            setReviewDescription(e.target.value)
                        }} maxLength="500" placeholder="Describe the pros, cons, and other highlights." name=""
                                  id="" cols="20"
                                  rows="2"/>


                    </div>


                    <div className="images-upload mt-5">


                        <p>Pictures speak louder than words</p>

                        <div className="uploader">

                            <div className="text d-flex justify-content-between">

                                <p>Show off what you have by adding a picture. (Add up to 5 photos)</p>

                                <p>0 of 5 </p>

                            </div>

                            <div className="choose-images d-flex justify-content-between flex-wrap">

                                <div className="image-wrapper">

                                    {reviewPictures[0].loading === false && reviewPictures[0].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setReviewPhotoIndex(0)
                                            }} htmlFor="photo1">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseReviewPhoto} accept="image/*" id="photo1"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {reviewPictures[0].picturePath ?
                                        <img onClick={() => {
                                            setReviewPhotoIndex(0)
                                        }} src={reviewPictures[0].picturePath} alt=""/>

                                        : null}

                                    {reviewPictures[0].loading && reviewPictures[0].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {reviewPictures[0].picturePath ?
                                        <i onClick={() => {
                                            deleteReviewPhoto(0, false)
                                        }} className="bi bi-x"/>
                                        : null}

                                </div>

                                <div className="image-wrapper">

                                    {reviewPictures[1].loading === false && reviewPictures[1].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setReviewPhotoIndex(1)
                                            }} htmlFor="photo2">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseReviewPhoto} accept="image/*" id="photo2"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {reviewPictures[1].picturePath ?
                                        <img onClick={() => {
                                            setReviewPhotoIndex(1)
                                        }} src={reviewPictures[1].picturePath} alt=""/>

                                        : null}

                                    {reviewPictures[1].loading && reviewPictures[1].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {reviewPictures[1].picturePath ?
                                        <i onClick={() => {
                                            deleteReviewPhoto(1, false)
                                        }} className="bi bi-x"/>
                                        : null}

                                </div>


                                <div className="image-wrapper">

                                    {reviewPictures[2].loading === false && reviewPictures[2].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setReviewPhotoIndex(2)
                                            }} htmlFor="photo3">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseReviewPhoto} accept="image/*" id="photo3"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {reviewPictures[2].picturePath ?
                                        <img onClick={() => {
                                            setReviewPhotoIndex(2)
                                        }} src={reviewPictures[2].picturePath} alt=""/>

                                        : null}

                                    {reviewPictures[2].loading && reviewPictures[2].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {reviewPictures[2].picturePath ?
                                        <i onClick={() => {
                                            deleteReviewPhoto(2, false)
                                        }} className="bi bi-x"/>
                                        : null}
                                </div>


                                <div className="image-wrapper">

                                    {reviewPictures[3].loading === false && reviewPictures[3].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setReviewPhotoIndex(3)
                                            }} htmlFor="photo4">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseReviewPhoto} accept="image/*" id="photo4"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {reviewPictures[3].picturePath ?
                                        <img onClick={() => {
                                            setReviewPhotoIndex(3)
                                        }} src={reviewPictures[3].picturePath} alt=""/>

                                        : null}

                                    {reviewPictures[3].loading && reviewPictures[3].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {reviewPictures[3].picturePath ?
                                        <i onClick={() => {
                                            deleteReviewPhoto(3, false)
                                        }} className="bi bi-x"/>
                                        : null}
                                </div>


                                <div className="image-wrapper">

                                    {reviewPictures[4].loading === false && reviewPictures[4].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setReviewPhotoIndex(4)
                                            }} htmlFor="photo5">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseReviewPhoto} accept="image/*" id="photo5"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {reviewPictures[4].picturePath ?
                                        <img onClick={() => {
                                            setReviewPhotoIndex(4)
                                        }} src={reviewPictures[4].picturePath} alt=""/>

                                        : null}

                                    {reviewPictures[4].loading && reviewPictures[4].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {reviewPictures[4].picturePath ?
                                        <i onClick={() => {
                                            deleteReviewPhoto(4, false)
                                        }} className="bi bi-x"/>
                                        : null}
                                </div>

                            </div>

                        </div>

                    </div>

                    {error &&
                    <p className="error">{error}</p>
                    }

                    <div className="actions mt-5 d-flex justify-content-end align-items-center">
                        <a onClick={() => {

                            if (categoryId !== null) {
                                window.location.href = "/products?category-id="+categoryId
                            } else {
                                window.location.href = "/products?department-id="+departmentId
                            }
                        }
                        } href="">Cancel</a>
                        <a onClick={handleAddReview}>{loading ? <Loading/> :  "Submit"}</a>

                    </div>

                </div>

            </div>

        </>
    );
}


export default Evaluate;