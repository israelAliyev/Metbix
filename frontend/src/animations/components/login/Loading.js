import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../../jsons/74936-circle-loading-animation.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}


const Loading = (props) => {
    return (
        <div>
                <Lottie options={defaultOptions} height={35} width={35}  />
        </div>
    )
}

export default Loading;