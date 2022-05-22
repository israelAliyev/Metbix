import React, {Component} from "react";
import "../../css/navbar.css";
import {createGlobalStyle} from "styled-components";
import {connect, useDispatch} from "react-redux";
import {show_sidebar} from "../../services/index";
import {Dropdown} from "react-bootstrap";
import ProfileOperations from "./components/ProfileOperations";
import Logo from "./components/Logo";
import ResponsiveLogo from "./components/ResponsiveLogo";
import Currency from "./components/Currency";
import SearchBar from "./components/SearchBar";
import SubNavbar from "./components/SubNavbar";
import Basket from "./components/Basket";
import Notification from "./components/Notification";
import {getProfileByEmail} from "../../services/index";


const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'az-AZ'


// var langs =
//     [['Azərbaycan dili', ['az-AZ', 'Azerbaijan'],
//         ['az-RU-DA', 'Dagestan']],];


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchType: "Products",
            scroll_active: "",
            searchKey: null,
            login: undefined,
            voice_is_listening: false
        };
    }



    changeNavbar = () => {
        if (window.scrollY > 10) {
            this.setState({scroll_active: "scroll-active"});
        } else {
            this.setState({scroll_active: ""});
        }
    };

    handleSearchKey = () => {
        if (this.state.searchKey) {
            if (this.state.searchType === "Products") {
                window.location.href = "/products?search=" + this.state.searchKey;
            } else {
                window.location.href =
                    "/profiles?search=" + this.state.searchKey;
            }
        } else {
            window.location.reload();
        }
    };

    componentDidMount() {

        const account = JSON.parse(localStorage.getItem("__|^|__"));

        if (account)
            this.props.get_profile_by_email(account.iiasrl);

    }

    handleListen (start) {

        if (start) {

            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            this.setState({searchKey:transcript})
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }


    render() {

        const GlobalStyle = createGlobalStyle`
          :root {
            overflow-x: hidden;
            overflow-y: hidden;
          }`;

        window.addEventListener("scroll", this.changeNavbar);

        return (
            <div>
                {this.props.show_sidebar_bool.show_sidebar && <GlobalStyle/>}

                {/*Main Navbar*/}
                <nav className={`main-navbar navbar navbar-expand-lg`}>
                    <div className="container-fluid">

                        <Logo/>
                        <ResponsiveLogo/>

                        {/*colapse items for responsive design*/}
                        <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">

                            {/*Login and register form on navbar */}

                            <ProfileOperations/>

                            {/*search form that hase a drop search types down and yellow button*/}
                            <div className="navbar-search-form ms-4">
                                <li className="nav-item">
                                    <form className="form-inline navbar-for-search-form-border">
                                        <div className="input-group">
                                            <Dropdown>
                                                {!this.props.show_sidebar_bool.show_sidebar && (
                                                    <Dropdown.Toggle variant="none">
                                                        {this.state.searchType}
                                                        <span className="ms-1">
                                                <i className="fas fa-caret-down"/>
                                                 </span>
                                                    </Dropdown.Toggle>
                                                )}
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        <li
                                                            onClick={() => {
                                                                this.setState({searchType: "Products"});
                                                            }}
                                                        >
                                                            <a className="dropdown-item">Products</a>
                                                        </li>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item>
                                                        <li
                                                            onClick={() => {
                                                                this.setState({searchType: "Profiles"});
                                                            }}
                                                        >
                                                            <a className="dropdown-item">Profiles</a>
                                                        </li>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                            <input
                                                value={this.state.searchKey}
                                                readOnly={this.state.voice_is_listening && true}
                                                onChange={(e) => {
                                                    this.setState({searchKey: e.target.value});
                                                }}
                                                autoComplete="off"
                                                type="text"
                                                name="query"
                                                id="query"
                                                className="form-control navbar-search-form-text-form"
                                            />

                                            <button
                                                onClick={this.handleSearchKey}
                                                className={`btn btn-warning navbar-search-form-button ${
                                                    this.props.show_sidebar_bool.show_sidebar && `d-none`
                                                } `}
                                                type="button"
                                                id="button-addon1"
                                            >
                                                <img width="23" src="/images/loupe.png"/>
                                            </button>
                                        </div>
                                    </form>
                                </li>
                            </div>

                            {/*notification with animation and count of messages*/}
                            <li className="nav-item nav-mic me-3">
                                <div onClick={() => {
                                    new Audio("/sounds/mic.mp3").play();
                                    this.setState({voice_is_listening: !this.state.voice_is_listening});
                                    this.handleListen(!this.state.voice_is_listening)
                                }}>
                                    <i style={{color: this.state.voice_is_listening ? "#ff4848" : "white"}} className="bx bxs-microphone"/>
                                </div>
                            </li>

                            <Currency/>

                            <Notification/>

                            <Basket/>
                        </div>
                    </div>
                </nav>

                <SubNavbar/>

                <SearchBar/>
            </div>
        );
    }
}

const map_state_props = (state) => {
    return {
        show_sidebar_bool: state.show_sidebar,
        profile_by_email: state.get_profile_by_email,

    };
};

const map_dispatch_to_props = (dispatch) => {
    return {
        show_sidebar: (bool) => dispatch(show_sidebar(bool)),
        get_profile_by_email: (email) => dispatch(getProfileByEmail(email)),
    };
};

export default connect(map_state_props, map_dispatch_to_props)(Navbar);
