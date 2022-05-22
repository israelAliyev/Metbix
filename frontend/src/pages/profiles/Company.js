import React from 'react';

function Company(props) {
    return (
        <div className="company item">


            <div className="name">

                <h3>{props.profile.companyName}</h3>
                <span>Company</span>

            </div>

            <div className="image">
                <img src={props.profile.companyProfilePhoto} alt="profile photo not found"/>
            </div>


            <div className="info">
                <p><span>Email:</span> {props.profile.companyEmail}</p>
                <p><span>Country / City:</span>{props.profile.companyCountry} / {props.profile.companyCity}</p>
                <p><span>Address:</span>{props.profile.companyAddress}</p>
                <p><span>Phone:</span>{props.profile.companyPhone}</p>
                <p><span>Business Type:</span>{props.profile.companyBusinessType}</p>
                <p><span>Total Annue Revenue:</span>{props.profile.companyTotalAnnualRevenue}</p>
                <p><span>Employees</span>{props.profile.companyEmployees}</p>
                <a><i className="ri-mail-send-line"/> Send Message</a>

            </div>

            <div className="desc">
                <p>{props.profile.companyDesc} </p>
            </div>

        </div>
    );
}

export default Company;