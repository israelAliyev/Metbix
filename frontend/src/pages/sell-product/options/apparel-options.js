import React, {useEffect, useState} from 'react';
import FetchOptions from "../../../services/options/fetch-options";

const ApparelOptions = (props) => {

    const [fabricError, setFabricError] = useState(undefined)
    const [sizeError, setSizeError] = useState(undefined)

    const [apparelProductsColors, setApparelProductsColors] = useState([
        {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }, {
            colorId: 0
        }
    ])

    const [apparelFabricTypes, setApparelFabricTypes] = useState([
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0},
        {fabricTypeId: 0}
    ])
    const [apparelSizes, setApparelSizes] = useState([
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0},
        {sizeId: 0}
    ])


    const setColor = (index) => {

        let newArr = [...apparelProductsColors]
        newArr[index].colorId === index + 1 ?
            newArr[index].colorId = 0
            : newArr[index].colorId = index + 1

        setApparelProductsColors(newArr);
    }


    const setOption = (option, optionId, index) => {

        if (option === "apparel-fabric-type") {

            let newArr = [...apparelFabricTypes]
            newArr[index].fabricTypeId === optionId ?
                newArr[index].fabricTypeId = 0
                : newArr[index].fabricTypeId = optionId

            setApparelFabricTypes(newArr);
        }


        if (option === "apparel-size") {

            let newArr = [...apparelSizes]
            newArr[index].sizeId === optionId ?
                newArr[index].sizeId = 0
                : newArr[index].sizeId = optionId

            setApparelSizes(newArr);
        }

    }

    useEffect(() => {


            props.setApparelProductsColors(apparelProductsColors)
            props.setApparelSizes(apparelSizes)
            props.setApparelFabricTypes(apparelFabricTypes);

    }, [apparelFabricTypes, apparelProductsColors, apparelSizes, props, props.addProductLoading])


    useEffect(() => {

        if (FetchOptions("apparel-fabric-type", props.subCategoryId).length <= 0) {
            setFabricError(true)
        }else{
            setFabricError(false)
        }

        if (FetchOptions("apparel-size", props.subCategoryId).length <= 0) {
            setSizeError(true)
        }else{
            setSizeError(false)
        }

    }, [props.subCategoryId])


    return (
        <>
            {!fabricError || !sizeError ?

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
                             className={apparelProductsColors[12].colorId !== 0 ? "other-color active-other-color" : "other-color"}>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>

                    </div>
                </div>
                : null}

            {!fabricError &&

                <div className="form options align-items-start">

                    <p>Apparels Fabric Types</p>

                    <div className="items">
                        {FetchOptions("apparel-fabric-type", props.subCategoryId).map((option, index) => (
                            <div onClick={() => {
                                setOption("apparel-fabric-type", parseInt(option.fabricTypeId), index)
                            }}
                                 className={apparelFabricTypes[index].fabricTypeId !== 0 ? "item active-option-item" : "item"}>
                                <span>{option.fabricType}</span>
                            </div>
                        ))}
                    </div>
                </div>
                }


            {!sizeError &&

                <div className="form options align-items-start">

                    <p>Apparels Sizes</p>

                    <div className="items">
                        {FetchOptions("apparel-size", props.subCategoryId).map((option, index) => (
                            <div onClick={() => {
                                setOption("apparel-size", parseInt(option.sizeId), index)
                            }} className={apparelSizes[index].sizeId !== 0 ? "item active-option-item" : "item"}>
                                <span>{option.size}</span>
                            </div>
                        ))}
                    </div>
                </div>
                }


            {!fabricError || !sizeError ?

                <hr/>
                : null}

        </>
    )
}

export default ApparelOptions;
