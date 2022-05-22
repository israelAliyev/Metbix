import React, {useEffect, useState} from 'react';
import {
    facebookProvider,
    githubProvider,
    googleProvider
} from "../../../services/firebase/auth-social-media/methods/auth-methods";
import SocialMediaAuth from "../../../services/firebase/auth-social-media/auth";
import {v4 as uuid} from "uuid";
import {browserName} from "react-device-detect";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../../services/index";
import {loginAccount, loginAccountSocial} from "../../../services/index";
import {getAccountFirestore} from "../../../services/index";
import {addUserAccountFirestore} from "../../../services/firebase/firestore/add-account/add-account-actions";

function SocialLoginButtons(props) {

    const [loading, setLoading] = useState(undefined);
    const [userForDispatch, setUserForDispatch] = useState({});
    const [accountLoginForDispatch, setAccountLoginForDispatch] = useState({});

    // redux
    const register = useSelector(state => state.register);
    const getAccountFirestoreRes = useSelector(state => state.get_account_firestore);
    const login = useSelector(state => state.login);

    const dispatch = useDispatch();


    useEffect(() => {

        if (props.socialLogin === true) {

            if (register.error) {

                console.log({

                    register: register,
                    type: "Register",
                    error: true
                })

                dispatch(getAccountFirestore(userForDispatch.userEmail))

            } else if (register.response) {

                console.log({

                    register: register,
                    type: "Register",
                    response: true

                })

                const accountLogin = {
                    email: userForDispatch.userEmail,
                    password: userForDispatch.userPassword,
                    deviceInfo: {
                        deviceId: uuid(),
                        deviceType: browserName,
                    }
                }

                setAccountLoginForDispatch(accountLogin)

                dispatch(addUserAccountFirestore(userForDispatch)).then(async () => {
                    dispatch(loginAccount(accountLogin));
                })
            }
        }

    }, [register]);


    useEffect(() => {

        if (props.socialLogin === true) {


            console.log({

                getAccountFirestoreRes: getAccountFirestoreRes,
                type: "getAccountFirestoreRes"
            })

            if (getAccountFirestoreRes.response) {

                const accountLogin = {

                    email: getAccountFirestoreRes.response.email,
                    password: getAccountFirestoreRes.response.password,
                    deviceInfo: {
                        deviceId: uuid(),
                        deviceType: browserName,
                    }
                }

                setAccountLoginForDispatch(accountLogin);

                dispatch(loginAccountSocial(accountLogin));
            }

        }

    }, [getAccountFirestoreRes]);


    useEffect(() => {

        if (props.socialLogin === true) {

            console.log({

                login: login,
                type: "login"
            });

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
                    iiasrl:userForDispatch.userEmail
                }))

                if (localStorage.getItem("__|^|__")) {
                    window.location.href = "/";
                }
            }
        }

    }, [login]);


    const loginWithSocial = async (provider) => {

        setLoading(true)

        const response_social_login = await SocialMediaAuth(provider);



        const user = {
            userName: response_social_login.displayName,
            userEmail: response_social_login.email + "--social-login",
            userPhoto: response_social_login.photoURL,
            userRegistrationDate: new Date().toISOString(),
            userPhone: response_social_login.phoneNumber,
            userPassword: uuid(),
        }


        dispatch(registerUser(user))

        setUserForDispatch(user);

    }


    return (
        <>
            <div className="social-media d-flex align-items-center mt-4">

                <p>Sign In with social media:</p>

                <div onClick={() => {
                    loginWithSocial(facebookProvider).then(r => {
                        console.log(r)
                    })
                }}>
                <i onClick={props.postSocialLogin} className='bx bxl-facebook facebook'/>
                </div>

                <div onClick={() => {
                    loginWithSocial(githubProvider).then(r => {
                        console.log(r)
                    })}}>
                <i onClick={props.postSocialLogin} className='bx bxl-github github'/>
                </div>

                <div onClick={() => {
                    loginWithSocial(googleProvider).then(r => {
                        console.log(r)
                    })}}>
                <i onClick={props.postSocialLogin} className='bx bxl-google google'/>
                </div>

            </div>

        </>
    );
}

export default SocialLoginButtons;
