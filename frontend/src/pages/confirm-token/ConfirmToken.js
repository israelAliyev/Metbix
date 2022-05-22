import React, {useEffect, useState} from 'react';
import '../../css/confirmtoken.css'
import useQuery from "../../services/url-query-parameter/url-query-parameter";
import Loading from "../../animations/components/verify-account/Loading";
import {loginAccountSocial} from "../../services";
import {getAccountFirestore} from "../../services";
import {v4 as uuid} from "uuid";
import {browserName} from "react-device-detect";
import {useDispatch, useSelector} from "react-redux";
import {confirmToken} from "../../services";

function ConfirmToken(props) {

    let query = useQuery();

    const [accountName, setAccountName] = useState(undefined);
    const [accountEmail, setAccountEmail] = useState(undefined);
    const [accountLoginForDispatch, setAccountLoginForDispatch] = useState(undefined);
    const [error, setError] = useState(false);

    // redux
    const getAccountFirestoreRes = useSelector(state => state.get_account_firestore);
    const login = useSelector(state => state.login);
    const confirm = useSelector(state => state.confirm_token);

    const dispatch = useDispatch();

    let name = query.get("dc56x-t-y");
    let token = query.get("oop-01-is");
    let email = query.get("n47Frt-l");

    useEffect(() => {

        if (name) {

            setAccountName(atob(name))

        } else if (email && token) {

            dispatch(confirmToken(token));
            setAccountEmail(atob(email.substring(36)));

        } else {
            window.location.href = "/";
        }

    }, [])

    useEffect(() => {

            if (confirm.response) {

                dispatch(getAccountFirestore(atob(email.substring(36))))

            } else {
                if (email && token) {
                    setTimeout(() => {
                        // window.location.href = "/";
                    }, 3000)
                }
            }

    }, [confirm])


    useEffect(() => {


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

            } else {

                if (email && token) {
                    setTimeout(() => {
                        // window.location.href = "/";
                    }, 3000)
                }
            }


    }, [getAccountFirestoreRes]);


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
                    iiasrl:atob(email.substring(36))
                }))

                if (localStorage.getItem("__|^|__")) {

                    if (email && token) {
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 3000)
                    }
                }
            }



    }, [login]);



    return (
        <>
            <div className="confirm-token">

                {accountName ?

                    <div className='message-texts'>
                        <h3>Dear {accountName}</h3>

                        <p>We sent a message to your e-mail to verify your account. Please go to your e-mail address and
                            verify your account, otherwise you will not be able to log in.</p>

                        <h5>Thanks,</h5>
                        <h5>The Metbix Team</h5>
                    </div>
                    :
                    <Loading/>
                }

            </div>
        </>
    );
}

export default ConfirmToken;