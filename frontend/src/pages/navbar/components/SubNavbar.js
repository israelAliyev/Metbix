import React from 'react';
import {show_sidebar} from "../../../services";
import {useDispatch} from "react-redux";

function SubNavbar(props) {

    const dispatch = useDispatch();

    return (
        <>
            {/*subnavbar */}
            <nav className="navbar sub-navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div
                        className="collapse navbar-collapse d-flex justify-content-around"
                        id="SubnavbarNav"
                    >
                        <li
                            onClick={() => {dispatch(show_sidebar(true))}}
                            className="nav-item d-flex justify-content-center align-items-center cursor-pointer"
                        >
                            <img width="34" src="/images/departments/list.png"/>
                            <a>Department</a>
                        </li>

                        <li onClick={() => {window.location.href="/sell-product"}} className="nav-item d-flex jus align-items-center cursor-pointer">
                            <img width="37" src="/images/departments/sell.png"/>
                            <a>Sell on Metbix</a>
                        </li>

                        <li onClick={() => {window.location.href="/finance"}} className="nav-item  d-flex justify-content-center align-items-center cursor-pointer">
                            <img width="36" src="/images/departments/finance.png"/>
                            <a>Finance</a>
                        </li>

                        <li onClick={() => {window.location.href="/help"}} className="nav-item  d-flex justify-content-center align-items-center cursor-pointer">
                            <img width="39" src="/images/departments/ship.png"/>
                            <a>Shipping</a>
                        </li>

                        <li onClick={() => {window.location.href="/help"}} className="nav-item  d-flex justify-content-center align-items-center cursor-pointer">
                            <img width="35" src="/images/departments/help.png"/>
                            <a>Help</a>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default SubNavbar;