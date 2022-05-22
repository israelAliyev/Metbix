import React, {useEffect, memo, useState} from 'react';
import {Dropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {postLogout, refreshToken} from "../../../services";


const ProfileOperations = memo((props) => {

    const profile = useSelector(state => state.get_profile_by_email);
    const refresh_token = useSelector(state => state.refresh_token);

    const account = JSON.parse(localStorage.getItem("__|^|__"));

    const dispatch = useDispatch();


    const logOutRequest = {

        deviceInfo: account && account.sdergt,

        token: account && atob(account.rtoyui),

        email: profile.response && profile.response.userEmail ? profile.response.userEmail : profile.response && profile.response.companyEmail ? profile.response.companyEmail : null,

        accountId: profile.response && profile.response.userId ? profile.response.userId : profile.response && profile.response.companyId ? profile.response.companyId : null,

    }

    const logOut = () => {

        // TODO: send logout

        const now1 = new Date(new Date().getTime());
        const now2 = account.nhytgb;

        if (now1.getTime() <= new Date(now2).getTime()) {

            dispatch(refreshToken({refreshToken: account.wsxcde}))

        } else {

            dispatch(postLogout(logOutRequest));
        }
    }

    useEffect(() => {

        if (refresh_token.response) {

            // TODO: update token so access token in object

            const logOutRequestUpdatedObject = {...logOutRequest, token: refresh_token.response.accessToken}

            dispatch(postLogout(logOutRequestUpdatedObject));
        }

    }, [refresh_token])


    return (
        <>
            <li className="nav-item mt-1 profile-operations">

                <div className="navbar-account-dropdown">
                    <Dropdown alignRight={true}>
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                            <div className="d-flex flex-column align-items-start">
                          <span className="navbar-account-mymetbix-text">
                            My Metbix
                          </span>
                                <span className="navbar-account-account-types-text">
                            {profile.response && profile.response.name.length < 20 ? profile.response.name : profile.response && profile.response.name.length > 20 ? profile.response.name.substring(0, 22) + '...' : 'Account types'}
                                    <span className="ms-1">
                              <i className="fas fa-caret-down"/>
                            </span>
                          </span>
                            </div>
                        </Dropdown.Toggle>


                        {profile.response ?

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    href={profile.response.userId ? "/user?user-id=" + profile.response.userId : "/company?company-id=" + profile.response.companyId}>
                                    <li>
                                        <a className="dropdown-item">My Profile</a>
                                    </li>
                                </Dropdown.Item>

                                <Dropdown.Item
                                    href={profile.response.userId ? "/profile-settings?type=user" : "/profile-settings?company-id=company"}>
                                    <li>
                                        <a className="dropdown-item">Privacy & Settings</a>
                                    </li>
                                </Dropdown.Item>
                                <hr/>

                                <Dropdown.Item onClick={logOut}>
                                    <li>
                                        <a style={{color: 'red'}} className="dropdown-item">Logout</a>
                                    </li>
                                </Dropdown.Item>
                            </Dropdown.Menu>

                            :

                            <Dropdown.Menu>
                                <Dropdown.Item href="/login">
                                    <li>
                                        <a className="dropdown-item">Login</a>
                                    </li>
                                </Dropdown.Item>

                                <Dropdown.Item href="/register">
                                    <li>
                                        <a className="dropdown-item">Register</a>
                                    </li>
                                </Dropdown.Item>
                            </Dropdown.Menu>

                        }

                    </Dropdown>
                </div>
            </li>

        </>
    );
});

export default ProfileOperations;