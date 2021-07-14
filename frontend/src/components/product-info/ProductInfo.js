import React, {Component} from 'react';
import '../../css/productinfo.css'
import Slider from "./slider/Slider";
import '../../css/sliderproductinfo.css';
import '../../css/responsiveproductinfo.css';
import {Dropdown} from "react-bootstrap";
import Company from "./company/Company";
import Message from "./message/Message";
import About from "./about/About";
import Feedback from "./feedback/Feedback";
import Questions from "./questions/Questions";

class ProductInfo extends Component {
    render() {
        return (
            <>

                <section className="product-info mt-3 container mb-5">

                    <div className="main d-flex justify-content-between">

                        <div className="photos">
                            <Slider/>
                        </div>
                        <div className="operations d-flex flex-column">

                            <div className="description">
                                <span>Apple iphone 7 plus</span>
                                <p>Bu telefon superdi. Arxasi aclmeyib. Ustada olmeyib. Rengi gumusudur yaddasi 32 gb
                                    dir taa qalanlarini neynisen saga ne alisan al alimisan get kerem dayidan.</p>
                            </div>

                            <div className="review d-flex flex-column">

                                <div className="d-flex align-items-center">
                                    <p>Seller: <span>Israel</span></p>

                                    <p>Country/City: <span>Azerbaijan Gakh</span></p>
                                </div>

                                <div className="d-flex">

                                    <p className="d-flex align-items-center">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </p>

                                    <p>160 review</p>

                                    <p>120 question & answer</p>
                                </div>
                            </div>


                            <div className="price d-flex align-items-center justify-content-between">
                                <span>- 21%</span>
                                <p className="old-price">169 TL</p>
                                <p>133 TL</p>
                            </div>

                            <hr/>
                            <div className="options mb-2 mt-2">

                                <div className="count">
                                    <p>Quantity: </p>
                                    <i className="bi bi-dash"></i>
                                    <input type="text"/>
                                    <i className="bi bi-plus"></i> <span>Max 5 dene sece bilersiz</span>
                                </div>

                                <div className="colors mb-2">

                                    <p>Color:</p>

                                    <div className="colors-range d-flex flex-wrap">

                                        <input className="bg-dark" type="checkbox"/>
                                        <input className="bg-danger" type="checkbox"/>
                                        <input className="bg-primary" type="checkbox"/>
                                        <input className="bg-secondary" type="checkbox"/>
                                        <input className="bg-success" type="checkbox"/>
                                        <input className="bg-warning" type="checkbox"/>
                                        <input className="bg-dark" type="checkbox"/>
                                        <input className="bg-danger" type="checkbox"/>
                                        <input className="bg-primary" type="checkbox"/>
                                        <input className="bg-secondary" type="checkbox"/>
                                        <input className="bg-success" type="checkbox"/>
                                        <input className="bg-warning" type="checkbox"/>
                                        <input className="bg-dark" type="checkbox"/>
                                        <input className="bg-danger" type="checkbox"/>
                                        <input className="bg-primary" type="checkbox"/>
                                        <input className="bg-secondary" type="checkbox"/>
                                        <input className="bg-success" type="checkbox"/>
                                        <input className="bg-warning" type="checkbox"/>

                                    </div>
                                </div>


                                <div className="option d-flex flex-column ">

                                    <p className="title">Memory:</p>

                                    <div className="option-item d-flex align-items-center flex-wrap">
                                        <span>4GB</span>
                                        <span>8GB</span>
                                        <span>16GB</span>
                                        <span>32GB</span>
                                        <span>64GB</span>
                                        <span>128GB</span>
                                        <span>256Gb</span>
                                    </div>

                                </div>
                                <div className="option d-flex flex-column ">

                                    <p className="title">Battery:</p>

                                    <div className="option-item d-flex align-items-center flex-wrap">
                                        <span>1000Ap</span>
                                        <span>2000Ap</span>
                                        <span>3000Ap</span>
                                        <span>4000Ap</span>
                                        <span>5000Ap</span>
                                        <span>6000Ap</span>
                                    </div>
                                </div>

                                <div className="option d-flex flex-column ">

                                    <p className="title">Camera:</p>

                                    <div className="option-item d-flex align-items-center flex-wrap">
                                        <span>5px</span>
                                        <span>10px</span>
                                        <span>12px</span>
                                        <span>20px</span>
                                        <span>64px</span>
                                        <span>128px</span>
                                    </div>
                                </div>


                            </div>

                            <hr/>
                            <div className="buttons mt-4 d-flex flex-wrap">

                                <a className="request">
                                    <span>Send request</span>
                                    <i className="bi bi-heart-fill"></i>
                                </a>
                                <a className="cart">
                                    <span>Add to cart</span>
                                    <i className="bi bi-cart-fill"></i>
                                </a>
                                <a className="store">
                                    <span>Sell in my Store</span>
                                    <i className="bi bi-archive-fill"></i>
                                </a>


                                <div className="share d-flex align-items-center">
                                    <p>Share At: </p>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-whatsapp"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                    <i className="fab fa-pinterest-p"></i>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="sub">
                        <Company/>
                        <About/>
                        <Feedback/>
                        <Questions/>
                        <Message/>

                    </div>

                </section>

            </>
        );
    }
}

export default ProductInfo;