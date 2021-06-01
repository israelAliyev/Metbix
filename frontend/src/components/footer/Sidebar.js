import React, {Component} from 'react';
import '../../css/sidebar.css';
import OutsideClickHandler from "react-outside-click-handler";
import {CSSTransition} from 'react-transition-group';


class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show_sideBar: false,
            departments_border_color: false,
            languages_border_color: false,
            activeMenu: 'main'

        }
    }

    render() {
        return (


            <nav className="navbar">


                <div>
                    <button onClick={() => {
                        this.setState({show_sidebar: true})
                    }} className="btn btn-success testButton">Show
                    </button>

                    <body className="sidebar-body">

                    <div className={this.state.show_sidebar ? "active sidebar" : "sidebar"}>

                        <div className="logo_content">
                            <div className="logo">
                                {this.state.activeMenu === "main" ? <div className="logo_name">Menu</div>
                                    :
                                    <div className="d-flex">
                                        <i onClick={() => {
                                            this.setState({activeMenu: "main"})
                                        }} className="bi bi-arrow-left-circle cursor-pointer"/>
                                        <div className="logo_name ms-2">Main Menu</div>

                                    </div>
                                }

                            </div>
                            <i onClick={() => {
                                this.setState({show_sidebar: false})
                            }} className='bx bx-x cursor-pointer fs-3' id="btn"/>
                        </div>

                        <CSSTransition
                            in={this.state.activeMenu === 'main'}
                            // timeout={50}
                            classNames="menu-primary"
                            unmountOnExit>

                            <ul className="nav_list first-menu">


                                <OutsideClickHandler onOutsideClick={() => {
                                    this.setState({departments_border_color: false})
                                }}>

                                    <li className={this.state.departments_border_color ? "mt-3 departments" : "mt-3"}
                                        onClick={() => this.setState({departments_border_color: !this.state.departments_border_color})}>

                                        <li className="nav-item dropdown">
                                            <p className="nav-link dropdown-toggle"
                                               id="navbarDropdown" role="button"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className='bx bx-grid-alt'/>
                                                <span className="links_name">Departments</span>
                                                <i className={this.state.departments_border_color ? "bi bi-caret-right" : "bi bi-caret-down"}/>
                                            </p>

                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a onClick={() => {
                                                    this.setState({activeMenu: "secondary"})
                                                }} className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Electronics</a></li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Another act</a></li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Something </a></li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Action</a></li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Another act</a></li> <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Another act</a></li> <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Another act</a></li> <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Another act</a></li> <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Another act</a></li> <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Another act</a></li> <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Another act</a></li>
                                            </ul>
                                        </li>
                                    </li>

                                </OutsideClickHandler>


                                <li>
                                    <p>
                                        <i className="bi bi-bag-plus"/>
                                        <span className="links_name">Sell on Metbix</span>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <i className="ri-line-chart-line"/>
                                        <span className="links_name">Finance</span>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <i className="bi bi-info-circle"/>
                                        <span className="links_name">Help</span>
                                    </p>
                                </li>

                                <OutsideClickHandler onOutsideClick={() => {
                                    this.setState({languages_border_color: false})
                                }}>


                                    <li className={this.state.languages_border_color ? "languages d-xl-none" : "d-xl-none"}
                                        onClick={() => this.setState({languages_border_color: !this.state.languages_border_color})}>

                                        <li className="nav-item dropdown">
                                            <p className="nav-link dropdown-toggle"
                                               id="navbarDropdown" role="button"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                <i><img width="23" src="/images/aze.png"/></i>
                                                <span className="links_name">- AZN</span>
                                                <i className={this.state.languages_border_color ? "bi bi-caret-right" : "bi bi-caret-down"}/>
                                            </p>

                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Languages</a></li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="bi bi-chevron-right"/> Currency</a></li>
                                            </ul>
                                        </li>
                                    </li>

                                </OutsideClickHandler>


                                <li className="d-xl-none">
                                    <p>
                                        <i className="ri-earth-line"/>
                                        <span className="links_name">Azerbaijan</span>
                                        <i className="bi bi-chevron-right"/>

                                    </p>
                                </li>
                            </ul>

                        </CSSTransition>

                        <CSSTransition
                            in={this.state.activeMenu === 'secondary'}
                            // timeout={50}
                            classNames="menu-secondary"
                            unmountOnExit>

                            <ul className="secondary-menu">

                                <li className="mt-3">

                                    <li className="nav-item">
                                        <p className="">
                                            <i className="ri-headphone-line"/>
                                            <span className="links_name">Electronics</span>
                                            <i className="bi bi-sort-alpha-down"></i>
                                        </p>

                                        <ul>
                                            <li className="input-item"><input type="text" placeholder="Search.."/></li>
                                            <div>

                                            <li><a href="#"><i className="bi bi-record2"></i> Computer</a></li>
                                            <li><a  href="#"><i className="bi bi-record2"></i> Phone</a></li>
                                            <li><a  href="#"><i className="bi bi-record2"></i> Laptop</a></li>
                                            <li><a  href="#"><i className="bi bi-record2"></i> IStkan</a></li>
                                            <li><a  href="#"><i className="bi bi-record2"></i> Klima</a></li>
                                            <li><a href="#"><i className="bi bi-record2"></i> Qab</a></li>
                                            <li><a  href="#"><i className="bi bi-record2"></i> Bura</a></li>

                                            </div>

                                        </ul>
                                    </li>
                                </li>

                            </ul>
                        </CSSTransition>

                        <div className="profile_content">
                            <div className="profile">
                                <div className="profile_details">
                                    <img src="/images/recb.jpg" alt=""/>
                                    <div className="name_job">
                                        <div className="name">Recep Ivedik</div>
                                        <div className="job">User</div>
                                    </div>
                                </div>

                                <i className='bi bi-box-arrow-left' id="log_out"/>

                            </div>
                        </div>


                    </div>

                    </body>

                    <div className={this.state.show_sidebar && "sidebar-overlay"} onClick={() => {
                        this.setState({show_sidebar: false})
                    }}>
                    </div>
                </div>

            </nav>


        );
    }
}

export default Sidebar;