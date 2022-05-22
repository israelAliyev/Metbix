import React, {useEffect, useState} from 'react';
import {Dropdown} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {fetchCountries, registerCompany, registerUser} from "../../../services/index";
import * as EmailValidator from 'email-validator';
import {app} from "../../../services/firebase/firebase"
import {v4 as uuid} from 'uuid';
import Loading from "../../../animations/components/login/Loading";
import Generateuuid from "../../../services/uuid/GenerateUUID";
import {
    addCompanyAccountFirestore,
} from "../../../services/firebase/firestore/add-account/add-account-actions";
import SocialLoginButtons from "../Register/SocialLoginButtons";
import countries_data from '../../../countries-json/countries-calling-code.json'


function Company(props) {

    const dispatch = useDispatch();

    const [flag, setFlag] = useState("/images/aze.png");
    const [callingCode, setCallingCode] = useState("+1");
    const [countryName, setCountryName] = useState("Not determined");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPhone, setCompanyPhone] = useState("");
    const [companyPassword, setCompanyPassword] = useState("");
    const [companyCountry, setCompanyCountry] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyZip, setCompanyZip] = useState("");
    const [companyYearEstablished, setCompanyYearEstablished] = useState(undefined);
    const [companyBusinessType, setCompanyBusinessType] = useState("");
    const [companyType, setCompanyType] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [companyRevenue, setCompanyRevenue] = useState(undefined);
    const [companyProductionCapacity, setCompanyProductionCapacity] = useState("");
    const [companyEmployees, setCompanyEmployees] = useState(undefined);
    const [companyDescription, setCompanyDescription] = useState("");

    const [companyForDispatch, setCompanyForDispatch] = useState(undefined);

    const [companyPhotoIndex, setCompanyPhotoIndex] = useState(null);
    const [companyInfoPhotos, setCompanyInfoPhotos] = useState([
        {
            companyDetailImageMedia: '',
            fileName: '',
            loading: undefined
        },
        {
            companyDetailImageMedia: '',
            fileName: '',
            loading: undefined
        },
        {
            companyDetailImageMedia: '',
            fileName: '',
            loading: undefined
        },
        {
            companyDetailImageMedia: '',
            fileName: '',
            loading: undefined
        },
        {
            companyDetailImageMedia: '',
            fileName: '',
            loading: undefined
        },
        {
            companyDetailImageMedia: '',
            fileName: '',
            loading: undefined
        }]);


    // continents
    const [companyContinents, setCompanyContinents] = useState([

        {
            continentId: 0,
            continentName: 'Africa',
        },
        {
            continentId: 0,
            continentName: 'Asia',
        },
        {
            continentId: 0,
            continentName: 'Europe',
        },
        {
            continentId: 0,
            continentName: 'N.America',
        },
        {
            continentId: 0,
            continentName: 'S.America',
        },
        {
            continentId: 0,
            continentName: 'Australia',
        }
    ]);


    // certificate
    const [certificatePicture, setCertificatePicture] = useState("");
    const [certificateFileName, setCertificateFileName] = useState("");
    const [certificateName, setCertificateName] = useState("");
    const [certificateIssuedBy, setCertificateIssuedBy] = useState("");
    const [certificateBusinessScope, setCertificateBusinessScope] = useState("");
    const [certificateAvailableDate, setCertificateAvailableDate] = useState('');


    // error
    const [companyNameError, setCompanyNameError] = useState("");
    const [companyEmailError, setCompanyEmailError] = useState("");
    const [companyPasswordError, setCompanyPasswordError] = useState("");
    const [companyConfirmPasswordError, setConfirmCompanyPasswordError] = useState("");

    const [loading, setLoading] = useState(undefined);


    //social login
    const [socialLogin, setSocialLogin] = useState(false);


    // redux
    const register = useSelector(state => state.register);
    const countries = useSelector(state => state.countries_response);


    useEffect(() => {

        dispatch(fetchCountries());

    }, []);


    useEffect(() => {

        if (socialLogin === false) {

            if (register.error) {

                setCompanyEmailError(register.error);
                setLoading(false);

            } else if (register.response) {

                dispatch(addCompanyAccountFirestore(companyForDispatch)).then(() => {
                    window.location.href = "/confirm-account?dc56x-t-y=" + btoa(companyForDispatch.companyName);
                });
            }
        }

    }, [register]);


    const signup = async () => {

        let companyNameErrors = '';
        let companyEmailErrors = '';
        let companyPasswordErrors = '';
        let companyConfirmPasswordErrors = '';

        // username
        if (companyName === "") {
            setCompanyNameError("Company Name cannot be empty");
            companyNameErrors = "Company Name cannot be empty";
        } else {
            setCompanyNameError("");
            companyNameErrors = '';
        }

        // email
        if (companyEmail === "") {
            setCompanyEmailError("Email cannot be empty")
            companyEmailErrors = "Email cannot be empty";
        } else if (!EmailValidator.validate(companyEmail)) {
            setCompanyEmailError("Email is not valid")
            companyEmailErrors = "Email is not valid";
        } else {
            setCompanyEmailError("")
            companyEmailErrors = '';
        }

        // password
        if (companyPassword === "") {
            setCompanyPasswordError("Password cannot be empty")
            companyPasswordErrors = "Password cannot be empty";
        } else if (confirmPassword === "") {
            setConfirmCompanyPasswordError("ConfirmPassword cannot be empty")
            companyConfirmPasswordErrors = "ConfirmPassword cannot be empty";
        } else if (companyPassword.length < 8) {
            setCompanyPasswordError("Password length cannot be less than 8 characters")
            companyPasswordErrors = "Password length cannot be less than 8 characters";
        } else if (companyPassword !== confirmPassword) {
            setConfirmCompanyPasswordError("Passwords are not the same")
            companyConfirmPasswordErrors = "Passwords are not the same";
        } else {
            setConfirmCompanyPasswordError("");
            setCompanyPasswordError("");
            companyPasswordErrors = '';
            companyConfirmPasswordErrors = '';
        }


        if (companyNameErrors === '' &&
            companyEmailErrors === '' &&
            companyPasswordErrors === '' &&
            companyConfirmPasswordErrors === '' && !loading) {

            setLoading(true)

            const certificatesList = [];

            if (certificatePicture !== "" && certificateName !== "" && certificateIssuedBy !== "" && certificateBusinessScope !== "" && certificateAvailableDate !== "") {
                const certificate = {

                    certificatePicture: certificatePicture,
                    certificateName: certificateName,
                    certificateIssuedBy: certificateIssuedBy,
                    certificateBusinessScope: certificateBusinessScope,
                    certificateAvailableDate: certificateAvailableDate
                }

                certificatesList.push(certificate)
            }

            const company = {

                companyName: companyName,
                companyEmail: companyEmail,
                companyPhone: companyPhone,
                companyPassword: companyPassword,
                companyCountry: companyCountry,
                companyCity: companyCity,
                companyAddress: companyAddress,
                companyZip: companyZip,
                companyProfilePhoto: props.profilePhotoUrl,
                companyProfileBack: props.backPhotoUrl,
                companyYearEstablished: companyYearEstablished,
                companyBusinessType: companyBusinessType,
                companyRegistrationDate: new Date().toISOString(),
                companiesDetailsImagesAndVideos: companyInfoPhotos,
                companiesDetailsProductionCertifications: certificatesList,
                companiesDetailsContinents: companyContinents,
                companyTotalAnnualRevenue: companyRevenue,
                companyEmployees: companyEmployees,
                companyDesc: companyDescription,
                companyType: companyType,
                companyWebSite: companyWebsite,
                companyProductionCapacity: companyProductionCapacity,
                encodedCompanyEmail: Generateuuid().substring(36)+btoa(companyEmail),

            }

            setCompanyForDispatch(company);


            setTimeout(() => {
                dispatch(registerCompany(company))
            }, 500)


        }else {

            setCompanyEmailError(companyEmailErrors);
            setCompanyPasswordError(companyPasswordErrors);
            setConfirmCompanyPasswordError(companyConfirmPasswordErrors);
            setCompanyNameError(companyNameErrors);
        }
    }


    const setContinent = (index) => {

        let newArr = [...companyContinents];
        newArr[index].continentId === index + 1 ?
            newArr[index].continentId = 0
            : newArr[index].continentId = index + 1;
        setCompanyContinents(newArr);
    }


    const handleChooseCompanyPhoto = async (e) => {

        if (e.target.files[0]) {

            let newArr = [...companyInfoPhotos];

            newArr[companyPhotoIndex].loading = true;

            const file = e.target.files[0];
            const fileName = e.target.files[0].name + uuid();

            const storageRef = app.storage().ref();

            const fileRef = storageRef.child(`company-info-photos/${fileName}`);
            await fileRef.put(file);

            newArr[companyPhotoIndex].companyDetailImageMedia = await fileRef.getDownloadURL();
            newArr[companyPhotoIndex].fileName = fileName;

            setCompanyInfoPhotos(newArr);
        }

    }

    const deleteCompanyPhoto = async (index) => {


        const storageRef = app.storage().ref();

        let fileRef = null;

        fileRef = storageRef.child(`company-info-photos/${companyInfoPhotos[index].fileName}`);

        await fileRef.delete().then(() => {

            let newArr = [...companyInfoPhotos];

            newArr[index].loading = false;

            newArr[index].companyDetailImageMedia = ''
            newArr[index].fileName = ''

            setCompanyInfoPhotos(newArr)

        }).catch((error) => {
            console.log("File deleted failure")
        });

    }


    const handleChooseCertificatePhoto = async (e) => {

        if (e.target.files[0]) {
            const file = e.target.files[0];
            const fileName = e.target.files[0].name + uuid();

            const storageRef = app.storage().ref();

            const fileRef = storageRef.child(`company-info-photos/${fileName}`);
            await fileRef.put(file);

            setCertificatePicture(await fileRef.getDownloadURL());
            setCertificateFileName(fileName);
        }
    }


    const handleCleanCertificate = async () => {

        const storageRef = app.storage().ref();

        let fileRef = storageRef.child(`company-info-photos/${certificateFileName}`);

        await fileRef.delete().then(() => {


            setCertificateFileName('');
            setCertificatePicture('');
            setCertificateBusinessScope('');
            setCertificateAvailableDate('');
            setCertificateIssuedBy('');
            setCertificateName('')

            console.log("File deleted successful")


        }).catch((error) => {
            console.log("File deleted failure")
        });
    }

    const postSocialLogin = () => {
        setSocialLogin(true);
    }


    return (
        <>


            <div className="item-form-group d-flex mt-3">

                <div className="item-form d-flex flex-column">
                    <label className="label d-flex justify-content-between">Company Name <a className="d-none" href="/login">I have a account <i className="fas fa-angle-double-right"/></a></label>
                    <input style={companyNameError !== "" ? {borderColor: "red"} : null} onChange={(e) => {
                        setCompanyName(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>


                    {companyNameError !== "" &&
                    <p>{companyNameError}</p>
                    }


                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Email</label>
                    <input style={companyEmailError !== "" ? {borderColor: "red"} : null} onChange={(e) => {
                        setCompanyEmail(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>

                    {companyEmailError !== "" &&
                    <p>{companyEmailError}</p>
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
                            setCompanyPhone(callingCode + e.target.value)
                        }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>

                    </div>
                </div>

            </div>

            <div className="item-form-group d-flex mt-5 flex-wrap">

                <div className="item-form d-flex flex-column">
                    <label className="label">Password</label>
                    <input
                        style={companyPasswordError !== "" || companyConfirmPasswordError !== "" ? {borderColor: "red"} : null}
                        onChange={(e) => {
                            setCompanyPassword(e.target.value)
                        }} className="input--style-4" type="password" name="first_name" autoComplete="off"/>


                    {companyPasswordError !== "" || companyConfirmPasswordError !== "" ?
                        <p>{companyPasswordError !== "" ? companyPasswordError : companyConfirmPasswordError !== "" ? companyConfirmPasswordError : null}</p>
                        : null}
                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Confirm Password</label>
                    <input
                        style={companyPasswordError !== "" || companyConfirmPasswordError !== "" ? {borderColor: "red"} : null}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }} className="input--style-4" type="password" name="first_name" autoComplete="off"/>
                </div>

            </div>


            <div className="item-form-group d-flex mt-5 flex-wrap form-3">

                <div className="item-form d-flex flex-column">
                    <label className="label">Year Established</label>
                    <input value={companyYearEstablished} onChange={(e) => {
                        setCompanyYearEstablished(e.target.value.replace(/\D/,''))
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Business Type</label>
                    <input onChange={(e) => {
                        setCompanyBusinessType(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Company Type</label>
                    <input onChange={(e) => {
                        setCompanyType(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">website</label>
                    <input onChange={(e) => {
                        setCompanyWebsite(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                </div>

            </div>


            <div className="item-form-group d-flex mt-5 form-4">

                <div className="item-form d-flex flex-column">
                    <label className="label">Total annual revenue - $</label>
                    <input placeholder='$' value={companyRevenue} onChange={(e) => {
                           setCompanyRevenue(e.target.value.replace(/\D/, ''))
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Production capacity</label>
                    <input value={companyProductionCapacity} onChange={(e) => {
                        setCompanyProductionCapacity(e.target.value.replace(/\D/,''))
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Employees</label>
                    <input value={companyEmployees} onChange={(e) => {
                        setCompanyEmployees(e.target.value.replace(/\D/,''))
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>
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
                                    setCompanyCountry(country.name)
                                }}><a className="dropdown-item">{country.name}</a></li>

                            ))}
                        </ul>
                    </div>

                </div>

                <div className="item-form d-flex flex-column form-location">
                    <label className="label">City</label>

                    <input onChange={(e) => {
                        setCompanyCity(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>

                </div>


                <div className="item-form d-flex flex-column">
                    <label className="label">Address</label>
                    <input onChange={(e) => {
                        setCompanyAddress(e.target.value)
                    }} className="input--style-4" type="text" name="first_name" autoComplete="off"/>
                </div>

                <div className="item-form d-flex flex-column">
                    <label className="label">Zip Code</label>
                    <input onChange={(e) => {
                        setCompanyZip(e.target.value)
                    }} className="input--style-4 zip" type="text" name="first_name" autoComplete="off"/>
                </div>

            </div>


            <div className="item-form-group d-flex mt-5 flex-wrap align-items-center">


                <label className="label w-100">Continents branches</label>


                <div className="item-form d-flex w-100 mt-3 continents overflow-auto">

                    <label onClick={() => {
                        setContinent(0)
                    }}
                           className={companyContinents[0].continentId === 1 ? "btn-gry active-continent" : "btn-gry"}>Africa</label>

                    <label onClick={() => {
                        setContinent(1)
                    }}
                           className={companyContinents[1].continentId === 2 ? "btn-gry active-continent" : "btn-gry"}>Asia</label>

                    <label onClick={() => {
                        setContinent(2)
                    }}
                           className={companyContinents[2].continentId === 3 ? "btn-gry active-continent" : "btn-gry"}>Europe</label>

                    <label onClick={() => {
                        setContinent(3)
                    }}
                           className={companyContinents[3].continentId === 4 ? "btn-gry active-continent" : "btn-gry"}>N.America</label>

                    <label onClick={() => {
                        setContinent(4)
                    }}
                           className={companyContinents[4].continentId === 5 ? "btn-gry active-continent" : "btn-gry"}>S.America</label>

                    <label onClick={() => {
                        setContinent(5)
                    }}
                           className={companyContinents[5].continentId === 6 ? "btn-gry active-continent" : "btn-gry"}>Australia</label>

                </div>



                <div className=" d-none item-form d-flex w-100 mt-3 phone-continents overflow-auto">

                    <label onClick={() => {
                        setContinent(0)
                    }}
                           className={companyContinents[0].continentId === 1 ? "btn-gry active-continent" : "btn-gry"}>Africa</label>

                    <label onClick={() => {
                        setContinent(1)
                    }}
                           className={companyContinents[1].continentId === 2 ? "btn-gry active-continent" : "btn-gry"}>Asia</label>

                    <label onClick={() => {
                        setContinent(2)
                    }}
                           className={companyContinents[2].continentId === 3 ? "btn-gry active-continent" : "btn-gry"}>Europe</label>

                    <label onClick={() => {
                        setContinent(3)
                    }}
                           className={companyContinents[3].continentId === 4 ? "btn-gry active-continent" : "btn-gry"}>N.America</label>

                    <label onClick={() => {
                        setContinent(4)
                    }}
                           className={companyContinents[4].continentId === 5 ? "btn-gry active-continent" : "btn-gry"}>S.America</label>

                    <label onClick={() => {
                        setContinent(5)
                    }}
                           className={companyContinents[5].continentId === 6 ? "btn-gry active-continent" : "btn-gry"}>Australia</label>

                </div>

                <div className="item-form-group d-flex flex-column mt-5 flex-wrap w-100">

                    <label className="mb-3">Description</label>

                    <textarea value={companyDescription} rows="10" maxLength="5000" onChange={(e) => {

                           setCompanyDescription(e.target.value)

                    }} autoComplete="off"/>

                </div>


                <div className="item-form-group d-flex mt-5 flex-wrap images-upload">

                    <h5 className="mb-3 ">Upload Company Photos</h5>


                    <div className="photo d-flex align-items-center justify-content-center">
                        <label htmlFor="photo1">
                            {companyInfoPhotos[0].loading === true && companyInfoPhotos[0].companyDetailImageMedia === '' ?
                                <Loading company={true}/>
                                : <img onClick={() => {setCompanyPhotoIndex(0)}}
                                       src={companyInfoPhotos[0].companyDetailImageMedia === '' ? "/images/upload-img2.png" : companyInfoPhotos[0].companyDetailImageMedia}
                                       alt=""/>
                            }
                        </label>
                        <input onChange={handleChooseCompanyPhoto} accept="image/*" id="photo1" type="file" autoComplete="off"/>

                        {companyInfoPhotos[0].companyDetailImageMedia !== '' &&
                        <i onClick={() => {deleteCompanyPhoto(0).then(r => console.log(r))}} className="bi bi-x"/>
                        }
                    </div>


                    <div className="photo d-flex align-items-center justify-content-center">
                        <label htmlFor="photo2">
                            {companyInfoPhotos[1].loading && companyInfoPhotos[1].companyDetailImageMedia === '' ?
                                <Loading company={true}/>
                                : <img onClick={() => {setCompanyPhotoIndex(1)}}
                                       src={companyInfoPhotos[1].companyDetailImageMedia === '' ? "/images/upload-img2.png" : companyInfoPhotos[1].companyDetailImageMedia}
                                       alt=""/>
                            }
                        </label>
                        <input onChange={handleChooseCompanyPhoto} accept="image/*" id="photo2" type="file"
                               autoComplete="off"/>
                        {companyInfoPhotos[1].companyDetailImageMedia !== '' &&
                        <i onClick={() => {
                            deleteCompanyPhoto(1).then(r => console.log(r))
                        }} className="bi bi-x"/>
                        }
                    </div>


                    <div className="photo d-flex align-items-center justify-content-center">
                        <label htmlFor="photo3">
                            {companyInfoPhotos[2].loading && companyInfoPhotos[2].companyDetailImageMedia === '' ?
                                <Loading company={true}/>
                                : <img onClick={() => {setCompanyPhotoIndex(2)}}
                                       src={companyInfoPhotos[2].companyDetailImageMedia === '' ? "/images/upload-img2.png" : companyInfoPhotos[2].companyDetailImageMedia}
                                       alt=""/>
                            }
                        </label>

                        <input onChange={handleChooseCompanyPhoto} accept="image/*" id="photo3" type="file"
                               autoComplete="off"/>
                        {companyInfoPhotos[2].companyDetailImageMedia !== '' &&
                        <i onClick={() => {
                            deleteCompanyPhoto(2).then(r => console.log(r))
                        }} className="bi bi-x"/>
                        }
                    </div>


                    <div className="photo d-flex align-items-center justify-content-center">
                        <label htmlFor="photo4">
                            {companyInfoPhotos[3].loading && companyInfoPhotos[3].companyDetailImageMedia === '' ?
                                <Loading company={true}/>
                                : <img onClick={() => {setCompanyPhotoIndex(3)}}
                                       src={companyInfoPhotos[3].companyDetailImageMedia === '' ? "/images/upload-img2.png" : companyInfoPhotos[3].companyDetailImageMedia}
                                       alt=""/>
                            }
                        </label>

                        <input onChange={handleChooseCompanyPhoto} accept="image/*" id="photo4" type="file"
                               autoComplete="off"/>
                        {companyInfoPhotos[3].companyDetailImageMedia !== '' &&
                        <i onClick={() => {
                            deleteCompanyPhoto(3).then(r => console.log(r))
                        }} className="bi bi-x"/>
                        }
                    </div>


                    <div className="photo d-flex align-items-center justify-content-center">
                        <label htmlFor="photo5">
                            {companyInfoPhotos[4].loading && companyInfoPhotos[4].companyDetailImageMedia === '' ?
                                <Loading company={true}/>
                                : <img onClick={() => {setCompanyPhotoIndex(4)}}
                                       src={companyInfoPhotos[4].companyDetailImageMedia === '' ? "/images/upload-img2.png" : companyInfoPhotos[4].companyDetailImageMedia}
                                       alt=""/>
                            }
                        </label>

                        <input onChange={handleChooseCompanyPhoto} accept="image/*" id="photo5" type="file"
                               autoComplete="off"/>
                        {companyInfoPhotos[4].companyDetailImageMedia !== '' &&
                        <i onClick={() => {
                            deleteCompanyPhoto(4).then(r => console.log(r))
                        }} className="bi bi-x"/>
                        }
                    </div>


                    <div className="photo d-flex align-items-center justify-content-center">
                        <label htmlFor="photo6">

                            {companyInfoPhotos[5].loading && companyInfoPhotos[5].companyDetailImageMedia === '' ?
                                <Loading company={true}/>
                                : <img onClick={() => {setCompanyPhotoIndex(5)}}
                                       src={companyInfoPhotos[5].companyDetailImageMedia === '' ? "/images/upload-img2.png" : companyInfoPhotos[5].companyDetailImageMedia}
                                       alt=""/>
                            }
                        </label>

                        <input onChange={handleChooseCompanyPhoto} accept="image/*" id="photo6" type="file"
                               autoComplete="off"/>
                        {companyInfoPhotos[5].companyDetailImageMedia !== '' &&
                        <i onClick={() => {
                            deleteCompanyPhoto(5).then(r => console.log(r))
                        }} className="bi bi-x"/>
                        }
                    </div>

                </div>


                <div className="item-form-group d-flex mt-5 flex-wrap certificate-upload overflow-auto">

                    <label className="mb-1">Upload Certificate</label>


                    <table>
                        <thead>

                        <tr>
                            <th>Picture</th>
                            <th>Certification Name</th>
                            <th>Issued By</th>
                            <th>Business Scope</th>
                            <th>Available Date</th>
                            {certificatePicture !== '' || certificateBusinessScope !== '' || certificateBusinessScope !== '' || certificateIssuedBy !== '' || certificateName !== '' || certificateAvailableDate !== '' ?
                                <th>Delete</th>
                                : null}
                        </tr>

                        </thead>

                        <tbody>

                        <tr>
                            <td>
                                <input onChange={handleChooseCertificatePhoto} accept="image/*" id="p-certificate"
                                       type="file" autoComplete="off"/>

                                <label htmlFor="p-certificate">
                                    <img
                                        src={certificatePicture === '' ? "/images/upload-img3.png" : certificatePicture}
                                        alt=""/>
                                </label>
                            </td>
                            <td><input onChange={(e) => {
                                setCertificateName(e.target.value)
                            }} type="text" autoComplete="off" value={certificateName}/></td>
                            <td><input onChange={(e) => {
                                setCertificateIssuedBy(e.target.value)
                            }} type="text" autoComplete="off" value={certificateIssuedBy}/></td>
                            <td><input onChange={(e) => {
                                setCertificateBusinessScope(e.target.value)
                            }} type="text" autoComplete="off" value={certificateBusinessScope}/></td>
                            <td><input onChange={(e) => {
                                setCertificateAvailableDate(e.target.value)
                            }} type="date" autoComplete="off" value={certificateAvailableDate}/></td>

                            {certificatePicture !== '' || certificateBusinessScope !== '' || certificateBusinessScope !== '' || certificateIssuedBy !== '' || certificateName !== '' || certificateAvailableDate !== '' ?
                                <td><i onClick={() => {
                                    handleCleanCertificate()
                                }} className="bi bi-x-lg ms-4 cursor-pointer"/></td>
                                : null}
                        </tr>
                        </tbody>
                    </table>

                </div>


                <div
                    className="item-form-group d-flex flex-column mt-5 justify-content-center align-items-center w-100 submit">

                    <div className="signup-button d-flex align-items-center">

                        <button className={loading && "disabled-signup-button"} onClick={signup}> {loading ?
                        <Loading/>
                        : "Signup"}</button>


                    </div>


                    <p>or</p>

                    <p>Signin with your socila media account:</p>

                    <SocialLoginButtons socialLogin = {socialLogin} postSocialLogin={postSocialLogin}/>

                </div>

            </div>

        </>
    );
}

export default Company;