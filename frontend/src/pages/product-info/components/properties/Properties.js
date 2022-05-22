import React, {useEffect, useState} from 'react';
import DivideFutures from "../../../../services/divide-features/divide-futures";

function Properties(props) {

    const [propertiesFirstHalf, setPropertiesFirstHalf] = useState([]);
    const [propertiesSecondHalf, setPropertiesSecondHalf] = useState([]);

    useEffect(() => {

        const list = DivideFutures(props.properties);

        const half = Math.ceil(list.length / 2);

        const firstHalf = list.splice(0, half)
        const secondHalf = list.splice(-half)

        setPropertiesFirstHalf(firstHalf);
        setPropertiesSecondHalf(secondHalf);


    }, [props])


    return (
        <>
            <div className="product-properties">

                <div className="header w-100">
                    <p className="title">Properties</p>
                </div>


                <div className="property-group w-100 d-flex flex-wrap">


                    <div className="properties-left">

                        {propertiesFirstHalf.map((item) => (

                            <div className={`property ${item.title.indexOf('Color') > -1 && `color-property`}`}>

                                <div className="title"><span>{item.title}</span></div>


                                {
                                    item.title.indexOf('Color') > -1 ?

                                        item.value.map((val, index) => (
                                            <div className="item d-flex">

                                                <span>{index + 1}</span>

                                                <span className={Object.entries(val)[1][1]}/>

                                            </div>
                                        ))

                                        :

                                        item.title.indexOf('Job') > -1 || item.title.indexOf('Home') > -1 ?

                                            item.value.map((val, index) => (
                                                <div className="item d-flex">


                                                    {Object.entries.map((obj, index) => (

                                                        index !== 0 &&

                                                        <div>
                                                            <span>{Object.entries(val)[index][0]}</span>

                                                            <span>{Object.entries(val)[index][1]}{item.symbol}</span>
                                                        </div>

                                                    ))}
                                                </div>
                                            ))

                                            :

                                            item.value.map((val, index) => (

                                                Object.entries(val)[1][1] !== 'Other' &&

                                                <div className="item d-flex">

                                                    <span>{index + 1}</span>

                                                    <span>{Object.entries(val)[1][1]}{item.symbol}</span>

                                                </div>

                                            ))

                                }
                            </div>

                        ))}

                    </div>


                    <div className="properties-right">

                        {propertiesSecondHalf.map((item) => (

                            <div className={`property ${item.title.indexOf('Color') > -1 && `color-property`}`}>

                                <div className="title"><span>{item.title}</span></div>


                                {
                                    item.title.indexOf('Color') > -1 ?

                                        item.value.map((val, index) => (
                                            <div className="item d-flex">

                                                <span>{index + 1}</span>

                                                <span className={Object.entries(val)[1][1]}/>

                                            </div>
                                        ))

                                        :

                                        item.title.indexOf('Job') > -1 || item.title.indexOf('Home') > -1 ?

                                            item.value.map((val, index) => (

                                                Object.entries(val).map(([key, value], index) => (

                                                    index !== 0 &&
                                                    <div className="item d-flex">

                                                        <span>{Object.entries(val)[index][0]}</span>

                                                        <span>{Object.entries(val)[index][1]}{item.symbol}</span>

                                                    </div>
                                                ))
                                            ))
                                            :
                                            item.value.map((val, index) => (

                                                Object.entries(val)[1][1] !== 'Other' &&

                                                <div className="item d-flex">

                                                    <span>{index + 1}</span>

                                                    <span>{Object.entries(val)[1][1]}{item.symbol}</span>

                                                </div>

                                            ))

                                }
                            </div>

                        ))}

                    </div>


                </div>

            </div>
        </>
    );
}

export default Properties;
