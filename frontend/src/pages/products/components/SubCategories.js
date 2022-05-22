import React, {useState} from 'react';
import {Dropdown} from "react-bootstrap";
import sub_categories_data from "../../../products-json/sub-categories.json"


function SubCategories(props) {

    const [sub_category_name, set_sub_category_name] = useState(null);

    return (
        <>
            {props.category_id > 327 && props.category_id < 333 ?

            <div className="sub-categories">
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {sub_category_name ? sub_category_name : "SubCategories"}
                        <i className="bi bi-caret-down-fill ms-1"/>
                    </Dropdown.Toggle>


                        <Dropdown.Menu>

                            {sub_category_name &&
                            <Dropdown.Item onClick={() => {
                                props.set_sub_category_id(null);
                                set_sub_category_name(null)

                            }}>
                                Clear
                            </Dropdown.Item>
                            }

                            {sub_categories_data
                                .map((sub) => (
                                    <Dropdown.Item onClick={() => {
                                        props.set_sub_category_id(sub.subCategoryId)
                                        set_sub_category_name(sub.subCategoryName)
                                    }}>{sub.subCategoryName}</Dropdown.Item>
                                ))}
                        </Dropdown.Menu>

                </Dropdown>
            </div>

                : null }
        </>
    );
}

export default SubCategories;