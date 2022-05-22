import React, {useEffect, useState} from "react";
import DefaultOptions from "./DefaultOptions";
import Options from "./Options";
import FilterOptions from "../../../services/filter-options/filter-options";
import {useDispatch} from "react-redux";
import {filterProducts} from "../../../services";

function SideBar(props) {

    const [min_price, set_min_price] = useState(null);
    const [max_price, set_max_price] = useState(null);
    const [assign_price, set_assign_price] = useState(false);

    const [condition, set_condition] = useState(null);
    const [domestic_shipping, set_domestic_shipping] = useState(null);
    const [international_shipping, set_international_shipping] = useState(null);
    const [warranty, set_warranty] = useState(null);


    const dispatch = useDispatch();
    const [options, set_options] = useState(null);


    const getProductByFilter = () => {

        const properties = {

            options,
            minPrice: parseInt(min_price),
            maxPrice: parseInt(max_price),
            condition: condition === 'both' ? null : condition,
            warranty: warranty === 'both' ? null : warranty,
            domestic: domestic_shipping === 'both' ? null : domestic_shipping,
            international: international_shipping === 'both' ? null : international_shipping,
            rating: props.rating,
            brandId: props.brand,
            modelId: props.model,
            sortBy: props.sort_by,
            products: props.products
        };

        dispatch(filterProducts(properties));

    };

    useEffect(() => {

        getProductByFilter();

    }, [condition, warranty, international_shipping, domestic_shipping, assign_price, props.rating, props.brand, props.model, props.sort_by , options])


    return (
        <>
            <div className={props.show_filter && "side-bar-container"}>

            <div className={props.show_filter ? "side-bar side-bar-active" :"side-bar"}>
                <div className="price mb-4">
                    <p className="title"> Price </p>

                    <div className="price-set d-flex">
                        <div className="d-flex">

                            <input
                                value={min_price}
                                onChange={(e) => {
                                    set_min_price(e.target.value.replace(/[^0-9]/g, ""));
                                }}
                                type="text"
                                placeholder="min"
                            />{" "}
                            <span>-</span>{" "}
                            <input
                                onChange={(e) => {
                                    set_max_price(e.target.value.replace(/[^0-9]/g, ""));
                                }}
                                value={max_price}
                                type="text"
                                placeholder="max"
                            />
                        </div>
                        <i onClick={() => {
                            set_assign_price(!assign_price)
                        }} className="bi bi-search"/>
                    </div>
                </div>

                <hr/>

                <DefaultOptions set_condition={set_condition} set_domestic_shipping={set_domestic_shipping}
                                set_international_shipping={set_international_shipping} set_warranty={set_warranty}/>

                {/*<hr />*/}

                <Options getProductByFilter={getProductByFilter} category_id={props.category_id} sub_category_type_id={props.sub_category_type_id}
                         sub_category_id={props.sub_category_id} products={props.products} set_options={set_options}/>
            </div>
            </div>
        </>
    );
}

export default SideBar;
