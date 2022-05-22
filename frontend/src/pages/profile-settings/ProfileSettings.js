import React, {useState, useEffect} from 'react';
import '../../css/profilesettings.css'
import '../../css/responsiveprofilesettings.css'
import useQuery from "../../services/url-query-parameter/url-query-parameter";
import {useDispatch, useSelector} from "react-redux";
import {getCompanyByEmail, getProfileByEmail, getUserByEmail} from "../../services";
import Company from "./Company";
import User from "./User";
import Loading from "../../animations/components/login/Loading";
import {v4 as uuid} from "uuid";
import {app} from "../../services/firebase/firebase";


function ProfileSettings() {

    const account = JSON.parse(localStorage.getItem("__|^|__"));
    const query = useQuery();
    const dispatch = useDispatch();
    const type = query.get("type");
    const profile_user = useSelector(state => state.get_user_by_email)
    const profile_company = useSelector(state => state.get_company_by_email)

    if (!type || !account) window.location.href = "/";

    const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
    const [profilePhotoName, setProfilePhotoName] = useState("");
    const [backPhotoUrl, setBackPhotoUrl] = useState("");
    const [backPhotoName, setBackPhotoName] = useState("");
    const [profileLoading, setProfileLoading] = useState(undefined);
    const [backLoading, setBackLoading] = useState(undefined);


    useEffect(() => {

        if (type === "user"){
            dispatch(getUserByEmail(account?.iiasrl))
        }else if (type === "company"){
            dispatch(getCompanyByEmail(account?.iiasrl))
        }
    }, [])



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

    useEffect(() => {

        if (profile_user.response){


        }

    }, [profile_user])

    useEffect(() => {

    }, [profile_company])

    return (

        <>
            <div className="profile-settings mb-5">


                <div className="pp-bp">

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


                <div className="operations">

                    <div className="title">
                        <p>Profile information</p>
                        <p>You can change the basic information associated with your profile.</p>
                        <hr/>
                    </div>


                    {type === 'user' ?
                        <User profile={profile_user}/>
                        :
                        <Company profile={profile_company}/>
                    }


                    <div className="submit-button w-100 d-flex justify-content-between align-items-center mt-5">
                        <button>Submit</button>

                        <div className="alert alert-danger" role="alert">
                            A simple danger alert—check it out!
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}

export default ProfileSettings;