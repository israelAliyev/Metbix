import React, {Component} from 'react';
import '../../../css/register.css'
import {Dropdown} from "react-bootstrap";

class Register extends Component {
    render() {
        return (
            <>
                <div className="account-register mb-5">

                    <div className="pp-forms">

                        <img src="images/isi.jpg" alt=""/>

                        <img src="/images/isi2.jpg" alt=""/>

                    </div>


                    <div className="buttons d-flex">
                        <input name="button1" value="0" id="q_55bba1d1e4b0e12ba3df7316_0"
                               type="radio"/>
                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_0">User</label>

                        <input name="button1" value="1" id="q_55bba1d1e4b0e12ba3df7316_1"
                               type="radio"/>
                        <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_1">Company</label>

                    </div>


                    <div className="text-forms bg-white">

                        <div className="have w-100">

                            <a href="">I have a account <i className="fas fa-angle-double-right"></i></a>
                        </div>

                        <div className="item-form-group d-flex mt-3">

                            <div className="item-form d-flex flex-column">
                                <label className="label">Company Name</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Email</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column phone">
                                <label className="label d-flex align-items-center">
                                    Phone -
                                    <Dropdown alignRight>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <img width="22" src="/images/aze.png"/>
                                            +994
                                            <i className="bi bi-chevron-down"/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                                <img width="22" src="/images/aze.png"/>
                                                +994
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </label>

                                <div className="phone-input d-flex">
                                    <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                                    <p>If you do not save your number, you will not have your number on the product page
                                        when you sell the product, and your WhatsApp will not receive a message when
                                        you receive a request, and your number will not appear when you send a
                                        request.</p>
                                </div>
                            </div>

                        </div>

                        <div className="item-form-group d-flex mt-5 flex-wrap">

                            <div className="item-form d-flex flex-column">
                                <label className="label">Password</label>
                                <input className="input--style-4" type="password" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Confirm Password</label>
                                <input className="input--style-4" type="password" name="first_name" autoComplete="off"/>
                            </div>

                        </div>


                        <div className="item-form-group d-flex mt-5 flex-wrap form-3">

                            <div className="item-form d-flex flex-column">
                                <label className="label">Year Established</label>
                                <input className="input--style-4" type="date" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Business Type</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Company Type</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                        </div>


                        <div className="item-form-group d-flex mt-5 form-4">

                            <div className="item-form d-flex flex-column">
                                <label className="label">total annue revenue</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Company Size</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Production capacity</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Employees</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                        </div>


                        <div className="item-form-group d-flex mt-5 flex-wrap flex-wrap form-5">

                            <div className="item-form d-flex flex-column">
                                <label className="label">website</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Country/City</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Address</label>
                                <input className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                            </div>

                            <div className="item-form d-flex flex-column">
                                <label className="label">Zip Code</label>
                                <input className="input--style-4 zip" type="text" name="first_name" autoComplete="off"/>
                            </div>

                        </div>


                        <div className="item-form-group d-flex mt-5 flex-wrap align-items-center">


                            <label className="label w-100">Continents branches</label>


                            <div className="item-form d-flex w-100 mt-3 continents overflow-auto">

                                <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_0">Africa</label>

                                <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_1">Asia</label>


                                <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_2">Europe</label>

                                <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_3">N.America</label>

                                <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_4">S.America</label>

                                <label className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_5">Australia</label>


                            </div>

                            <div className="item-form-group d-flex flex-column mt-5 flex-wrap w-100">

                                <label className="mb-3">Description</label>

                                <textarea rows="10" autoComplete="off"/>

                            </div>


                            <div className="item-form-group d-flex mt-5 flex-wrap images-upload">

                                <label className="mb-3 ">Upload Photos and Video</label>

                                <div className="photo">
                                    <label htmlFor="photo1"><img src="/images/upload-img1.png" alt=""/></label>
                                    <input id="photo1" type="file" autoComplete="off"/>
                                </div>
                                <div className="photo">
                                    <label htmlFor="photo1"><img src="/images/upload-img2.png" alt=""/></label>
                                    <input id="photo1" type="file" autoComplete="off"/>
                                </div>
                                <div className="photo">
                                    <label htmlFor="photo1"><img src="/images/upload-img2.png" alt=""/></label>
                                    <input id="photo1" type="file" autoComplete="off"/>
                                </div>
                                <div className="photo">
                                    <label htmlFor="photo1"><img src="/images/upload-img2.png" alt=""/></label>
                                    <input id="photo1" type="file" autoComplete="off"/>
                                </div>
                                <div className="photo">
                                    <label htmlFor="photo1"><img src="/images/upload-img2.png" alt=""/></label>
                                    <input id="photo1" type="file" autoComplete="off"/>
                                </div>
                                <div className="photo">
                                    <label htmlFor="photo1"><img src="/images/upload-img2.png" alt=""/></label>
                                    <input id="photo1" type="file" autoComplete="off"/>
                                </div>
                                <div className="photo">
                                    <label htmlFor="photo1"><img src="/images/upload-img2.png" alt=""/></label>
                                    <input id="photo1" type="file" autoComplete="off"/>
                                </div>
                                <div className="photo">
                                    <label htmlFor="photo1"><img src="/images/upload-img2.png" alt=""/></label>
                                    <input id="photo1" type="file" autoComplete="off"/>
                                </div>

                            </div>


                            <div className="item-form-group d-flex mt-5 flex-wrap certificate-upload overflow-auto">

                                <label className="mb-1">Upload Certifacts</label>


                                <table>
                                    <thead>

                                    <tr>
                                        <th>Picture</th>
                                        <th>Certification Name</th>
                                        <th>Issued By</th>
                                        <th>Business Scope</th>
                                        <th>Available Date</th>
                                    </tr>

                                    </thead>

                                    <tbody>

                                    <tr>
                                        <td><img src="/images/upload-img3.png" alt=""/></td>
                                        <td><input type="text" autoComplete="off"/></td>
                                        <td><input type="text" autoComplete="off"/></td>
                                        <td><input type="text" autoComplete="off"/></td>
                                        <td><input type="text" autoComplete="off"/></td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>


                            <div className="item-form-group d-flex flex-column mt-5 justify-content-center align-items-center w-100 submit">

                                <button>Signup</button>

                                <p>or</p>

                                <p>Signin with your socila media account:</p>

                                <div className="social-media-buttons d-flex justify-content-between">

                                    <div className="item d-flex align-items-center facebook">
                                        <i className='bx bxl-facebook'></i>
                                        <p>Facebook</p>
                                    </div>

                                    <div className="item d-flex align-items-center github">
                                        <i className='bx bxl-github'></i>
                                        <p>Github</p>
                                    </div>

                                    <div className="item d-flex align-items-center google">
                                        <i className='bx bxl-google'></i>
                                        <p>Google</p>
                                    </div>

                                    <div className="item d-flex align-items-center instagram">
                                        <i className='bx bxl-instagram'></i>
                                        <p>Instagram</p>
                                    </div>

                                    <div className="item d-flex align-items-center linkedin">
                                        <i className='bx bxl-linkedin'></i>
                                        <p>Linkedin</p>
                                    </div>

                                    <div className="item d-flex align-items-center microsoft">
                                        <i className='bx bxl-microsoft'></i>
                                        <p>Microsoft</p>
                                    </div>

                                    <div className="item d-flex align-items-center twitter">
                                        <i className='bx bxl-twitter'></i>
                                        <p>Twitter</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default Register;