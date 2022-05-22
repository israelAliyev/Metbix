import React, {Component, useEffect, useState} from 'react';
import Overview from "../company/Overview";
import ProductOverview from "../components/ProductOverview";
import '../../../css/profileuser.css'
import useQuery from "../../../services/url-query-parameter/url-query-parameter";
import {useDispatch, useSelector} from "react-redux";
import {getCompanyByEmail, getCompanyById, getUserByEmail, getUserById} from "../../../services";

const User = () => {

    const query = useQuery();

    const user_id = query.get("user-id");
    const user_email = query.get("user-email");

    const dispatch = useDispatch();


    const get_user = useSelector(state => state.get_user_by_email);


    const [user, set_user] = useState(null);


    if (!user_id && !user_email) window.location.href = "/"


    useEffect(() => {

        if (get_user.response) {

            set_user(get_user.response.user);
        }


    }, [get_user])


    useEffect(() => {
        if (user_id || user_email) {
            user_id ? dispatch(getUserById(user_id)) : dispatch(getUserByEmail(user_email));
        }
    }, []);


        return (
            <>

                <div className="profile-user p-5 mb-5">

                    {get_user.response &&

                    <header>

                        {/*profile photo and background photo*/}
                        <div className="pp-bp">

                            <img src={user?.userPhoto ? user?.userPhoto : "images/avatar.png"} alt=""/>

                            <img src={user?.userProfileBack ? user.userProfileBack : "images/isi2.jpg"} alt=""/>


                        </div>

                        <div>


                            <div className="texts d-flex">

                                <div className="info d-flex flex-column">
                                    <h1>{user?.userName}</h1>
                                    <p className="d-flex">{user?.userCountry}, {user?.userCity}</p>
                                </div>

                            </div>




                            <div className="actions d-flex justify-content-between flex-wrap mt-3">

                                <div className="buttons d-flex">
                                    <button className="message"><i className="bi bi-envelope me-2"/>Message</button>
                                    <button onClick={() => {window.location.href = "/profile-products?email="+user?.userEmail+"&type=user"}} className="products">Products</button>
                                    <button onClick={() => {window.location.href = "/basket?email="+user?.userEmail+"&type=user"}} className="products"><i className="bi bi-cart2"/> Basket</button>
                                </div>

                            </div>

                        </div>

                    </header>

                    }



                    {get_user.response &&

                    <div className="body">

                        <div className="description mt-5">


                            <h3 className="title">Description</h3>


                            <table>

                                <tbody>

                                <tr>
                                    <td>Email</td>
                                    <td><a>{user?.userEmail}</a></td>
                                </tr>

                                <tr>
                                    <td>Phone</td>
                                    <td><a>{user?.userPhone}</a></td>
                                </tr>

                                <tr>
                                    <td>Country</td>
                                    <td><a>{user?.userCountry}</a></td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td><a>{user?.userCity}</a></td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td><a>{user?.userAddress}</a></td>
                                </tr>


                                </tbody>
                            </table>

                        </div>

                    </div>
                    }




                    {!get_user.response &&

                    <div className="animation">
                        <iframe src="https://embed.lottiefiles.com/animation/27564"/>
                    </div>
                    }


                </div>

            </>
        );
}

export default User;