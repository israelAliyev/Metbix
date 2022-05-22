import React, {useEffect, useState} from 'react';

function HomeOptions(props) {

    const [area, setArea] = useState(0);
    const [garage, setGarage] = useState(undefined);
    const [garden, setGarden] = useState(undefined);
    const [floors, setFloors] = useState(0);
    const [balcony, setBalcony] = useState(undefined);
    const [heatingType, setHeatingType] = useState(null);


    useEffect(() => {


            const home = {
                area,
                garage,
                garden,
                floors,
                balcony,
                heatingType
            }

            if (area) {
                props.setProductsHomeOptions(home)
            }


    }, [props.addProductLoading , area])

    return (
        <>

            {/* for all */}
            <div className="form options align-items-start">

                <p>Area - km2</p>

                <div className="items">
                    <div className="input-item ">

                        <input value={area} onChange={(e) => {
                            setArea(e.target.value.replace(/\D/, ''))
                        }} type="text"/>

                    </div>
                </div>
            </div>

            {props.categoryId === 99 || props.categoryId === 100 ?

                <div className="form options align-items-start">

                    <p>Garage</p>

                    <div className="items">

                            <div onClick={() => {
                                setGarage(true)
                            }}  className={garage === true ? "item active-option-item" : "item"}>
                                <span>Yes</span>
                            </div>

                            <div onClick={() => {
                                setGarage(false)
                            }}  className={garage === false ? "item active-option-item" : "item"}>
                                <span>Yes</span>
                            </div>

                        </div>

                </div>

                : null}

            {props.categoryId === 99 || props.categoryId === 100 ?

                <div className="form options align-items-start">

                    <p>Garden</p>

                    <div className="items">

                            <div onClick={() => {
                                setGarden(true)
                            }}  className={garden === true ? "item active-option-item" : "item"}>
                                <span>Yes</span>
                            </div>

                            <div onClick={() => {
                                setGarden(false)
                            }}  className={garden === false ? "item active-option-item" : "item"}>
                                <span>Yes</span>
                            </div>

                    </div>
                </div>
                : null}

            {props.categoryId === 99 || props.categoryId === 102 ?

                <div className="form options align-items-start">

                    <p>Floors</p>

                    <div className="items">
                        <div className="input-item ">

                            <input value={floors} onChange={(e) => {
                                setFloors(e.target.value.replace(/\D/, ''))
                            }} type="text"/>

                        </div>
                    </div>
                </div>
                : null}


            {props.categoryId === 99 || props.categoryId === 100 || props.categoryId === 102 || props.categoryId === 103 ?

                <div className="form options align-items-start">

                    <p>Balcony</p>

                    <div className="items">

                        <div onClick={() => {
                            setBalcony(true)
                        }}  className={balcony === true ? "item active-option-item" : "item"}>
                            <span>Yes</span>
                        </div>

                        <div onClick={() => {
                            setBalcony(false)
                        }}  className={balcony === false ? "item active-option-item" : "item"}>
                            <span>Yes</span>
                        </div>


                    </div>
                </div>
                : null}

            {props.categoryId === 99 || props.categoryId === 100 || props.categoryId === 102 || props.categoryId === 103 ?

                <div className="form options align-items-start">

                    <p>Heating Type</p>

                    <div className="items">
                        <div className="input-item ">

                            <input onChange={(e) => {
                                setHeatingType(e.target.value)
                            }} type="text"/>

                        </div>
                    </div>
                </div>
                : null}

            <hr/>

        </>
    );
}

export default HomeOptions;