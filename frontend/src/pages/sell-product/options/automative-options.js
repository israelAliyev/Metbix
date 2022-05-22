import React, {useEffect, useState} from 'react';
import FetchOptions from "../../../services/options/fetch-options";

const AutomativeOptions = (props) => {

    const [crashError, setCrashError] = useState(undefined)
    const [engineError, setEngineError] = useState(undefined)
    const [fuelTypeError, setFuelTypeError] = useState(undefined)
    const [maxSpeedError, setMaxSpeedError] = useState(undefined)
    const [seatError, setSeatError] = useState(undefined)
    const [typeError, setTypeError] = useState(undefined)

    const [automotiveProductsColors, setAutomotiveProductsColors] = useState([
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0}
    ])

    const [automotiveMaxSpeeds, setAutomotiveMaxSpeeds] = useState([{maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}, {maxSpeedId: 0}])
    const [automotiveFuels, setAutomotiveFuels] = useState([{fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}, {fuelId: 0}])
    const [automotiveSeats, setAutomotiveSeats] = useState([{seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}, {seatId: 0}])
    const [automotiveCrashes, setAutomotiveCrashes] = useState([{crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}, {crashId: 0}])
    const [automotiveEngines, setAutomotiveEngines] = useState([{engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}, {engineId: 0}])
    const [automotiveTypes, setAutomotiveTypes] = useState([{typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}])

    const [automotiveDistanceTraveleds, setAutomotiveDistanceTraveleds] = useState(null)

    const [distanceTraveledCount, setDistanceTraveledCount] = useState(0)
    const [distanceTraveled, setDistanceTraveled] = useState(null)


    const addDistanceTraveled = (km) => {

        if (km) {

            setDistanceTraveledCount(distanceTraveledCount + 1);

            if (automotiveDistanceTraveleds === null) {
                setAutomotiveDistanceTraveleds([{
                    distanceTraveled: km,
                    index: distanceTraveledCount + 1
                }])
                setDistanceTraveled("")
            } else {

                let newArr = [...automotiveDistanceTraveleds]

                if (automotiveDistanceTraveleds.filter(km => km.distanceTraveled === km)) {

                    newArr.push({
                        distanceTraveled: km,
                        index: distanceTraveledCount + 1
                    })

                    setAutomotiveDistanceTraveleds(newArr);
                    setDistanceTraveled("")
                }
            }
        }
    }


    const deleteDistanceTraveled = (index) => {

        setDistanceTraveledCount(distanceTraveledCount - 1);
        let newArr = automotiveDistanceTraveleds.filter(km => km.index !== index);
        setAutomotiveDistanceTraveleds(newArr);
    }


    const setColor = (index) => {

        let newArr = [...automotiveProductsColors]
        newArr[index].colorId === index + 1 ?
            newArr[index].colorId = 0
            : newArr[index].colorId = index + 1

        setAutomotiveProductsColors(newArr);
    }


    const setOption = (option, optionId, index) => {
        if (option === "automotive_crash") {

            let newArr = [...automotiveCrashes]
            newArr[index].crashId === optionId ?
                newArr[index].crashId = 0
                : newArr[index].crashId = optionId

            setAutomotiveCrashes(newArr);

        }  if (option === "automotive_engine") {

            let newArr = [...automotiveEngines]
            newArr[index].engineId === optionId ?
                newArr[index].engineId = 0
                : newArr[index].engineId = optionId

            setAutomotiveEngines(newArr);
        }  if (option === "automotive_fuel") {

            let newArr = [...automotiveFuels]
            newArr[index].fuelId === optionId ?
                newArr[index].fuelId = 0
                : newArr[index].fuelId = optionId

            setAutomotiveFuels(newArr);
        }  if (option === "automotive_max_speed") {

            let newArr = [...automotiveMaxSpeeds]
            newArr[index].maxSpeedId === optionId ?
                newArr[index].maxSpeedId = 0
                : newArr[index].maxSpeedId = optionId

            setAutomotiveMaxSpeeds(newArr);
        }  if (option === "automotive_seat") {

            let newArr = [...automotiveSeats]
            newArr[index].seatId === optionId ?
                newArr[index].seatId = 0
                : newArr[index].seatId = optionId

            setAutomotiveSeats(newArr);
        }  if (option === "automotive_type") {

            let newArr = [...automotiveTypes]
            newArr[index].typeId === optionId ?
                newArr[index].typeId = 0
                : newArr[index].typeId = optionId

            setAutomotiveTypes(newArr);
        }
    }


    useEffect(() => {


            props.setAutomotiveProductsColors(automotiveProductsColors)
            props.setAutomotiveMaxSpeeds(automotiveMaxSpeeds)
            props.setAutomotiveFuels(automotiveFuels)
            props.setAutomotiveSeats(automotiveSeats)
            props.setAutomotiveTypes(automotiveTypes)
            props.setAutomotiveCrashes(automotiveCrashes)
            props.setAutomotiveDistanceTraveleds(automotiveDistanceTraveleds)
            props.setAutomotiveEngines(automotiveEngines)


    }, [automotiveCrashes, automotiveDistanceTraveleds, automotiveEngines, automotiveFuels, automotiveMaxSpeeds, automotiveProductsColors, automotiveSeats, automotiveTypes, props, props.addProductLoading])


    useEffect(() => {

        if (FetchOptions("automotive_crash", props.categoryId).length === 0) {
            setCrashError(true)
        }else{
            setCrashError(false)
        }

        if (FetchOptions("automotive_engine", props.categoryId).length === 0) {
            setEngineError(true)
        }else{
            setEngineError(false)
        }

        if (FetchOptions("automotive_fuel", props.categoryId).length === 0) {
            setFuelTypeError(true)
        }else {
            setFuelTypeError(false)
        }

        if (FetchOptions("automotive_max_speed", props.categoryId).length === 0) {
            setMaxSpeedError(true)
        }else{
            setMaxSpeedError(false)
        }

        if (FetchOptions("automotive_seat", props.categoryId).length === 0) {
            setSeatError(true)
        }else{
            setSeatError(false)
        }

        if (FetchOptions("automotive_type", props.categoryId).length === 0) {
            setTypeError(true)
        }else{
            setTypeError(false)
        }

    }, [props.categoryId])

    return (
        <>

            {!crashError || !engineError || !fuelTypeError || !maxSpeedError || !seatError || !typeError ?

                <div className="form colors">

                    <p>Choose Colors</p>

                    <div className="d-flex">

                        <input onClick={() => {
                            setColor(0)
                        }} className="bg-white" type="checkbox"/>
                        <input onClick={() => {
                            setColor(1)
                        }} className="bg-dark" type="checkbox"/>
                        <input onClick={() => {
                            setColor(2)
                        }} className="bg-danger" type="checkbox"/>
                        <input onClick={() => {
                            setColor(3)
                        }} className="bg-primary" type="checkbox"/>
                        <input onClick={() => {
                            setColor(4)
                        }} className="bg-secondary" type="checkbox"/>
                        <input onClick={() => {
                            setColor(5)
                        }} className="bg-success" type="checkbox"/>
                        <input onClick={() => {
                            setColor(6)
                        }} className="bg-yellow" type="checkbox"/>
                        <input onClick={() => {
                            setColor(7)
                        }} className="bg-orange" type="checkbox"/>
                        <input onClick={() => {
                            setColor(8)
                        }} className="bg-brown" type="checkbox"/>
                        <input onClick={() => {
                            setColor(9)
                        }} className="bg-pink" type="checkbox"/>
                        <input onClick={() => {
                            setColor(10)
                        }} className="bg-cream" type="checkbox"/>
                        <input onClick={() => {
                            setColor(11)
                        }} className="bg-silver" type="checkbox"/>
                        <div onClick={() => {
                            setColor(12)
                        }}
                             className={automotiveProductsColors[12].colorId !== 0 ? "other-color active-other-color" : "other-color"}>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>

                    </div>
                </div>
                : null}


            {!crashError &&


            <div className="form options align-items-start">

                <p>Crash</p>

                <div className="items">
                    {FetchOptions("automotive_crash", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("automotive_crash", parseInt(option.crashId), index)
                        }} className={automotiveCrashes[index].crashId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.crash}</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {!engineError &&

            <div className="form options align-items-start">

                <p>Engine</p>

                <div className="items">
                    {FetchOptions("automotive_engine", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("automotive_engine", parseInt(option.engineId), index)
                        }} className={automotiveEngines[index].engineId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.engine}</span>
                        </div>
                    ))}
                </div>
            </div>
            }

            {!fuelTypeError &&

            <div className="form options align-items-start">

                <p>Fuel Type</p>

                <div className="items">
                    {FetchOptions("automotive_fuel", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("automotive_fuel", parseInt(option.fuelId), index)
                        }} className={automotiveFuels[index].fuelId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.fuel}</span>
                        </div>
                    ))}
                </div>
            </div>
            }

            {!maxSpeedError &&

            <div className="form options align-items-start">

                <p>Max Speed</p>

                <div className="items">
                    {FetchOptions("automotive_max_speed", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("automotive_max_speed", parseInt(option.maxSpeedId), index)
                        }}
                             className={automotiveMaxSpeeds[index].maxSpeedId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.maxSpeed}</span>
                        </div>
                    ))}
                </div>
            </div>

            }


            {!seatError &&

            <div className="form options align-items-start">

                <p>Seat</p>

                <div className="items">
                    {FetchOptions("automotive_seat", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("automotive_seat", parseInt(option.seatId), index)
                        }} className={automotiveSeats[index].seatId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.seat}</span>
                        </div>
                    ))}
                </div>
            </div>
            }

            {!typeError &&

            <div className="form options align-items-start">

                <p>Type</p>

                <div className="items">
                    {FetchOptions("automotive_type", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("automotive_type", parseInt(option.typeId), index)
                        }} className={automotiveTypes[index].typeId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.type}</span>
                        </div>
                    ))}
                </div>
            </div>

            }


            {props.quantity !== 0 && props.quantity && (!crashError || !engineError || !fuelTypeError || !maxSpeedError || !seatError || !typeError) ?

                <div className="form options align-items-start">

                    <p>Distance Traveled - km</p>


                    <div className="items input-items d-flex flex-column">

                        {automotiveDistanceTraveleds &&

                        automotiveDistanceTraveleds.map((km_map) => (
                            <div className="input-item d-flex">
                                <input readOnly={true} type="text" value={km_map.distanceTraveled}/>

                                <i onClick={() => {
                                    deleteDistanceTraveled(km_map.index)
                                }} className="bi bi-x-circle"/>
                            </div>
                        ))
                        }

                        {props.quantity > distanceTraveledCount &&
                        <div className="input-item d-flex ">
                            <input value={distanceTraveled} onChange={(e) => {
                                setDistanceTraveled(e.target.value.replace(/\D/, ''))
                            }} type="text"/>
                            <i onClick={() => {
                                addDistanceTraveled(distanceTraveled)
                            }} className="bi bi-plus-circle-fill"/>
                        </div>
                        }

                    </div>


                </div>

                : null}

            {!crashError || !engineError || !fuelTypeError || !maxSpeedError || !seatError || !typeError ?

                <hr/>
                : null}


        </>
    );
}

export default AutomativeOptions;
