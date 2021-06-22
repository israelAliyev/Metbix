import React, {Component} from 'react';
import '../../css/products.css'
import {Dropdown} from "react-bootstrap";

class Products extends Component {
    render() {
        return (
            <>
                <section className="products-and-options">
                    <div className="top-bar d-flex justify-content-between align-items-center">

                        <div className="text">
                            <p>20,000 results for <span> “phones"</span></p>
                        </div>


                        <div className="options d-flex justify-content-between align-items-center">

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

                            <div className="delivery">
                                <Dropdown alignRight>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Delivery
                                        <i className="bi bi-caret-down-fill ms-1"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Yes
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            No
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



                    <div className="side-bar">

                        <div className="price">
                            <p className="title"> Price </p>
                            <div className="price-set d-flex">
                                <div className="d-flex">
                                    <input type="text" placeholder="max"/> <span>-</span> <input type="text" placeholder="min"/>
                                </div>
                                <i className="bi bi-search"/>
                            </div>

                            <div className="price-range d-flex flex-column justify-content-center align-items-start mt-3">

                                <label>
                                    <input type="checkbox" className="me-2"/>
                                    00 - 50
                                </label>   <label>
                                    <input type="checkbox" className="me-2"/>
                                    50 - 125
                                </label>   <label>
                                    <input type="checkbox" className="me-2"/>
                                    125 - 225
                                </label>   <label>
                                    <input type="checkbox" className="me-2"/>
                                    225 - 500
                                </label>   <label>
                                    <input type="checkbox" className="me-2"/>
                                    500 - 1000
                                </label>  <label>
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

                        <div className="option">

                            <p className="title">Battery</p>

                            <input type="text" placeholder="Search battery"/>

                            <div className="option-range d-flex flex-column justify-content-center align-items-start">

                                <label>
                                    <input type="checkbox" className="me-2"/>
                                    00 - 500
                                </label>

                            </div>

                        </div>

                    </div>

                    <div className="products">

                    </div>

                </section>
            </>
        );
    }
}

export default Products;