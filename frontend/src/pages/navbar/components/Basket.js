import React from 'react';
import {useSelector} from "react-redux";

function Basket(props) {

    const profile = useSelector(state => state.get_profile_by_email);



    return (
        <>
            {/*Shopping cart or basket */}
            <li onClick={() => {window.location.href = "/basket"}} className="nav-item navbar-basket">
                <img
                    width="46"
                    src="/images/shopping-basket3.png"
                    className="img-fluid"
                />
                <span>{profile.response && profile.response.basketProductsCount > 99 ? "99+" : profile.response ? profile.response.basketProductsCount  : "--"}</span>
            </li>
        </>
    );
}

export default Basket;