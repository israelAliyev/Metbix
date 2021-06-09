import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import OutsideClickHandler from "react-outside-click-handler";
import '../../css/sidebar.css';
import {connect} from "react-redux";
import {show_sidebar} from "../../services/index";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departments_border_color: false,
            languages_border_color: false,
            first_menu : true
        }
    }

    render() {
        return (
            <div>

                {/*sidebar*/}
                <nav className="navbar p-0">

                    <div>

                        <body className="sidebar-body">

                        <div className={this.props.show_sidebar_bool.show_sidebar ? "active sidebar" : "sidebar"}>

                            <div className="logo-content">
                                <div className="logo">
                                    {this.state.first_menu ? <div className="logo-name">Department</div>
                                        :
                                        <div className="d-flex">
                                            <i onClick={() => {
                                                this.setState({first_menu: true})
                                            }} className="bi bi-arrow-left-circle cursor-pointer"/>
                                            <div className="logo-name ms-5">Electronics</div>

                                        </div>
                                    }
                                </div>
                                <i onClick={() => {
                                    this.props.show_sidebar(false)
                                }} className='bx bx-x cursor-pointer' id="btn"/>

                                <input type="text" placeholder="search.."/>

                            </div>


                            <div className={`sidebar-items ${!this.state.first_menu && 'd-none'}`}>

                                <div onClick={() => {this.setState({first_menu : false})}} className="item d-flex justify-content-start rounded-2 cursor-pointer">
                                    <i className="ri-headphone-line me-2"/>
                                    <h5 className="">Electronics</h5>
                                    <i className="bi bi-chevron-right"></i>
                                </div>

                                <div className="item d-flex justify-content-start rounded-2 cursor-pointer">
                                    <i className="bi bi-controller me-2"/>
                                    <h5 className="">Game</h5>
                                    <i className="bi bi-chevron-right"></i>
                                </div>

                                <div className="item d-flex justify-content-start rounded-2  cursor-pointer">
                                    <i className="bi bi-pen me-2"></i>
                                    <h5 className="">Job</h5>
                                    <i className="bi bi-chevron-right"></i>
                                </div>


                                <div className="item d-flex justify-content-start rounded-2 cursor-pointer">
                                    <i className="ri-roadster-line me-2"/>
                                    <h5 className="">Car</h5>
                                    <i className="bi bi-chevron-right"></i>
                                </div>

                            </div>

                            <div className={`sidebar-items ${this.state.first_menu && 'd-none'}`}>

                                <div className="item d-flex justify-content-start rounded-2 cursor-pointer">
                                    <i className="bi bi-chevron-right"/>
                                    <h5 className="ms-2">Phone</h5>

                                </div>

                                <div className="item d-flex justify-content-start rounded-2 cursor-pointer">
                                    <i className="bi bi-chevron-right"/>
                                    <h5 className="ms-2">Laptop</h5>

                                </div>

                                <div className="item d-flex justify-content-start rounded-2  cursor-pointer">
                                    <i className="bi bi-chevron-right"/>
                                    <h5 className="ms-2">Playstation</h5>
                                </div>


                                <div className="item d-flex justify-content-start rounded-2 cursor-pointer">
                                    <i className="bi bi-chevron-right"/>
                                    <h5 className="ms-2">Tablet</h5>
                                </div>

                            </div>

                            <div className="profile_content">
                                <div className="profile">
                                    <div className="profile_details">
                                        <img src="/images/recb.jpg" alt=""/>
                                        <div className="name_job">
                                            <div className="name">Recep Ivedik</div>
                                            <div className="job">User</div>
                                        </div>
                                    </div>

                                    <i className='bi bi-box-arrow-left cursor-pointer' id="log_out"/>

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
        show_sidebar_bool: state.show_sidebar
    }
};

const map_dispatch_to_props = dispatch => {
    return {
        show_sidebar: (bool) => dispatch(show_sidebar(bool))
    }
};

export default connect(map_state_props, map_dispatch_to_props)(Sidebar);