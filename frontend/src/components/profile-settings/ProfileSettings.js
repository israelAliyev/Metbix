import React, {Component, useState} from 'react';
import '../../css/profilesettings.css'
import '../../css/responsiveprofilesettings.css'
import NameEmail from "./forms/NameEmail";
import Security from "./forms/Security";
import Location from "./forms/Location";
import Industry from "./forms/Industry";
import Employees from "./forms/Employees";
import Description from "./forms/Description";
import {company_profile_settings_data as Data} from "./data/CompanyProfileSettingsData"

function ProfileSettings() {

    const [clicked, setClicked] = useState(false);


    const handleClick = (index) => {

        if (clicked === index) {
            setClicked(null)
        } else {

            setClicked(index)
        }
    }
    return (

        <>
            <div className="profile-settings mb-5">


                <div className="pp-bp">

                    <img src="images/isi.jpg" alt=""/>

                    <img src="/images/isi2.jpg" alt=""/>

                </div>


                <div className="operations">

                    <div className="title">
                        <p>Profile information</p>
                        <p>You can change the basic information associated with your profile.</p>
                        <hr/>
                    </div>


                    {Data.map((item, index) => {

                        return (


                            <div className="operation mt-5 mb-3">

                                <div onClick={() => {
                                  handleClick(index)
                                }}
                                     className="operation-title cursor-pointer d-flex flex-wrap align-items-center justify-content-between">

                                    <div className="texts">
                                        <p>{item.title}</p>
                                        <p>{item.subtitle}</p>
                                    </div>
                                    <i className={clicked === index ? "bi bi-chevron-down" : "bi bi-chevron-right"}/>
                                </div>

                                {clicked === index &&
                                <div className="forms">

                                    {item.component === "NameEmail" ? <NameEmail/> : item.component === "Security" ?
                                        <Security/> : item.component === "Location" ?
                                            <Location/> : item.component === "Industry" ?
                                                <Industry/> : item.component === "Employees" ?
                                                    <Employees/> : item.component === "Description" ?
                                                        <Description/> : null}

                                </div>
                                }
                            </div>

                        );
                    })
                    }

                </div>


            </div>
        </>
    );
}

export default ProfileSettings;