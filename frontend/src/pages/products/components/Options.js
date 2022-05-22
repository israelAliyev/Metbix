import React, {useEffect, useState, useMemo} from "react";
import FilterOptions from "../../../services/filter-options/filter-options";

function Options(props) {

    const [options, set_options] = useState({
        apparelProductsColors :[],
        apparelSizes :[],
        apparelFabricTypes :[],
        automativeProductsColors :[],
        automotiveMaxSpeeds :[],
        automotiveFuels :[],
        automotiveSeats :[],
        automotiveTypes :[],
        automotiveCrashes :[],
        automotiveEngines :[],
        electronicsProductsColors :[],
        electronicsMemories :[],
        electronicsCameras :[],
        electronicsFrontCameras :[],
        electronicsOperatingSystems :[],
        electronicsDisplayTypes :[],
        electronicsCellularTechnologies :[],
        electronicsProcessors :[],
        electronicsRams :[],
        electronicsGraphicsCards :[],
        electronicsComputerTypes :[],
        musicInstruments :[],
        electronicsBatteries :[],
        electronicsScreenSizes :[],
        automotiveDistanceTraveleds :[]
    });


    useEffect(() => {
    }, []);

    const setOption = (field_name, obj) => {

        if (options.hasOwnProperty(field_name)) {
            if (
                options[field_name].filter(
                    (field_obj) => Object.values(field_obj)[0] === Object.values(obj)[0]
                ).length > 0
            ) {
                const filtered_array = options[field_name].filter(

                    (field_obj) => Object.values(field_obj)[0] !== Object.values(obj)[0]
                );

                let new_obj = {...options, [field_name]: filtered_array};

                props.set_options(new_obj);

                set_options(new_obj)

                props.getProductByFilter();

            } else {

                let new_obj = options;

                new_obj[field_name].push(obj)

                props.set_options(new_obj);

                // console.log(new_obj)

                set_options(new_obj)

                props.getProductByFilter();
            }
        } else {

            let new_obj = {...options, [field_name]: [obj]};

            props.set_options(options);

            // console.log(new_obj)

            set_options(new_obj)

            props.getProductByFilter();
        }
    };

    return (
        <>
            <div className="options mt-3">
                {FilterOptions(props.category_id, props.sub_category_id).map(
                    (option) =>
                        option.title === "Color" && (
                            <div className="colors">
                                <p className="title">Colors</p>

                                <div className="colors-range d-flex flex-wrap">
                                    {Object.entries(option)[2][1].map((obj) => (
                                        <input
                                            onClick={() => {
                                                setOption(Object.keys(option)[2], obj);
                                            }}
                                            className={Object.values(obj)[1]}
                                            type="checkbox"
                                        />
                                    ))}
                                </div>
                            </div>

                        )
                )}


                {FilterOptions(props.category_id, props.sub_category_id).map(
                    (option) =>
                        option.title !== "Color" && (
                            <div className="option mt-4">
                                <p className="title">{option.title}</p>

                                <div className="option-range d-flex flex-column justify-content-center align-items-start">
                                    {Object.entries(option)[2][1].map((obj) => (
                                        <label>
                                            <div>
                                                <input
                                                    onClick={() => {
                                                        setOption(Object.keys(option)[2], obj);
                                                    }}
                                                    type="checkbox"
                                                />
                                            </div>
                                            {Object.values(obj)[1]}

                                            {option.symbol}
                                        </label>
                                    ))}
                                </div>

                            </div>
                        )
                )}
            </div>
        </>
    );
}

export default Options;
