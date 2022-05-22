import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Rating from "../components/Rating";
import Brand from "../components/Brand";
import Model from "../components/Model";
import SubCategories from "./SubCategories";
import SubCategoriesTypes from "./SubCategoriesTypes";
import currencies from '../../../products-json/currency/currencies.json';
import axios from "axios";

export default function TopBar(props) {

  const [brand_name, set_brand_name] = useState(false);

  return (

    <div className="top-bar d-flex justify-content-between align-items-center">
      <div className="text">
        <p>
          {props.result_length && props.result_length.length} results
        </p>
      </div>

      <div className="options d-flex flex-wrap align-items-center justify-content-end">
        <div onClick={() => {props.set_show_filter(!props.show_filter)}} className="filter-button d-none ">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <i className="bi bi-funnel-fill me-1"/>
              Filter
            </Dropdown.Toggle>
          </Dropdown>
        </div>

        <Rating set_rating ={props.set_rating} />

        <Brand category_id ={props.category_id} set_brand ={props.set_brand}/>

        <Model brand_id ={props.brand} set_model ={props.set_model}/>

        <SubCategories set_sub_category_id={props.set_sub_category_id} category_id ={props.category_id}/>

        <SubCategoriesTypes set_sub_category_type_id={props.set_sub_category_type_id} sub_category_id={props.sub_category_id}/>

        <div className="sort-by">
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {props.sort_by ? props.sort_by : 'Sort By'}
              <i className="bi bi-caret-down-fill ms-1"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              
              <Dropdown.Item onClick={() => {props.set_sort_by('The newest')}}>The newest { !props.sort_by || props.sort_by === 'The newest' ? <span>✓</span> : null}</Dropdown.Item>
              <Dropdown.Item onClick={() => {props.set_sort_by('Price: Low to High')}}>
                Price: Low to High { props.sort_by === 'Price: Low to High' && <span>✓</span>}
              </Dropdown.Item>
              <Dropdown.Item onClick={ () => {props.set_sort_by('Price: High to Low')}}>
                Price: High to Low { props.sort_by === 'Price: High to Low' && <span>✓</span>}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => {props.set_sort_by('Avg: Customer review')}}>
                Avg: Customer review { props.sort_by === 'Avg: Customer review' && <span>✓</span>}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
