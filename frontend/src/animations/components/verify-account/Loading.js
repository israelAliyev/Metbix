import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../../jsons/72899-manage-accounts.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}


const Loading = () => {
    return (
        <div>

            <h1 style={{marginLeft:"3rem"}}>Verifying Account..</h1>

            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    )
}

export default Loading;