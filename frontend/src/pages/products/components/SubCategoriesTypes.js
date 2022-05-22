import React, {useState} from 'react';
import {Dropdown} from "react-bootstrap";
import sub_categories_types_data from "../../../products-json/sub-categories-types.json";

function SubCategoriesTypes(props) {

    const [sub_category_types_name, set_sub_category_types_name] = useState(null);

    return (
        <>
            {props.sub_category_id  &&
            <div className="sub-categories-types">
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {sub_category_types_name ? sub_category_types_name : "SubCategories Types"}
                        <i className="bi bi-caret-down-fill ms-1"/>
                    </Dropdown.Toggle>


                        <Dropdown.Menu>

                            {sub_category_types_name &&
                            <Dropdown.Item onClick={() => {
                                props.set_sub_category_type_id(null);
                                set_sub_category_types_name(null)
                            }}>
                                Clear
                            </Dropdown.Item>
                            }

                            {sub_categories_types_data
                                .filter((subType) => subType.subCategoryId === parseInt(props.sub_category_id))
                                .map((subType) => (
                                    <Dropdown.Item onClick={() => {
                                        set_sub_category_types_name(subType.subCategoryTypeName)
                                        props.set_sub_category_type_id(subType.subCategoryTypeId)
                                    }}>{subType.subCategoryTypeName}</Dropdown.Item>
                                ))}
                        </Dropdown.Menu>
                </Dropdown>
            </div>
            }
        </>
    );
}

export default SubCategoriesTypes;