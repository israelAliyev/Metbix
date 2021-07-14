import React, {Component} from 'react';
import '../../css/sellproduct.css'
import {Dropdown} from "react-bootstrap";

class SellProduct extends Component {
    render() {
        return (
            <>
                <div className="sell-product mb-5">

                    <h3>Sell Products on Metbix</h3>


                    <div className="details">

                        <h4>Enter Product Details</h4>

                        <div className="form departments">

                            <p>Departments</p>

                            <select>
                                <option value="0">Select car:</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                            </select>
                        </div>


                        <div className="form categories">

                            <p>Categories</p>

                            <select>
                                <option value="0">Select car:</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                            </select>
                        </div>


                        <div className="form subcategories">

                            <p>SubCategories</p>

                            <select>
                                <option value="0">Select car:</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                            </select>
                        </div>


                        <div className="form subcategory-types">

                            <p>SubCategory Types</p>

                            <select>
                                <option value="0">Select car:</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                            </select>
                        </div>


                        <div className="form brand">

                            <p>Brands</p>

                            <select>
                                <option value="0">Select car:</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                            </select>
                        </div>

                        <div className="form model">

                            <p>Models</p>

                            <select>
                                <option value="0">Select car:</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                            </select>
                        </div>

                        <hr/>

                        <div className="form colors">

                            <p>Choose Colors</p>

                            <div className="d-flex">
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

                        <div className="form options">

                            <p>Choose Options</p>


                            <div className="item d-flex flex-column">

                                <p>Camera</p>

                                <select>
                                    <option value="0">Select car:</option>
                                    <option value="1">Audi</option>
                                </select>

                            </div>

                            <div className="item d-flex flex-column">

                                <p>Memory</p>

                                <select>
                                    <option value="0">Select car:</option>
                                    <option value="1">Audi</option>
                                </select>

                            </div>

                        </div>


                        <hr/>


                        <div className="descriptions">

                            <div className="short">

                                <p>Short Description</p>

                                <input type="text"/>

                            </div>


                            <div className="long">
                                <p>Long Description</p>

                                <textarea name="" id="" cols="30" rows="10"/>

                            </div>

                        </div>


                        <div className="upload-images mt-4">

                            <p>Upload Images</p>

                            <div className="images-and-video d-flex flex-wrap justify-content-between">
                                <div className="texts w-100 d-flex justify-content-between">
                                    <p>You can add 6 photos</p>
                                    <p>Delete All</p>
                                </div>

                                <div className="main-picture">
                                    <img src="/images/departments/Software.png" alt=""/>
                                </div>

                                <div className="little-pictures d-flex flex-column justify-content-between">

                                    <img src="/images/departments/Software.png" alt=""/>
                                    <img src="/images/upload-img4.png" alt=""/>
                                    <img src="/images/upload-img4.png" alt=""/>
                                    <img src="/images/upload-img4.png" alt=""/>
                                    <img src="/images/upload-img4.png" alt=""/>
                                    <img src="/images/upload-img4.png" alt=""/>


                                </div>


                            </div>


                        </div>

                        <hr/>


                        <div className="price d-flex">

                            <p>Price</p>

                            <div className="current d-flex flex-column">
                                <span>Current Price</span>
                                <input type="text"/>
                            </div>

                            <div className="old d-flex flex-column">
                                <span>Old Price</span>
                                <input type="text"/>
                            </div>

                        </div>


                        <div className="form quantity">
                            <p>Quantity</p>

                            <input type="text"/>
                        </div>


                        <div className="form weight">
                            <p>Weight</p>

                            <input type="text"/>
                        </div>

                        <div className="form Condition">
                            <p>Condition</p>

                            <input type="text"/>
                        </div>

                        <hr/>

                        <div className="form warranty">

                            <p>Warranty</p>

                            <select>
                                <option value="0">Select car:</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                            </select>
                        </div>


                        <div className="shipping d-flex mt-3">

                            <p>Shipping</p>

                            <div className="domestic d-flex flex-column">
                                <span>Domestic</span>
                                <select>
                                    <option value="0">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>

                            <div className="international d-flex flex-column">
                                <span>International</span>
                                <select>
                                    <option value="0">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>

                        </div>


                        <div className="form production-year mt-4">
                            <p>Production Year</p>

                            <input type="text" autoComplete="off" placeholder="yyyy"/>
                        </div>

                        <div className="form phone mt-5 flex-wrap">

                            <p>Your Phone Number</p>


                            <div className="d-flex align-items-center">

                                <Dropdown alignRight>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <img width="22" src="/images/aze.png"/>
                                        +994
                                        <i className="bi bi-chevron-down"/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <img width="22" src="/images/aze.png"/>
                                            +994
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <input type="text"/>
                            </div>

                        </div>

                        <div className="form email mt-3 flex-wrap">

                            <p>Your Email Address</p>

                            <input type="text"/>

                        </div>

                        <div className="button">
                            <button>Submit</button>
                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default SellProduct;