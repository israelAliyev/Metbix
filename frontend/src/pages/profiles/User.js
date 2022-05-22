import React from 'react';

function User(props) {
    return (
        <div className="user item">


            <div className="name">

                <h3>{props.profile.userName}</h3>

                <span>User</span>

            </div>


            <div className="image">

                <img src={props.profile.userPhoto} alt="user photo not found"/>

            </div>


            <div className="info">

                <p><span>Email:</span> {props.profile.userEmail}</p>
                <p><span>Country / City:</span>{props.profile.userCountry} / {props.profile.userCity}</p>
                <p><span>Adress:</span>{props.profile.userAddress}</p>
                <p><span>Phone:</span>{props.profile.userPhone}</p>

                <a><i className="ri-mail-send-line"></i> Send Message</a>

            </div>


        </div>
    );
}

export default User;