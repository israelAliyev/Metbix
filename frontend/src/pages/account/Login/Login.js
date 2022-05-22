import React, {useEffect, useState} from 'react';
import '../../../css/register.css'
import '../../../css/login.css'
import {browserName} from "react-device-detect";
import {v4 as uuid} from "uuid";
import {loginAccount} from "../../../services";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../../animations/components/login/Loading";
import SocialLoginButtons from "../Login/SocialLoginButtons";



function Login() {

    const [accountLoginForDispatch, setAccountLoginForDispatch] = useState(undefined);
    const [userEmail, setUserEmail] = useState(undefined);
    const [userPassword, setUserPassword] = useState(undefined);
    const [error, setError] = useState(undefined);

    //social login
    const [socialLogin, setSocialLogin] = useState(false);
    // loading
    const [loading, setLoading] = useState(undefined);

    const login = useSelector(state => state.login);

    const dispatch = useDispatch();


    useEffect(() => {

        if (login.response) {

            let deviceInfo = {
                zxcvbs: accountLoginForDispatch.deviceInfo.deviceId,
                qasder: browserName,
            }

            localStorage.setItem("__|^|__", JSON.stringify({
                rtoyui: btoa(login.response.accessToken),
                wsxcde: login.response.refreshToken,
                nhytgb: new Date(new Date().getTime() + 3600000),
                sdergt: deviceInfo,
                iiasrl:accountLoginForDispatch.email
            }))

            if (localStorage.getItem("__|^|__")) {
                window.location.href = "/";
            }
        }else if (login.error){
            setError(login.error);
            setLoading(false);
        }

    }, [login]);


    const loginHandle = () => {

        setSocialLogin(false)

        setLoading(true)

        if (!userEmail) {

            setLoading(false)
            setError("Email cannot be empty");
        } else if (!userPassword) {

            setLoading(false)
            setError("Password cannot be empty");
        } else if (userPassword.length < 8) {

            setLoading(false)
            setError("Password length cannot be less than 8 characters");
        }


        if (!error && !loading) {

            const accountLogin = {

                email: userEmail,
                password: userPassword,
                deviceInfo: {
                    deviceId: uuid(),
                    deviceType: browserName,
                }
            }


            setAccountLoginForDispatch(accountLogin);

            dispatch(loginAccount(accountLogin));
        }
    }

    const postSocialLogin = () => {
        setSocialLogin(true);
    }


    return (
        <>
            <div className="account-login">

                <h2 className="title">Login</h2>

                <div className="forms">

                    <div className="form">
                        <p>Email:</p>
                        <input onChange={(e) => {
                            setUserEmail(e.target.value)
                        }} type="text" placeholder="Email adress"/>
                    </div>


                    <div className="form">
                        <p>Password:</p>
                        <input onChange={(e) => {
                            setUserPassword(e.target.value)
                        }} type="password" placeholder="Email adress"/>
                    </div>

                    {error &&
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                    }

                    <div className="buttons">

                        <button onClick={loginHandle}>{loading || socialLogin ? <Loading/> : "SignIn"}</button>

                        <a href="/register">Create Account</a>

                    </div>

                    <hr/>

                    <SocialLoginButtons socialLogin = {socialLogin} postSocialLogin={postSocialLogin}/>

                </div>


            </div>
        </>
    );

}

export default Login;