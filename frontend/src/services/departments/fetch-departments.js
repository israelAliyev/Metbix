import React from 'react';
import data_categories from "../../products-json/categories.json"
import data_sub_categories from "../../products-json/sub-categories.json"
import data_sub_categories_type from "../../products-json/sub-categories-types.json"
import data_brands from "../../products-json/product-brands.json"
import data_models from "../../products-json/product-models.json"

function FetchDepartments(type, id) {

    switch (type) {

        case "category":
            return data_categories.filter(category => category.department.departmentId === parseInt(id));

        case "sub-category":
            return data_sub_categories;

        case "sub-category-type":
            return data_sub_categories_type.filter(sub_category_type => sub_category_type.subCategoryId === parseInt(id));

        case "brands":
            return data_brands.filter(brand => brand.categoryId === parseInt(id));

        case "models":
            return data_models.filter(model => model.brandId === parseInt(id));

        default:
            return undefined;
    }

}

export default FetchDepartments;