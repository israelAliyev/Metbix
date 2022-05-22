import React, {Component} from 'react';
import '../../css/footer.css';
import {connect} from "react-redux";
import {show_sidebar} from "../../services/index";
import Sidebar from "../sidebar/Sidebar";

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            salam:"as"
        }
    }

    render() {
        return (
            <>

                <footer>
                    <div className="footer-content">
                        <h3>Metbix</h3>
                        <p>It is more than just sales. Combining quality and reliability in one</p>
                        <ul className="socials">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <p>Company © 2020-2021 Metbix.com All rights reserved</p>
                    </div>
                </footer>

                <div className="responsive-controlling d-flex justify-content-around bg-white d-lg-none shadow-lg">

                    <div onClick={() => {
                        this.props.show_sidebar(true)
                    }}>
                        <a>
                            <i className="ri-menu-unfold-line"></i>
                            <p className="mt-2">Menu</p>
                        </a>
                    </div>

                    <div>
                        <a href={this.props.profile_by_email.response && this.props.profile_by_email.response.userId ? "/user?user-id=" + this.props.profile_by_email.response.userId : this.props.profile_by_email.response && this.props.profile_by_email.response.companyId ?  "/company?company-id=" + this.props.profile_by_email.response.companyId : "/login"}>
                            <i className="ri-account-pin-circle-line"></i>
                            <p className="mt-2">Account</p>
                        </a>
                    </div>


                    <div>
                        <a href="/">
                            <i className="ri-home-smile-2-line"></i>
                            <p className="mt-2">Home</p>
                        </a>
                    </div>

                    <div>
                        <a href="/chat">
                            <i className="ri-message-3-line"></i>
                            <p className="mt-2">Notification</p>
                        </a>
                    </div>

                    <div>
                        <a href="/basket">
                            <i className="ri-shopping-bag-line"></i>
                            <p className="mt-2">Cart</p>
                        </a>
                    </div>
                </div>

                <Sidebar/>
            </>
        );
    }
}


const map_state_props = state => {
    return {
        show_sidebar_bool: state.show_sidebar,
        profile_by_email: state.get_profile_by_email,

    }
};

const map_dispatch_to_props = dispatch => {
    return {
        show_sidebar: (bool) => dispatch(show_sidebar(bool))
    }
};

export default connect(map_state_props, map_dispatch_to_props)(Footer);