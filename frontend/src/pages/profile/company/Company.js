import React, {Component, useEffect, useState} from 'react';
import '../../../css/profilecompany.css'
import Overview from "./Overview";
import ProductOverview from "../components/ProductOverview";
import {getCompanyById, getCompanyByEmail} from "../../../services";
import {useDispatch, useSelector} from "react-redux";
import useQuery from "../../../services/url-query-parameter/url-query-parameter";


const Company = () => {

    const query = useQuery();

    const company_id = query.get("company-id");
    const company_email = query.get("company-email");

    const dispatch = useDispatch();



    const get_company = useSelector(state => state.get_company_by_email);


    const [company, set_company] = useState(null);
    const [media, set_media] = useState(null);
    const [certificate, set_certificate] = useState(null);
    const [continents, set_continents] = useState(null);
    const [stock_products, set_stock_products] = useState(null);
    const [request_products, set_request_products] = useState(null);
    const [basket_products, set_basket_products] = useState(null);


    if (!company_id && !company_email) window.location.href = "/"


    useEffect(() => {

        if (get_company.response) {
            set_company(get_company.response.company);
            set_media(get_company.response.companiesDetailsImagesAndVideos);
            set_certificate(get_company.response.companiesDetailsProductionCertifications);
            set_continents(get_company.response.companiesDetailsContinents);
            set_stock_products(get_company.response.products);
            set_request_products(get_company.response.requestProducts);
            set_basket_products(get_company.response.basketProducts);
        }


    }, [get_company])


    useEffect(() => {
        if (company_id || company_email) {
            company_id ? dispatch(getCompanyById(company_id)) : dispatch(getCompanyByEmail(company_email));
        }
    }, [])

    return (
        <>
            <div className="profile-company p-5 mb-5">

                {get_company.response &&
                <header>

                    {/*profile photo and background photo*/}
                    <div className="pp-bp">

                        <img src={company?.companyProfilePhoto ? company?.companyProfilePhoto : "images/avatar.png"} alt=""/>

                        <img src={company?.companyProfileBack ? company.companyProfileBack : "images/isi2.jpg"} alt=""/>

                    </div>

                    <div>

                        <div className="texts d-flex">

                            <div className="info d-flex flex-column">
                                <h1>{company?.companyName}</h1>
                                <h6>{company?.companyBusinessType} </h6>
                                <p className="d-flex">{company?.companyCountry}, {company?.companyCity}</p>
                            </div>

                        </div>


                        <div className="actions d-flex justify-content-between flex-wrap mt-3">

                            <div className="buttons d-flex">
                                <button className="message"><i className="bi bi-envelope me-2"/>Message</button>
                                <button className="site" onClick={() => {window.open( company.companyWebsite)}}>Visit Comapny Site <i className="bi bi-box-arrow-up-right ms-2"/></button>
                                <button onClick={() => {window.location.href = "/profile-products?email="+company?.companyEmail+"&type=company"}} className="products">Products</button>
                                <button onClick={() => {window.location.href = "/basket?email="+company?.companyEmail+"&type=company"}} className="products"><i className="bi bi-cart2"/> Basket</button>
                            </div>

                        </div>

                    </div>

                </header>
                }


                {get_company.response &&

                <div className="body">

                    <div className="description mt-5">


                        <h3 className="title">Description</h3>

                        <p>{company?.companyDesc}</p>

                        <table>

                            <tbody>

                            <tr>
                                <td>Website</td>
                                <td>
                                    {/*<a href={window.location.href = company?.companyWebsite}>{company?.companyWebsite}</a>*/}
                                </td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td><a>{company?.companyPhone}</a></td>
                            </tr>
                            <tr>
                                <td>Industry</td>
                                <td>{company?.companyBusinessType}</td>
                            </tr>
                            <tr>
                                <td>Company size</td>
                                <td>{company?.companyEmployees} employees</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>{company?.companyType}</td>
                            </tr>
                            <tr>
                                <td>Founded</td>
                                <td>{company?.companyYearEstablished}</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>

                    <Overview company={company} media={media} certificate={certificate} continents={continents} />

                </div>
                }


                {!get_company.response &&

                <div className="animation">
                    <iframe src="https://embed.lottiefiles.com/animation/27564"/>
                </div>
                }

            </div>

        </>
    );
}

export default Company;