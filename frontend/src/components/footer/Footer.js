import React, {Component} from 'react';
import '../../css/footer.css';

class Footer extends Component {
    render() {
        return (
            <div>


                <footer className="footer">
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
                                    <li><input size="27" className="rounded-2 footer-contact-us-email-form"
                                               type="text"/></li>
                                    <li>Message:</li>
                                    <li><textarea rows="3" className="rounded-2 footer-contact-us-message-form w-100"/></li>
                                    <li>
                                        <button className="btn btn-danger mt-2">Send</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <hr className="text-white"/>
                        <div className="d-flex justify-content-around">
                            <div className="footer-col">
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;