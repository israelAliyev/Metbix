import React, {Component} from 'react';
import '../../../css/register.css'
import {Dropdown} from "react-bootstrap";
import '../../../css/login.css'

class Login extends Component {

    render() {

        return (
            <>
                <div className="account-login">


                    <h2 className="title">Login</h2>


                    <div className="forms">

                        <div className="form">
                            <p>Email:</p>
                            <input type="text" placeholder="Email adress"/>
                        </div>


                        <div className="form">
                            <p>Password:</p>
                            <a href="">Forgot Password ?</a>
                            <input type="text" placeholder="Email adress"/>
                            <label><input type="checkbox"/> Stay singed in</label>
                        </div>

                        <div className="buttons">
                            
                            <button>Sing In</button>

                            <a href="">Mobile Number Sign In</a>
                            <a href="">Create Account</a>

                        </div>

                        <hr/>

                        <div className="social-media d-flex align-items-center mt-4">

                           <p>Sign In with social media:</p>
                            <i className='bx bxl-facebook facebook'></i>
                            <i className='bx bxl-github github'></i>
                            <i className='bx bxl-google google'></i>
                            <i className='bx bxl-instagram instagram'></i>
                            <i className='bx bxl-linkedin linkedin'></i>
                            <i className='bx bxl-microsoft microsoft'></i>
                            <i className='bx bxl-twitter twitter'></i>

                        </div>

                    </div>


                </div>
            </>
        );
    }
}

export default Login;