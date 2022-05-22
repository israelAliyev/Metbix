import React, {useEffect, useState} from 'react';

function DefaultOptions(props) {

    const [condition, set_condition] = useState(null);
    const [domestic_shipping, set_domestic_shipping] = useState(null);
    const [international_shipping, set_international_shipping] = useState(null);
    const [warranty, set_warranty] = useState(null);


    const setConditionHandler = (value) => {

        if (value === 'new') {

            if (!condition) {
                set_condition('new');
            } else if (condition === 'new') {
                set_condition(null)
            } else if (condition === 'both') {
                set_condition('used')
            } else if (condition === 'used') {
                set_condition('both')
            }

        } else {

            if (!condition) {
                set_condition('used');
            } else if (condition === 'used') {
                set_condition(null)
            } else if (condition === 'both') {
                set_condition('new')
            } else if (condition === 'new') {
                set_condition('both')
            }

        }
    }


    const setOptionHandler = (value, setMethod, option) => {

        let obj = {};

        if (option === 'domestic_shipping') {
            obj = domestic_shipping;
        } else if (option === 'international_shipping') {
            obj = international_shipping;
        } else if (option === 'warranty') {
            obj = warranty;
        }

        if (value === true) {

            if (obj === null) {
                setMethod(true);
            } else if (obj === true) {
                setMethod(null)
            } else if (obj === 'both') {
                setMethod(false)
            } else if (obj === false) {
                setMethod('both')
            }

        } else {


            if (obj === null) {
                setMethod(false);
            } else if (obj === false) {
                setMethod(null)
            } else if (obj === 'both') {
                setMethod(true)
            } else if (obj === true) {
                setMethod('both')
            }

        }
    }

    useEffect(() => {

         props.set_condition(condition)
         props.set_domestic_shipping(domestic_shipping)
         props.set_international_shipping(international_shipping)
         props.set_warranty(warranty)

    }, [condition , warranty , international_shipping , domestic_shipping])

    return (
        <>
            <div className="default-options d-flex flex-column">

                <div className="internation-shipment d-flex flex-column">

                    <p className="title">Condition</p>

                    <label>
                        <input onClick={() => {
                            setConditionHandler('new')
                        }} type="checkbox" className="me-2"/>
                        New
                    </label>

                    <label>
                        <input onClick={() => {
                            setConditionHandler('used')
                        }} type="checkbox" className="me-2"/>
                        Used
                    </label>

                </div>

                <div className="domestic-shipment d-flex flex-column ">

                    <p className="title">Domestic Shipment</p>

                    <label>
                        <input onClick={() => {setOptionHandler(true , set_domestic_shipping , 'domestic_shipping')}} type="checkbox" className="me-2"/>
                        Yes
                    </label> <label>
                    <input onClick={() => {setOptionHandler(false , set_domestic_shipping , 'domestic_shipping')}} type="checkbox" className="me-2"/>
                    No
                </label>
                </div>

                <div className="internation-shipment d-flex flex-column">

                    <p className="title">International Shipment</p>

                    <label>
                        <input onClick={() => {setOptionHandler(true , set_international_shipping , 'international_shipping')}} type="checkbox" className="me-2"/>
                        Yes
                    </label> <label>
                    <input onClick={() => {setOptionHandler(false , set_international_shipping , 'international_shipping')}} type="checkbox" className="me-2"/>
                    No
                </label>
                </div>


                <div className="internation-shipment d-flex flex-column">

                    <p className="title ">Warranty</p>

                    <label>
                        <input onClick={() => {setOptionHandler(true , set_warranty , 'warranty')}} type="checkbox" className="me-2"/>
                        Yes
                    </label> <label>
                    <input onClick={() => {setOptionHandler(false , set_warranty , 'warranty')}} type="checkbox" className="me-2"/>
                    No
                </label>
                </div>

            </div>
        </>
    );
}

export default DefaultOptions;