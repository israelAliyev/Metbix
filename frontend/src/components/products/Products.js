import React, {Component} from 'react';
import '../../css/products.css'
import {Dropdown} from "react-bootstrap";

class Products extends Component {
    render() {
        console.log(window.location.href)

        return (
            <>
                <section className="products-and-options">
                    <div className="top-bar d-flex justify-content-between align-items-center">

                        <div className="text">
                            <p>20,000 results for <span> “phones"</span></p>
                        </div>

                        <div className="options d-flex flex-wrap justify-content-between align-items-center">

                            <div className="filter-button d-none">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <i className="bi bi-funnel-fill me-1"></i>
                                      Filter
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </div>

                            <div className="rating">
                                <Dropdown alignRight>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className="bi bi-caret-down-fill ms-1"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </Dropdown.Item>

                                        <Dropdown.Item href="#/action-2">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </Dropdown.Item>

                                        <Dropdown.Item href="#/action-3">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </Dropdown.Item>

                                        <Dropdown.Item href="#/action-3">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <i className='bx bxs-star'></i>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                            </div>

                            <div className="brand">
                                <Dropdown alignRight>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Brand
                                        <i className="bi bi-caret-down-fill ms-1"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Apple
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="model">
                                <Dropdown alignRight>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Model
                                        <i className="bi bi-caret-down-fill ms-1"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Apple
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="status">
                                <Dropdown alignRight>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Status
                                        <i className="bi bi-caret-down-fill ms-1"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Fresh
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            Used
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="warranty">
                                <Dropdown alignRight>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Warranty
                                        <i className="bi bi-caret-down-fill ms-1"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Yes
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            Nos
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="sort-by">

                                <Dropdown alignRight>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Sort By
                                        <i className="bi bi-caret-down-fill ms-1"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Fresh
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            Used
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </div>

                    </div>


                    {/*products*/}
                    <div className="wrapper-products-and-options overflow-auto">

                        <div className="products d-flex flex-wrap">

                            <div className="item">
                                <div className="image">
                                    <img src="/images/pro8.png" alt=""/>
                                </div>

                                <div className="details">
                                    <div className="review d-flex justify-content-between">
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

                                    <div className="operation-buttons d-flex align-items-center mt-4 mb-2">

                                        <div className="request">
                                            <i className="bi bi-heart"/>
                                        </div>

                                        <div className="cart d-flex justify-content-between align-items-center">
                                            <p>Basketdə</p>
                                            <i className="bi bi-cart-fill"/>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="item">
                                <div className="image">
                                    <img src="/images/pro9.png" alt=""/>
                                </div>

                                <div className="details">
                                    <div className="review d-flex justify-content-between">
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

                                    <div className="operation-buttons d-flex align-items-center mt-4 mb-2">

                                        <div className="request">
                                            <i className="bi bi-heart"/>
                                        </div>

                                        <div className="cart d-flex justify-content-between align-items-center">
                                            <p>Basketdə</p>
                                            <i className="bi bi-cart-fill"/>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="item">
                                <div className="image">
                                    <img src="/images/airpod.jpeg" alt=""/>
                                </div>

                                <div className="details">
                                    <div className="review d-flex justify-content-between">
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

                                    <div className="operation-buttons d-flex align-items-center mt-4 mb-2">

                                        <div className="request">
                                            <i className="bi bi-heart"/>
                                        </div>

                                        <div className="cart d-flex justify-content-between align-items-center">
                                            <p>Basketdə</p>
                                            <i className="bi bi-cart-fill"/>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="item">
                                <div className="image">
                                    <img src="/images/pro8.png" alt=""/>
                                </div>

                                <div className="details">
                                    <div className="review d-flex justify-content-between">
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

                                    <div className="operation-buttons d-flex align-items-center mt-4 mb-2">

                                        <div className="request">
                                            <i className="bi bi-heart"/>
                                        </div>

                                        <div className="cart d-flex justify-content-between align-items-center">
                                            <p>To Basket</p>
                                            <i className="bi bi-cart-fill"/>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/*pagination */}
                            <div className="pagination ">

                                <div className="bg-white d-flex justify-content-between align-items-center">

                                    <i className="bi bi-chevron-left"></i>

                                    <p className="page-number">1</p>

                                    <i className="bi bi-chevron-right"></i>
                                </div>

                            </div>

                            {/*end of pagination*/}

                        </div>


                        <div className="side-bar">

                            <div className="price">
                                <p className="title"> Price </p>
                                <div className="price-set d-flex">
                                    <div className="d-flex">
                                        <input type="text" placeholder="max"/> <span>-</span> <input type="text"
                                                                                                     placeholder="min"/>
                                    </div>
                                    <i className="bi bi-search"/>
                                </div>

                                <div
                                    className="price-range d-flex flex-column justify-content-center align-items-start mt-3">

                                    <label>
                                        <input type="checkbox" className="me-2"/>
                                        00 - 50
                                    </label> <label>
                                    <input type="checkbox" className="me-2"/>
                                    50 - 125
                                </label> <label>
                                    <input type="checkbox" className="me-2"/>
                                    125 - 225
                                </label> <label>
                                    <input type="checkbox" className="me-2"/>
                                    225 - 500
                                </label> <label>
                                    <input type="checkbox" className="me-2"/>
                                    500 - 1000
                                </label> <label>
                                    <input type="checkbox" className="me-2"/>
                                    1000 - 2000
                                </label>

                                </div>

                            </div>


                            <hr/>

                            <div className="colors">
                                <p className="title">Colors</p>

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


                            <hr/>

                            <div className="shipment d-flex flex-column">

                                <div className="domestic-shipment d-flex flex-column">

                                    <p className="title">Domestic Shipment:</p>

                                    <label>
                                        <input type="checkbox" className="me-2"/>
                                        Yes
                                    </label> <label>
                                    <input type="checkbox" className="me-2"/>
                                    No
                                </label>
                                </div>

                                <div className="internation-shipment d-flex flex-column">

                                    <p className="title mt-2">International Shipment:</p>

                                    <label>
                                        <input type="checkbox" className="me-2"/>
                                        Yes
                                    </label> <label>
                                    <input type="checkbox" className="me-2"/>
                                    No
                                </label>
                                </div>
                            </div>

                            <hr/>

                            <div className="option">

                                <p className="title">Battery</p>

                                <input type="text" placeholder="Search battery"/>

                                <div
                                    className="option-range d-flex flex-column justify-content-center align-items-start">

                                    <label>
                                        <input type="checkbox" className="me-2"/>
                                        00 - 500
                                    </label>
                                    <label>
                                        <input type="checkbox" className="me-2"/>
                                        500 - 1000
                                    </label>
                                    <label>
                                        <input type="checkbox" className="me-2"/>
                                        1000 - 2000
                                    </label>
                                    <label>
                                        <input type="checkbox" className="me-2"/>
                                        3000 - 4000
                                    </label>
                                    <label>
                                        <input type="checkbox" className="me-2"/>
                                        4000 - 5000
                                    </label>

                                </div>

                            </div>

                        </div>


                    </div>

                </section>
            </>
        );
    }
}

export default Products;