import React from 'react';

function Logo(props) {
    return (
        <>
            {/*Site logo on Navigation bar */}
            <a className="navbar-brand" href="/">
                <img className="img img-fluid " src="/images/logo.png"/>
            </a>

        </>
    );
}

export default Logo;