import React, {Component} from 'react';
import '../../css/footer.css';
import {connect} from "react-redux";
import {show_sidebar} from "../../services/index";
import Sidebar from "../sidebar/Sidebar";

class Footer extends Component {
    render() {
        return (
            <>

                <section className="mt-4">

                    <footer className="footer d-flex flex-column justify-content-center">
                        
                        <div className="signup">
                            <input type="text" placeholder="Enter email.."/>
                            <button>Signup</button>
                        </div>
                        <hr className="bg-white mb-5"/>

                        <div className="container">
                            <div className="row">

                                <div className="footer-col">
                                    <h4>company</h4>
                                    <ul>
                                        <li><a href="#">about us</a></li>
                                        <li><a href="#">our services</a></li>
                                        <li><a href="#">privacy policy</a></li>
                                        <li><a href="#">affiliate program</a></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h4>get help</h4>
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">shipping</a></li>
                                        <li><a href="#">returns</a></li>
                                        <li><a href="#">order status</a></li>
                                        <li><a href="#">payment options</a></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h4>online shop</h4>
                                    <ul>
                                        <li><a href="#">watch</a></li>
                                        <li><a href="#">bag</a></li>
                                        <li><a href="#">shoes</a></li>
                                        <li><a href="#">dress</a></li>
                                    </ul>
                                </div>

                                <div className="footer-col footer-contact-us">
                                    <h4>contact us</h4>
                                    <ul>
                                        <li>Email:</li>
                                        <li><input className="rounded-2 footer-contact-us-email-form w-100"
                                                   type="text"/></li>
                                        <li>Message:</li>
                                        <li><textarea rows="3"
                                                      className="rounded-2 footer-contact-us-message-form w-100"/>
                                        </li>
                                        <li>
                                            <button className="btn btn-danger mt-2">Send</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <hr className="text-white"/>
                            <div className="d-flex justify-content-center social-links">
                                <div className="footer-col">
                                    <div>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </footer>


                    <div className="responsive-controlling d-flex justify-content-around bg-white d-lg-none shadow-lg">

                        <div onClick={() => {
                            this.props.show_sidebar(true)
                        }}>
                            <a>
                                <img width="25" src="/images/menu1.png"/>
                                <p className="mt-2">Menu</p>
                            </a>
                        </div>

                        <div>
                            <a href="">
                                <i className="bi bi-person"/>
                                <p className="mt-2">Account</p>
                            </a>
                        </div>


                        <div>
                            <a href="">
                                <i className="bi bi-house"/>
                                <p className="mt-2">Home</p>
                            </a>
                        </div>

                        <div>
                            <a href="">
                                <i className="bi bi-app-indicator"/>
                                <p className="mt-2">Notification</p>
                            </a>
                        </div>

                        <div>
                            <a href="">
                                <i className="bi bi-bag"/>
                                <p className="mt-2">Cart</p>
                            </a>
                        </div>
                    </div>

                </section>

                <Sidebar/>
            </>
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

export default connect(map_state_props, map_dispatch_to_props)(Footer);