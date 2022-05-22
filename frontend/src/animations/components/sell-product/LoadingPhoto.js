import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../../jsons/13181-photo.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}


const LoadingPhoto = () => {
    return (
        <>
            <Lottie options={defaultOptions} height={200} width={200} />
        </>
    )
}

export default LoadingPhoto;