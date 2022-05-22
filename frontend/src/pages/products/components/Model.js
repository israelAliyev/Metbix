import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";
import data_models from "../../../products-json/product-models.json"

function Model(props) {

    const [model_name, set_model_name] = useState(null);


    return (
        <>
            {props.brand_id && (

                <div className="model">
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {model_name ? model_name : "Model"}
                        <i className="bi bi-caret-down-fill ms-1"/>
                    </Dropdown.Toggle>

                        <Dropdown.Menu>

                            {model_name &&
                            <Dropdown.Item onClick={() => {
                                props.set_model(null);
                                set_model_name(null)

                            }}>
                                Clear
                            </Dropdown.Item>
                            }

                            {data_models
                                .filter((model) => model.brandId === parseInt(props.brand_id))
                                .map((model) => (
                                    <Dropdown.Item onClick={() => {
                                        props.set_model(model.modelId)
                                        set_model_name(model.modelName)
                                    }}>{model.modelName}</Dropdown.Item>
                                ))}
                        </Dropdown.Menu>

                </Dropdown>
            </div>
            )}
        </>
    );
}

export default Model;
