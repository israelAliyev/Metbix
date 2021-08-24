import React, {Component} from 'react';
import '../../css/navbar.css';
import {createGlobalStyle} from "styled-components";
import {connect} from "react-redux";
import {show_sidebar} from "../../services/index";
import Sidebar from "../sidebar/Sidebar";
import {Dropdown} from "react-bootstrap";


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchType: "Products",
            scroll_active: "",
            searchKey: null
        }
    }

    changeNavbar = () => {
        if (window.scrollY > 10) {
            this.setState({scroll_active: "scroll-active"})
        } else {
            this.setState({scroll_active: ""})
        }
    }

    handleSearchKey = () => {
        if (this.state.searchKey !== "" && this.state.searchKey !== null) {

            if (this.state.searchType === "Products") {
                window.location.href = "/products?search=" + this.state.searchKey
            } else {
                window.location.href = "/search-profiles?search=" + this.state.searchKey
            }
        } else {
            window.location.reload();
        }


    }

    render() {

        const GlobalStyle = createGlobalStyle`
          :root {
            overflow-x: hidden;
            overflow-y: hidden;
          }`


        window.addEventListener("scroll", this.changeNavbar);


        return (

            <div>

                {this.props.show_sidebar_bool.show_sidebar && <GlobalStyle/>}

                {/*Main Navbar*/}
                <nav className={`main-navbar navbar navbar-expand-lg`}>

                    <div className="container-fluid">

                        {/*Site logo on Navigation bar */}
                        <a className="navbar-brand" href="/">
                            <img className="img img-fluid " src="/images/logo.png"/>
                        </a>

                        <li className="for-responsive-logo" href="#">
                            <img width="140" className=" img img-fluid" src="/images/logo.png" alt="responsive-logo"/>
                        </li>

                        {/*colapse items for responsive design*/}
                        <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">


                            {/*Login and register form on navbar */}
                            <li className="nav-item mt-1">
                                <div className="navbar-account-dropdown">

                                    <Dropdown alignRight={true}>
                                        <Dropdown.Toggle variant="none" id="dropdown-basic">

                                            <div className="d-flex flex-column align-items-start">
                                                <span className="navbar-account-mymetbix-text">My Metbix</span>
                                                <span className="navbar-account-account-types-text">Account Types
                                                <span className="ms-1"><i className="fas fa-caret-down"/></span>
                                                </span>
                                            </div>
                                        </Dropdown.Toggle>


                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/login">

                                                <li><a className="dropdown-item">Login</a></li>
                                            </Dropdown.Item>

                                            <Dropdown.Item href="/register">

                                                <li><a className="dropdown-item">Register</a></li>
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                            </li>

                            {/*search form that hase a drop search types down and yellow button*/}
                            <div className="navbar-search-form">

                                <li className="nav-item">
                                    <form className="form-inline mt-1 navbar-for-search-form-border">
                                        <div className="input-group">

                                            <Dropdown>

                                                <Dropdown.Toggle variant="none">

                                                    {this.state.searchType}
                                                    <span className="ms-1"><i className="fas fa-caret-down"/></span>

                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>

                                                    <Dropdown.Item>

                                                        <li onClick={() => {
                                                            this.setState({searchType: "Products"})
                                                        }}><a className="dropdown-item">Products</a></li>
                                                    </Dropdown.Item>


                                                    <Dropdown.Item>

                                                        <li onClick={() => {
                                                            this.setState({searchType: "Users"})
                                                        }}><a className="dropdown-item">Profiles</a></li>
                                                    </Dropdown.Item>


                                                </Dropdown.Menu>
                                            </Dropdown>

                                            <input onChange={(e) => {
                                                this.setState({searchKey: e.target.value})
                                            }} autoComplete="off" type="text" name="query" id="query"
                                                   className="form-control navbar-search-form-text-form"/>

                                            <button
                                                onClick={() => {
                                                    this.handleSearchKey()
                                                }}
                                                className={`btn btn-warning navbar-search-form-button ${this.props.show_sidebar_bool.show_sidebar && `d-none`} `}
                                                type="button"
                                                id="button-addon1">
                                                <img width="23" src="/images/loupe.png"/>
                                            </button>

                                        </div>

                                    </form>
                                </li>

                            </div>


                            {/*changing currency 0f products and selecting laguages*/}

                            <li className="nav-item mt-2-5">

                                <div className="dropdown navbar-languages-currency">

                                    <div className="d-flex text-white mt-0 mt-2"
                                         id="dropdownMenuButtonLanguagesAndCurrency"
                                         data-bs-toggle="dropdown"
                                         aria-expanded="false">
                                        <span><img width="23" src="/images/aze.png"/> <span> - AZN </span>
                                            <span><i className="fas fa-caret-down"/></span></span>
                                    </div>

                                    <ul className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="dropdownMenuButtonLanguagesAndCurrency">
                                        <h6 className="text-center">Languages</h6>
                                        <li>
                                            <li className="dropdown-submenu">
                                                <a className="dropdown-item" tabindex="-1" href="#"><img width="23"
                                                                                                         src="/images/aze.png"/> Azerbaijan</a>
                                                <ul className="dropdown-menu">

                                                    <li className="dropdown-item">
                                                        <input type="text" placeholder="Search language.."/>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider"/>
                                                    </li>
                                                    <div className="for-overflow-dropdown-items">

                                                        <li className="dropdown-item"><img width="23"
                                                                                           src="/images/aze.png"/> Second
                                                            level
                                                        </li>

                                                    </div>
                                                </ul>
                                            </li>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <h6 className="text-center">Currency</h6>
                                        <li>
                                            <li className="dropdown-submenu">
                                                <a className="dropdown-item" tabindex="-1" href="#">AZN</a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item">
                                                        <input type="text" placeholder="Search currency.."/>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider"/>
                                                    </li>
                                                    <div className="for-overflow-dropdown-items">

                                                        <li className="dropdown-item">AZN</li>
                                                        <li className="dropdown-item">USD</li>
                                                        <li className="dropdown-item">ER</li>
                                                    </div>
                                                </ul>
                                            </li>
                                        </li>
                                    </ul>
                                </div>

                            </li>


                            {/*User's country or */}
                            <li className="nav-item mt-1 navbar-location-country">
                                <div className="dropdown">
                                    <div className="d-flex text-white" id="dropdownMenuButtonCountries"
                                         data-bs-toggle="dropdown"
                                         aria-expanded="false">
                                        <img src="/images/location.png" className="img-fluid"/>
                                        <div className="d-flex flex-column">
                                            <span className="fs-7 text-secondary">Deliver To:</span>
                                            <span className="fw-bold navbar-location-country-name">Azerbaijan <span><i
                                                className="fas fa-caret-down"/></span> </span>
                                        </div>
                                    </div>

                                    <ul className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="dropdownMenuButtonCountries">
                                        <li><a className="dropdown-item">Azerbaijan</a></li>
                                        <li><a className="dropdown-item">Turkey</a></li>
                                        <li><a className="dropdown-item">East Turkestan</a></li>
                                    </ul>
                                </div>
                            </li>

                            {/*notification with animation and count of messages*/}
                            <li className="nav-item  navbar-notification">
                                <div className="wrapper">
                                    <div className="bell">
                                        <div className="anchor material-icons layer-1"
                                             style={{animation: "animation-layer-1 infinite 5000ms"}}>
                                            notifications_active
                                        </div>
                                        <div className="anchor material-icons layer-2"
                                             style={{animation: "animation-layer-2 infinite 5000ms"}}>
                                            notifications
                                        </div>
                                        <div className="anchor material-icons layer-3"
                                             style={{animation: "animation-layer-3 infinite 5000ms"}}>
                                            notifications
                                        </div>
                                        <span>99</span>
                                    </div>
                                </div>
                            </li>


                            {/*Shopping cart or basket */}
                            <li className="nav-item navbar-basket">
                                <img width="46" src="/images/shopping-basket2.png" className="img-fluid"/>
                                <span>99</span>
                            </li>
                        </div>
                    </div>
                </nav>


                {/*subnavbar */}
                <nav className="navbar sub-navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse d-flex justify-content-around" id="SubnavbarNav">


                            <li onClick={() => {
                                this.props.show_sidebar(true)
                            }}
                                className="nav-item d-flex justify-content-center align-items-center cursor-pointer">
                                <img width="39" src="https://img.icons8.com/ios/500/000000/menu-squared-2--v1.png"/>
                                <a>Department</a>
                            </li>

                            <li className="nav-item  d-flex align-items-center cursor-pointer">
                                <img width="44" src="https://img.icons8.com/material/500/000000/opencart.png"/>
                                <a href="">Sell on Metbix</a>
                            </li>

                            <li className="nav-item  d-flex justify-content-center align-items-center cursor-pointer">
                                <img width="41" src="https://img.icons8.com/ios/500/000000/flip-chart.png"/>
                                <a href="">Finance</a>
                            </li>

                            <li className="nav-item  d-flex justify-content-center align-items-center cursor-pointer">
                                <img width="42" src="https://img.icons8.com/wired/500/000000/paper-plane.png"/>
                                <a href="">Shipping</a>
                            </li>

                            <li className="nav-item  d-flex justify-content-center align-items-center cursor-pointer">
                                <img width="39" src="https://img.icons8.com/ios/500/000000/info-squared.png"/>
                                <a href="">Help</a>
                            </li>
                        </div>

                    </div>
                </nav>


                {/*search bar for responsive design */}
                <nav className={`navbar search-bar d-none`}>
                    <div className="container-fluid">
                        <form className="form-inline mt-1 navbar-for-search-form-border w-100">
                            <div className="input-group">

                                <input autoComplete="off" type="text" name="query" id="query"
                                       className="form-control" placeholder="Search..."/>

                                <button className="btn btn-warning navbar-search-form-button"
                                        type="button"
                                        id="button-addon1">
                                    <img width="23" src="/images/loupe.png"/>
                                </button>

                            </div>
                        </form>
                    </div>

                </nav>


            </div>
        );
    }
}


const map_state_props = state => {
    return {
        show_sidebar_bool: state.show_sidebar
    }
};

const map_dispatch_to_props = dispatch => {
    return {
        show_sidebar: (bool) => dispatch(show_sidebar(bool))
    }
};

export default connect(map_state_props, map_dispatch_to_props)(Navbar);