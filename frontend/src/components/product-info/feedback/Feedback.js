import React, {Component} from 'react';

class Feedback extends Component {
    render() {

        const phone = window.innerWidth <= 576;

        return (
            <>

                <div className="feedback mt-5">

                    <div className="main d-flex flex-wrap">

                        <div className="header d-flex justify-content-between">

                            <p>Ratings and Reviews</p>

                            <button>Write a Review</button>

                        </div>

                        <hr/>

                        <div className="number d-flex flex-column align-items-center justify-content-center">
                            <h1>4,7</h1>
                            <div className="stars d-flex">
                                <i className="bi bi-star-fill"/>
                                <i className="bi bi-star-fill"/>
                                <i className="bi bi-star-fill"/>
                                <i className="bi bi-star-fill"/>
                                <i className="bi bi-star-fill"/>
                            </div>
                            <p>46 product ratings</p>

                        </div>


                        <div className="histogram d-flex flex-column justify-content-evenly">

                            <div className="item d-flex align-items-center justify-content-between">

                                <i className="bi bi-star-fill"/>
                                <p>5</p>
                                <di className="box">
                                    <div className="color"/>
                                </di>
                                <p>40</p>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">

                                <i className="bi bi-star-fill"/>
                                <p>5</p>
                                <di className="box">
                                    <div className="color"/>
                                </di>
                                <p>40</p>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">

                                <i className="bi bi-star-fill"/>
                                <p>5</p>
                                <di className="box">
                                    <div className="color"/>
                                </di>
                                <p>40</p>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">

                                <i className="bi bi-star-fill"/>
                                <p>5</p>
                                <di className="box">
                                    <div className="color"/>
                                </di>
                                <p>40</p>
                            </div>
                            <div className="item d-flex align-items-center justify-content-between">

                                <i className="bi bi-star-fill"/>
                                <p>5</p>
                                <di className="box">
                                    <div className="color"/>
                                </di>
                                <p>40</p>
                            </div>

                        </div>


                        <div className="pie-wrapper">

                            <div className="item">

                                <div className="percent">

                                    <svg>
                                        <circle cx={phone ? "50" : "78"} cy="70" r={phone ? "40" : "50"} />
                                        <circle cx={phone ? "50" : "78"} cy="70" r={phone ? "40" : "50"} />


                                    </svg>

                                    <div className="number">
                                        <h2>13<span>%</span></h2>
                                    </div>
                                </div>

                                <p>Good value</p>

                            </div>
                            <div className="item">

                                <div className="percent">

                                    <svg>
                                        <circle cx={phone ? "50" : "78"} cy="70" r={phone ? "40" : "50"} />
                                        <circle cx={phone ? "50" : "78"} cy="70" r={phone ? "40" : "50"} />

                                    </svg>

                                    <div className="number">
                                        <h2>1<span>%</span></h2>
                                    </div>
                                </div>

                                <p>Terrible</p>

                            </div>
                            <div className="item">

                                <div className="percent">

                                    <svg>
                                        <circle cx={phone ? "50" : "78"} cy="70" r={phone ? "40" : "50"} />
                                        <circle cx={phone ? "50" : "78"} cy="70" r={phone ? "40" : "50"} />

                                    </svg>

                                    <div className="number">
                                        <h2>87<span>%</span></h2>
                                    </div>
                                </div>

                                <p>Small Factor</p>

                            </div>

                        </div>

                    </div>

                    <hr/>

                    <div className="sub">

                        <p className="title">Mos Relevant Reviews</p>

                        <div className="for-scroll">

                            <div className="review-wrapper d-flex">

                                <div className="review-section-l">

                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>

                                    <p>by <span>israel</span></p>
                                    <p>Apr 24, 2019</p>

                                </div>
                                <div className="review-section-r">

                                    <p className="title">Reliable and a pleasure to use, with a wonderful camera!</p>

                                    <p className="content">
                                        If you want the peak of Android right now, you need a Pixel 3 or 3 XL. I like
                                        the
                                        smaller size of the Pixel 3 which is more comfortable to use with one hand and
                                        to
                                        carry in my pocket. The Pixel 3 does not have the fastest processor, most RAM,
                                        most
                                    </p>

                                    <p className="about">Verified purchase: Yes | Condition: Refurbished | Sold by:
                                        cell-traders</p>

                                    <div className="photos d-flex flex-wrap justify-content-between">

                                        <img src="/images/airpod.jpeg" alt=""/>
                                        <img src="/images/pro9.png" alt=""/>
                                        <img src="/images/airpod.jpeg" alt=""/>
                                        <img src="/images/airpod.jpeg" alt=""/>
                                        <img src="/images/airpod.jpeg" alt=""/>
                                        <img src="/images/airpod.jpeg" alt=""/>


                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </>
        );
    }
}

export default Feedback;