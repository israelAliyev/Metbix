import React, {useEffect} from 'react';
import "../../css/searchprofiles.css";
import useQuery from "../../services/url-query-parameter/url-query-parameter";
import User from "./User";
import Company from "./Company";
import {useDispatch, useSelector} from "react-redux";
import {getProfilesByCompanyName, getProfilesByUserName} from "../../services";

function Profiles(props) {

    const query = useQuery();
    const dispatch = useDispatch();

    const users_profiles = useSelector(state => state.get_profiles_by_user_name)
    const companies_profiles = useSelector(state => state.get_profiles_by_company_name)

    const name = query.get("search");

    if (!name) window.location.href = "/"

    useEffect(() => {

        if (name) {
            dispatch(getProfilesByUserName(name))
            dispatch(getProfilesByCompanyName(name))
        }

    }, [])

    return (
        <>

            <div className="search-profiles mb-5 mt-5">

                <div className="header w-100 mb-5 d-flex align-items-center">

                    <span/>

                    <h3>Profiles</h3>

                    <span/>

                </div>


                <div className="profiles">

                    {users_profiles.response?.map((profile) => (
                    <User profile={profile}/>
                    ))}

                    {companies_profiles.response?.map((profile) => (
                        <Company profile={profile}/>
                    ))}

                    {(!users_profiles.response && !companies_profiles.response) &&

                    <div className="loading w-100 d-flex justify-content-center">
                        <iframe height="450" width="600" src="https://embed.lottiefiles.com/animation/73480"/>
                    </div>
                    }

                    {(users_profiles.response && users_profiles.response.length === 0 && companies_profiles.response && companies_profiles.response.length === 0) &&
                    <div className="not-found-item">
                        <span>Products Not Found !</span>
                    </div>
                    }
                </div>


            </div>

        </>
    );
}

export default Profiles;

