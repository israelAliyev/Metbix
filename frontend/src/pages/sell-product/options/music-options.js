import React, {useEffect, useState} from 'react';
import FetchOptions from "../../../services/options/fetch-options";

function MusicOptions(props) {

    const [typeError, setTypeError] = useState(undefined)
    const [musicInstruments, setMusicInstruments] = useState([{instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0}, {instrumentId: 0} ])

    const setOption = (option, optionId, index) => {

        if (option === "music_instrument") {

            let newArr = [...musicInstruments]
            newArr[index].instrumentId === optionId ?
                newArr[index].instrumentId = 0
                : newArr[index].instrumentId = optionId

            setMusicInstruments(newArr);

        }
    }


    useEffect(() => {


            props.setMusicInstruments(musicInstruments)



    }, [musicInstruments, props, props.addProductLoading])


    useEffect(() => {

        if (FetchOptions("music_instrument", props.categoryId).length === 0) {
            setTypeError(true)
        }else{
            setTypeError(false)
        }

    }, [props.categoryId])

    return (
        <>

            {!typeError &&
                <div className="form options align-items-start">

                    <p>Instrument Type</p>

                    <div className="items">
                        {FetchOptions("music_instrument", props.categoryId).map((option, index) => (
                            <div onClick={() => {
                                setOption("music_instrument", parseInt(option.instrumentId), index)
                            }}
                                 className={musicInstruments[index].instrumentId !== 0 ? "item active-option-item" : "item"}>
                                <span>{option.instrument}</span>
                            </div>
                        ))}
                    </div>
                </div>
                }

            {!typeError &&

            <hr/>
            }

        </>
    );
}

export default MusicOptions;