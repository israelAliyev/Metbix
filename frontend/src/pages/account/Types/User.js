import React, {useEffect, useState} from 'react';
import {Dropdown} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {fetchCountries} from "../../../services/index";
import * as EmailValidator from 'email-validator';
import {registerUser} from "../../../services/index";
import {
    addUserAccountFirestore
} from "../../../services/firebase/firestore/add-account/add-account-actions";

import Loading from "../../../animations/components/login/Loading";
import Generateuuid from "../../../services/uuid/GenerateUUID";
import SocialLoginButtons from "../Register/SocialLoginButtons";
import countries_data from '../../../countries-json/countries-calling-code.json'

function User(props) {


    const dispatch = useDispatch();

    const [callingCode, setCallingCode] = useState("+1");
    const [countryName, setCountryName] = useState("Not determined");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userCountry, setUserCountry] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userZip, setUserZip] = useState("");
    const [userForDispatch, setUserForDispatch] = useState({});

    //social login
    const [socialLogin, setSocialLogin] = useState(false);


    // error
    const [userNameError, setUserNameError] = useState("");
    const [userEmailError, setUserEmailError] = useState("");
    const [userPasswordError, setUserPasswordError] = useState("");
    const [userConfirmPasswordError, setConfirmUserPasswordError] = useState("");

    // redux
    const countries = useSelector(state => state.countries_response);
    const register = useSelector(state => state.register);


    // loading
    const [loading, setLoading] = useState(undefined);

    useEffect(() => {

        dispatch(fetchCountries());

    }, []);

    useEffect(() => {

        if (socialLogin === false) {

            if (register.error) {

                setUserEmailError(register.error);
                setLoading(false);

            } else if (register.response) {

                dispatch(addUserAccountFirestore(userForDispatch)).then(() => {
                    window.location.href = "/confirm-account?dc56x-t-y=" + btoa(userForDispatch.userName);
                });
            }
        }

    }, [register]);

    const signup = () => {

        setSocialLogin(false)

        let userNameErrors = '';
        let userEmailErrors = '';
        let userPasswordErrors = '';
        let userConfirmPasswordErrors = '';

        // username
        if (userName === "") {
            userNameErrors = "Username cannot be empty";
        } else {
            userNameErrors = '';
            setUserNameError('');
        }

        // email
        if (userEmail === "") {
            userEmailErrors = "Email cannot be empty";
        } else if (!EmailValidator.validate(userEmail)) {
            userEmailErrors = "Email is not valid";
        } else {
            userEmailErrors = '';
            setUserEmailError('');
        }

        // password
        if (userPassword === "") {

            userPasswordErrors = "Password cannot be empty";
        } else if (confirmPassword === "") {

            userConfirmPasswordErrors = "ConfirmPassword cannot be empty";
        } else if (userPassword.length < 8) {

            userPasswordErrors = "Password length cannot be less than 8 characters";
        } else if (userPassword !== confirmPassword) {

            userConfirmPasswordErrors = "Passwords are not the same";
        } else {
            userPasswordErrors = '';
            userConfirmPasswordErrors = '';
            setUserPasswordError('');
            setConfirmUserPasswordError('');
        }


        if (userNameErrors === '' &&
            userEmailErrors === '' &&
            userPasswordErrors === '' &&
            userConfirmPasswordErrors === '' && !loading) {

            setLoading(true)

            const user = {

                userName: userName,
                userEmail: userEmail,
                userPhone: userPhone,
                userPassword: userPassword,
                userCountry: userCountry,
                userCity: userCity,
                userAddress: userAddress,
                userZip: userZip,
                encodedUserEmail: Generateuuid().substring(36) + btoa(userEmail),
                userPhoto: props.profilePhotoUrl,
                userProfileBack: props.backPhotoUrl,
                userRegistrationDate: new Date().toISOString(),

            }

            setUserForDispatch(user)

            setTimeout(() => {
                dispatch(registerUser(user))
            }, 500)

        } else {

            setUserEmailError(userEmailErrors);
            setUserPasswordError(userPasswordErrors);
            setConfirmUserPasswordError(userConfirmPasswordErrors);
            setUserNameError(userNameErrors);
        }
    }


    const postSocialLogin = () => {
        setSocialLogin(true);
    }

    return (
        <>

            <div className="item-form-group d-flex mt-3">
                <div className="item-form d-flex flex-column">
                    <label className="label d-flex justify-content-between">User Name <a className="d-none" href="/login">I have a account <i className="fas fa-angle-double-right"/></a></label>
                    <input style={userNameError ? {borderColor: "red"} : null} onChange={(e) => {
                        setUserName(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>


                    {userNameError &&
                    <p>{userNameError}</p>
                    }


                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Email</label>
                    <input style={userEmailError ? {borderColor: "red"} : null} onChange={(e) => {
                        setUserEmail(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>

                    {userEmailError &&
                    <p>{userEmailError}</p>
                    }
                </div>

                <div className="item-form d-flex flex-column phone">
                    <label className="label d-flex align-items-center">
                        Phone -
                        <Dropdown alignRight>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {callingCode}
                                <i className="bi bi-chevron-down"/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>

                                {countries_data.map((country) => (

                                    <Dropdown.Item onClick={() => {
                                        setCallingCode(country.dial_code)
                                    }}>

                                        {country.dial_code}

                                    </Dropdown.Item>
                                ))}


                            </Dropdown.Menu>
                        </Dropdown>
                    </label>

                    <div className="phone-input d-flex">
                        <input onChange={(e) => {
                            setUserPhone(callingCode + e.target.value)
                        }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>

                    </div>
                </div>

            </div>

            <div className="item-form-group d-flex mt-5 flex-wrap">

                <div className="item-form d-flex flex-column">
                    <label className="label">Password</label>
                    <input
                        style={userPasswordError  || userConfirmPasswordError ? {borderColor: "red"} : null}
                        onChange={(e) => {
                            setUserPassword(e.target.value)
                        }} className="input--style-4" type="password" name="first_name" autoComplete="off"/>


                    {userPasswordError || userConfirmPasswordError ?
                        <p>{userPasswordError ? userPasswordError : userConfirmPasswordError ? userConfirmPasswordError : null}</p>
                        : null}
                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Confirm Password</label>
                    <input
                        style={userPasswordError || userConfirmPasswordError ? {borderColor: "red"} : null}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }} className="input--style-4" type="password" name="first_name" autoComplete="off"/>
                </div>

            </div>


            <div className="item-form-group d-flex mt-5 flex-wrap flex-wrap form-5">

                <div className="item-form d-flex flex-column form-location">
                    <label className="label">Country</label>

                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            {countryName}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {countries_data.map((country) => (

                                <li onClick={() => {
                                    setCountryName(country.name)
                                    setUserCountry(country.name)
                                }}><a className="dropdown-item">{country.name}</a></li>

                            ))}
                        </ul>
                    </div>

                </div>

                <div className="item-form d-flex flex-column form-location">
                    <label className="label">City</label>

                    <input onChange={(e) => {
                        setUserCity(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>

                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Address</label>
                    <input onChange={(e) => {
                        setUserAddress(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Zip Code</label>
                    <input onChange={(e) => {
                        setUserZip(e.target.value)
                    }} className="input--style-4 zip" type="text" name="first_name" autoComplete="off"/>
                </div>

            </div>


            <div
                className="item-form-group d-flex flex-column mt-5 justify-content-center align-items-center w-100 submit">

                <div className="signup-button d-flex align-items-center">

                    <button className={loading && "disabled-signup-button"} onClick={signup}> {loading ?
                        <Loading/>
                        : "Signup"}</button>
                </div>


                <p>or</p>

                <p>Signing with your social media account:</p>


                <SocialLoginButtons socialLogin = {socialLogin} postSocialLogin={postSocialLogin}/>

            </div>


        </>
    );
}

export default User;