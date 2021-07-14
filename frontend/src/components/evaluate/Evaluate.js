import React, {Component} from 'react';
import '../../css/evaluate.css';

class Evaluate extends Component {
    render() {
        return (
            <>

                <div className="evaluate mt-5 mb-5">


                    <div className="header-product d-flex">

                        <img src="/images/departments/Automotive.jpeg" alt=""/>


                        <div className="info d-flex flex-column">

                            <p>RATE AND REVIEW</p>

                            <a>Google - Pixel 3 with 64GB Memory Cell Phone (Unlocked) - Not Pink - New SEALE</a>

                            <div className="rate d-flex align-items-center mt-2">

                                <h4>Rate this product</h4>

                                <div>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                                </div>
                                <p>Awasome Sauce!</p>

                            </div>

                        </div>

                    </div>

                    <div className="forms">

                        <div className="row-aspectQuestions">

                            <p className="title">Tell us more</p>

                            <div className="fieldset bg-white">

                                <div className="question">

                                    <p>Is it a good value?</p>

                                    <div className="actions">

                                        <input name="question1" value="0" id="q_55bba1d1e4b0e12ba3df7316_0"
                                               type="radio"/>
                                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_0">yes</label>

                                        <input name="question1" value="1" id="q_55bba1d1e4b0e12ba3df7316_1"
                                               type="radio"/>
                                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_1">no</label>

                                    </div>

                                </div>
                                <hr/>
                                <div className="question">

                                    <p>Does it have long battery life?</p>

                                    <div className="actions">
                                        <input name="question2" value="0" id="q_55bba1d1e4b0e12ba3df7316_2"
                                               type="radio"/>
                                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_2">yes</label>

                                        <input name="question2" value="1" id="q_55bba1d1e4b0e12ba3df7316_3"
                                               type="radio"/>
                                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_3">no</label>

                                    </div>

                                </div>
                                <hr/>
                                <div className="question">

                                    <p>Does it have a small form factor?</p>

                                    <div className="actions">
                                        <input name="question3" value="0" id="q_55bba1d1e4b0e12ba3df7316_4"
                                               type="radio"/>
                                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_4">yes</label>

                                        <input name="question3" value="1" id="q_55bba1d1e4b0e12ba3df7316_5"
                                               type="radio"/>
                                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_5">no</label>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="row-reviewContent mt-4 d-flex flex-column position-relative">

                            <div className="text d-flex justify-content-between align-items-end">
                                <p>Write your product review</p>
                                <span>500</span>
                            </div>

                            <textarea placeholder="Describe the pros, cons, and other highlights." name="" id="" cols="20" rows="2"></textarea>

                            <div className="text d-flex justify-content-between align-items-end">
                            <p>Review title</p>
                            <span>500</span>
                            </div>
                            <textarea placeholder="Sum it up in a few words" name="" id="" cols="20" rows="2"></textarea>


                        </div>


                        <div className="images-upload mt-5">


                            <p>Pictures speak louder than words</p>

                            <div className="uploader">

                                <div className="text d-flex justify-content-between">

                                    <p>Show off what you have by adding a picture. (Add up to 5 photos)</p>

                                    <p>0 of 5 </p>

                                </div>

                                <div className="choose-images d-flex justify-content-between flex-wrap">

                                    <img src="/images/departments/Automotive.jpeg" alt=""/>
                                    <img src="/images/departments/Automotive.jpeg" alt=""/>
                                    <img src="/images/departments/Automotive.jpeg" alt=""/>
                                    <img src="/images/departments/Automotive.jpeg" alt=""/>
                                    <img src="/images/departments/Automotive.jpeg" alt=""/>

                                </div>

                            </div>

                        </div>

                        <div className="actions mt-5 d-flex justify-content-end align-items-center">
                            <a href="">Cancel</a>
                            <a href="">Submit</a>
                            
                        </div>

                    </div>

                </div>

            </>
        );
    }
}

export default Evaluate;