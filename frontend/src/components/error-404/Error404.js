import React from 'react';
import '../../css/error404.css'

function Error404(props) {
    return (
        <>

            <div className="error-404 mt-5 mb-5 d-flex flex-column align-items-center">

                <img src="/images/404-page.png" alt=""/>

                <h1>Page Bot Found</h1>


                <p>Sorry for the inconvenience. Go to our homepage or check out our latest collections for Fashion, Chair, Phone ,Decoration...</p>

                <button>Return To Home</button>

            </div>

        </>
    );
}

export default Error404;