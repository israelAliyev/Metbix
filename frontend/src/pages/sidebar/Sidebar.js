import React, {Component, useEffect} from 'react';

import '../../css/sidebar.css';
import {connect} from "react-redux";
import {postLogout, refreshToken, show_sidebar} from "../../services/index";
import department_data from '../../products-json/departments.json'
import category_data from '../../products-json/categories.json'
import currencies from '../../products-json/currency/currencies.json'

const account = JSON.parse(localStorage.getItem("__|^|__"));
const currency = JSON.parse(localStorage.getItem("currency"));

const window_width = window.innerWidth <= 1025;

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departments_border_color: false,
            languages_border_color: false,
            department_id: null,
            department_name: null,
            menu_item_name: null,
            currency: null
        }
    }


    componentDidUpdate(PrevProps, prevState) {

        if (this.state.response_refresh_tokens !== prevState.response_refresh_tokens) {

            if (this.state.response_refresh_tokens.response) {

                // TODO: update token so access token in object

                const logOutRequestUpdatedObject = {
                    ...this.logOutRequestObj(),
                    token: this.state.response_refresh_tokens.response.accessToken
                }

                this.props.post_logout(logOutRequestUpdatedObject);

            }

        }

    }

    logOutRequestObj() {

        return {

            deviceInfo: account && account.sdergt,

            token: account && atob(account.rtoyui),

            email: this.props.profile_by_email.response && this.props.profile_by_email.response.userEmail ? this.props.profile_by_email.response.userEmail : this.props.profile_by_email.response && this.props.profile_by_email.response.companyEmail ? this.props.profile_by_email.response.companyEmail : null,

            accountId: this.props.profile_by_email.response && this.props.profile_by_email.response.userId ? this.props.profile_by_email.response.userId : this.props.profile_by_email.response && this.props.profile_by_email.response.companyId ? this.props.profile_by_email.response.companyId : null,
        }
    }

    logOut() {

        // TODO: send logout

        const now1 = new Date(new Date().getTime());
        const now2 = account.nhytgb;

        if (now1.getTime() <= new Date(now2).getTime()) {

            this.props.post_refresh_token({refreshToken: account.wsxcde});

        } else {

            this.props.post_logout(this.logOutRequestObj());
        }
    }

    componentDidMount() {
        this.setCurrency();
    }

    setCurrency() {
        if (currency) {
            this.setState({currency: currency.id})
        } else {
            this.setState({currency: "USD"})
        }
    }

    render() {

        return (
            <div>
                {/*sidebar*/}
                <nav className="navbar p-0 ">

                    <div>

                        <body className="sidebar-body">

                        <div className={this.props.show_sidebar_bool.show_sidebar ? "active sidebar" : "sidebar"}>

                            <div className="logo-content">
                                <div className="logo">
                                    {!window_width && !this.state.department_name && !this.state.menu_item_name ?
                                        <div className="logo-name">Department</div>
                                        : window_width && !this.state.department_name && !this.state.menu_item_name ?

                                            <div className="logo-name">Menu</div>

                                            : this.state.menu_item_name && !this.state.department_name ?
                                                <div className="d-flex">
                                                    <i onClick={() => {
                                                        this.setState({
                                                            department_id: null,
                                                            department_name: null,
                                                            menu_item_name: null
                                                        })
                                                    }} className="bi bi-arrow-left-circle cursor-pointer"/>

                                                    <div className="logo-name">{this.state.menu_item_name}</div>
                                                </div>
                                                :
                                                <div className="d-flex">
                                                    <i onClick={() => {
                                                        this.setState({department_id: null, department_name: null})
                                                    }} className="bi bi-arrow-left-circle cursor-pointer"/>
                                                    <div className="logo-name">{this.state.department_name}</div>

                                                </div>
                                    }
                                </div>
                                <i onClick={() => {
                                    this.props.show_sidebar(false)
                                }} className='bx bx-x cursor-pointer' id="btn"/>

                            </div>


                            <div
                                className={`sidebar-items ${(this.state.department_id || this.state.menu_item_name) && 'd-none'}`}>


                                <div onClick={() => {
                                    this.setState({menu_item_name: 'Currencies'})
                                }}
                                     className="item d-flex justify-content-start cursor-pointer">

                                    <i className="ri-money-dollar-circle-line me-2"/>
                                    <h5 className="">Currencies - ({this.state.currency})</h5>
                                    <i className="bi bi-chevron-right"/>
                                </div>

                                <hr style={{
                                    backgroundColor: "white",
                                    color: "white",
                                    height: "0.1rem",
                                    borderRadius: "10px"
                                }}/>

                                {department_data.map((item) => (
                                    <div onClick={() => {
                                        this.setState({
                                            department_id: item.departmentId,
                                            department_name: item.department
                                        })
                                    }} className="item d-flex justify-content-start cursor-pointer">
                                        <i className={item.icon}/>
                                        <h5 className="">{item.department}</h5>
                                        <i className="bi bi-chevron-right"/>
                                    </div>
                                ))}
                            </div>

                            <div className={`sidebar-items ${!this.state.department_id && 'd-none'}`}>

                                {this.state.department_id &&
                                category_data.filter(cate => cate.department.departmentId === this.state.department_id).map((item) => (
                                    <div onClick={() => {
                                        window.location.href = "/products?category-id=" + item.categoryId
                                    }} className="item d-flex justify-content-start rounded-2 cursor-pointer">
                                        <i className="bi bi-chevron-right"/>
                                        <h5 className="ms-2">{item.categoryName}</h5>
                                    </div>

                                ))}
                            </div>

                            <div className={`sidebar-items ${!this.state.menu_item_name && 'd-none'}`}>

                                {this.state.menu_item_name &&
                                currencies.map((item) => (
                                    <div onClick={() => {
                                        localStorage.setItem("currency", JSON.stringify(item));
                                        this.setState({menu_item_name:null})
                                        window.location.href = window.location.pathname
                                    }} className="item d-flex justify-content-start rounded-2 cursor-pointer">
                                        <i className="bi bi-chevron-right"/>
                                        <h5 className="ms-2">{item.id}</h5>
                                    </div>

                                ))}
                            </div>

                            <div className="profile_content">
                                <div className="profile">

                                    {this.props.profile_by_email.response ?
                                        <div onClick={() => {
                                            window.location.href = this.props.profile_by_email.response.userId ? "/user?user-id=" + this.props.profile_by_email.response.userId : "/company?company-id=" + this.props.profile_by_email.response.companyId
                                        }} className="profile_details">
                                            <img src={this.props.profile_by_email.response.photo} alt=""/>
                                            <div className="name_job">
                                                <div className="name">{this.props.profile_by_email.response.name}</div>
                                                <div
                                                    className="job">{this.props.profile_by_email.response.userId ? "User" : "Company"}</div>
                                            </div>
                                        </div>
                                        :
                                        <div className="profile_details">
                                            <img src="/images/avatar.png" alt=""/>
                                            <div className="name_job">
                                                <div className="name">Login</div>
                                                <div className="job">Not logged in</div>
                                            </div>
                                        </div>
                                    }


                                    {this.props.profile_by_email.response ?
                                        <i onClick={() => {
                                            this.logOut()
                                        }} className="bi bi-box-arrow-in-left" id="log_out"/>
                                        :
                                        <i onClick={() => {
                                            window.location.href = "/login"
                                        }} className="bi bi-box-arrow-in-right" id="log_out"/>
                                    }
                                </div>
                            </div>


                        </div>

                        </body>

                        <div className={this.props.show_sidebar_bool.show_sidebar && "sidebar-overlay"} onClick={() => {
                            this.props.show_sidebar(false)
                        }}>
                        </div>
                    </div>

                </nav>


            </div>
        );
    }
}

const map_state_props = state => {
    return {
        show_sidebar_bool: state.show_sidebar,
        profile_by_email: state.get_profile_by_email,
        response_refresh_token: state.refresh_token
    }
};

const map_dispatch_to_props = dispatch => {
    return {
        show_sidebar: (bool) => dispatch(show_sidebar(bool)),
        post_logout: (obj) => dispatch(postLogout(obj)),
        post_refresh_token: (obj) => dispatch(refreshToken(obj)),
    }
};

export default connect(map_state_props, map_dispatch_to_props)(Sidebar);