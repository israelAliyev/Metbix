import React, {useState, useEffect} from 'react';
import '../../css/products.css'
import SideBar from "./components/Side-Bar";
import ProductCard from "../../components/product-item/ProductCard";
import TopBar from './components/TopBar';
import useQuery from '../../services/url-query-parameter/url-query-parameter';
import NoItem from './components/NoItem';
import {useDispatch, useSelector} from "react-redux";
import {getProductsByCategory, getProductsBySearchKeyword} from "../../services";
import {convertCurrency} from "../../services";
import axios from "axios";

const Products = () => {


    const [rating, set_rating] = useState(null);
    const [brand, set_brand] = useState(null);
    const [model, set_model] = useState(null);
    const [sort_by, set_sort_by] = useState(null);

    const [sub_category_id, set_sub_category_id] = useState(null);
    const [sub_category_type_id, set_sub_category_type_id] = useState(null);

    const [show_filter, set_show_filter] = useState(false);


    const query = useQuery();

    //redux
    const dispatch = useDispatch();

    const price = useSelector(state => state.price)

    const get_products_by_category_or_search_keyword = useSelector(state => state.get_products_by_category)
    const get_filter_products = useSelector(state => state.filter_products)

    let department_id = query.get('department-id');
    let category_id = query.get('category-id');
    let search_text = query.get('search');

    if (!department_id && !category_id && !search_text) window.location.href = "/";

    useEffect(() => {

        if (department_id) dispatch(getProductsByCategory(department_id, 'department'));
        if (category_id) dispatch(getProductsByCategory(category_id, 'category'));
        if (search_text) dispatch(getProductsBySearchKeyword(search_text));

    }, [category_id, department_id, search_text])


    useEffect(() => {
        dispatch(convertCurrency());
    } , [])

    return (
        <>
            <section className="products-and-options">

                <TopBar result_length={get_products_by_category_or_search_keyword.response} show_filter={show_filter} set_show_filter={set_show_filter} sub_category_id={sub_category_id}
                        set_sub_category_type_id={set_sub_category_type_id}
                        set_sub_category_id={set_sub_category_id} sort_by={sort_by} brand={brand}
                        set_sort_by={set_sort_by} set_model={set_model} set_brand={set_brand} set_rating={set_rating}
                        department_id={department_id} category_id={category_id}/>

                {/*products-json*/}
                <div className="wrapper-products-and-options d-flex align-items-start">

                    <SideBar show_filter={show_filter} category_id={parseInt(category_id)}
                             sub_category_type_id={sub_category_type_id}
                             sub_category_id={sub_category_id}
                             products={get_products_by_category_or_search_keyword.response} sort_by={sort_by}
                             model={model}
                             brand={brand} rating={rating}/>

                    <div className="products d-flex flex-wrap">


                        {!get_products_by_category_or_search_keyword.response ?
                            <iframe style={{margin: '0 auto'}} width={400} height={400}
                                    src="https://embed.lottiefiles.com/animation/72356"/>
                            : get_products_by_category_or_search_keyword.response.length === 0 && !get_filter_products.response ?
                                <NoItem/>
                                : get_products_by_category_or_search_keyword.response && !get_filter_products.response ?

                                    get_products_by_category_or_search_keyword.response.map((product) => (
                                        <ProductCard product={product}/>
                                    ))

                                    : null
                        }


                        {
                            get_filter_products.response && get_filter_products.response.length === 0 ?

                                <NoItem/>
                                :
                                get_filter_products.response ?
                                    get_filter_products.response.map((product) => (
                                        <ProductCard product={product}/>
                                    )) : null
                        }


                    </div>

                </div>

            </section>
        </>
    );
}

export default Products;