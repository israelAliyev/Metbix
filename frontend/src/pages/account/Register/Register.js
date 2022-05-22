import React, {Component, useEffect, useState} from 'react';
import '../../../css/register.css'
import Company from "../Types/Company";
import User from "../Types/User";
import {app} from "../../../services/firebase/firebase"
import {v4 as uuid} from 'uuid';
import Loading from "../../../animations/components/login/Loading";
import cou from '../../../countries-json/countries-calling-code.json'
import cous from '../../../countries-json/countries-flag.json'


function Register(props) {


    const [accountType, setAccountType] = useState("User");
    const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
    const [profilePhotoName, setProfilePhotoName] = useState("");
    const [backPhotoUrl, setBackPhotoUrl] = useState("");
    const [backPhotoName, setBackPhotoName] = useState("");
    const [profileLoading, setProfileLoading] = useState(undefined);
    const [backLoading, setBackLoading] = useState(undefined);


    const handleChooseProfilePhoto = async (e) => {

        if (e.target.files[0]) {
            setProfileLoading(true)
            const file = e.target.files[0];
            const fileName = e.target.files[0].name + uuid();
            setProfilePhotoName(fileName)
            const storageRef = app.storage().ref();

            const fileRef = storageRef.child(`profile-photos/${fileName}`);
            await fileRef.put(file);
            setProfilePhotoUrl(await fileRef.getDownloadURL());
        }

    }


    const handleChooseBackPhoto = async (e) => {

        if (e.target.files[0]) {
            setBackLoading(true)

            const file = e.target.files[0];
            const fileName = e.target.files[0].name + uuid();

            setBackPhotoName(fileName)

            const storageRef = app.storage().ref();

            const fileRef = storageRef.child(`background-photos/${fileName}`);
            await fileRef.put(file);
            setBackPhotoUrl(await fileRef.getDownloadURL());
        }

    }

    const deleteAccountPhoto = async (folder) => {


        const storageRef = app.storage().ref();

        let fileRef = null;

        if (folder === 'profile-photos') {
            fileRef = storageRef.child(`${folder}/${profilePhotoName}`);
        } else {
            fileRef = storageRef.child(`${folder}/${backPhotoName}`);
        }

        await fileRef.delete().then(() => {

            if (folder === 'profile-photos') {
                setProfilePhotoUrl("")
                setProfilePhotoName("")
                setProfileLoading(false)
            } else {
                setBackPhotoUrl("")
                setBackPhotoName("")
                setBackLoading(false)
            }
        }).catch((error) => {
        });

    }

    return (
        <>

            <div className="account-register mb-5">

                <div className="pp-forms">

                    {/*profile photo*/}
                    <div className="profile-photo">
                        <input onChange={handleChooseProfilePhoto} id="pp-photo" type="file" autoComplete="off"
                               accept="image/*"/>

                        {profilePhotoUrl &&

                        <div className="d-none buttons d-flex justify-content-evenly">

                            <i onClick={() => {
                                deleteAccountPhoto('profile-photos').then(r => console.log(r))
                            }} className="bi bi-trash-fill cursor-pointer"/>

                            <label onClick={() => {
                                deleteAccountPhoto('profile-photos').then(r => console.log(r))
                            }} htmlFor="pp-photo">
                                <i className="bi bi-image cursor-pointer"/>
                            </label>
                        </div>
                        }

                        <label htmlFor="pp-photo">

                            {profileLoading && !profilePhotoUrl ? <Loading profile={true}/>
                                : <img className={profilePhotoUrl && "profile-photo-image"}
                                       src={ !profilePhotoUrl ? "images/profile/photo-camera.svg" : profilePhotoUrl}
                                       alt="pp-photo"/>
                            }

                        </label>

                    </div>

                    {/*background photo*/}
                    <div className="back-photo">

                        {backLoading && !backPhotoUrl  ? <Loading profile={true}/>
                            : <img src={ !backPhotoUrl  ? "/images/profile/dpbck.png" : backPhotoUrl}
                                   alt="bck-photo"/>
                        }

                        <input onChange={handleChooseBackPhoto} id="bck-photo" type="file" autoComplete="off"
                               accept="image/*"/>
                        <label htmlFor="bck-photo">
                            <i className="bi bi-camera-fill cursor-pointer"/>
                        </label>

                        {backPhotoUrl &&
                        <i onClick={() => {
                            deleteAccountPhoto('background-photos').then(r => console.log(r))
                        }} className="bi bi-trash-fill cursor-pointer mt-5"/>
                        }

                    </div>
                </div>


                <div className="buttons-account-type d-flex justify-content-evenly align-items-center flex-wrap">

                    <label style={accountType === "User" ? {color: "#f8a627"} : {color: "#817f7f"}} onClick={(e) => {
                        setAccountType("User")
                    }} className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_0"> <i
                        className="bi bi-person-fill"/> User</label>

                    <label style={accountType === "Company" ? {color: "#f8a627"} : {color: "#817f7f"}} onClick={(e) => {
                        setAccountType("Company")
                    }} className="btn-gry" htmlFor="q_55bba1d1e4b0e12ba3df7316_1"><i
                        className="bi bi-building"/> Company</label>

                </div>


                <div className="text-forms bg-white">

                    <div className="have w-100">

                        <a href="/login">I have a account <i className="fas fa-angle-double-right"/></a>
                    </div>

                    {
                        accountType === "Company" ?
                            <Company profilePhotoUrl={profilePhotoUrl} backPhotoUrl={backPhotoUrl}/>
                            : <User profilePhotoUrl={profilePhotoUrl} backPhotoUrl={backPhotoUrl}/>
                    }


                </div>

            </div>
        </>
    );
}

export default Register;