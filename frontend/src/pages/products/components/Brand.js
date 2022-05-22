import React, {useState} from "react";
import { Dropdown } from "react-bootstrap";
import data_brands from "../../../products-json/product-brands.json";

function Brand(props) {

  const [brand_name, set_brand_name] = useState(null);


  return (
    <>
      {props.category_id && (
      <div className="brand">
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {brand_name ? brand_name : "Brand"}
            <i className="bi bi-caret-down-fill ms-1"/>
          </Dropdown.Toggle>


            <Dropdown.Menu>


              {brand_name &&
              <Dropdown.Item onClick={() => {
                props.set_brand(null);
                set_brand_name(null);
              }}>
                Clear
              </Dropdown.Item>
              }

              {data_brands
                .filter((brand) => brand.categoryId === parseInt(props.category_id))
                .map((brand) => (
                  <Dropdown.Item
                    onClick={() => {
                      props.set_brand(brand.brandId);
                      set_brand_name(brand.brandName)
                    }}
                  >
                    {brand.brandName}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>

        </Dropdown>
      </div>
      )}
    </>
  );
}

export default Brand;
