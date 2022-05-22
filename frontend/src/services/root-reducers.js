import {combineReducers} from "redux";
import sidebar_reducer from "./sidebar/sidebar-reducers";
import register_reducer from "./user/get-user-reducers";
import countries_reducer from './countries/countries-reducers';
import login_reducer from "./login/login-reducers"
import get_account_firestore_reducer from './firebase/firestore/get-account/get-account-reducers'
import confirm_token_reducer from './confirm-token/confirm-token-reducers'
import sell_product_reducer from './products/sell-product/sell-product-reducer';
import add_review_reducer from './products/addReview/add-review-reducer'
import product_info_reducer from './products/product-info/product-info-reducer';
import currency_converter_reducer from './currency-converter/convert-reducers'
import exist_product_in_basket_reducer from './products/exist-in-basket-by-account-email/exist-in-basket-by-account-email-reducer'
import which_account_exist_by_email_reducer from './which-account-exist-by-email/which-account-exist-by-email-reducers'
import add_product_basket_reducer from './products/product-basket/add-product-basket/add-product-basket-reducer'
import remove_product_basket_reducer from './products/product-basket/remove-product-basket/remove-product-basket-reducer'
import get_products_by_category_reducer from './products/get-products-by-category/get-products-by-category-reducers'
import filter_products_reducer from './products/filter-products/filter-products-reducers'
import get_profile_by_email_reducer from './get-profile-by-email/get-profile-by-email-reducers'
import refresh_token_reducer from './refresh-token/refresh-token-reducers'
import top_liked_products_reducer from './products/top-liked-products/top-liked-products-reducer'
import top_requested_products_reducer from './products/top-requested-products/top-requested-products-reducer'
import get_user_by_email_reducer from './user/get-user-reducers'
import get_company_by_email_reducer from './company/get-company-reducers'
import get_products_basket_reducer from './products/product-basket/get-basket-products/get-product-basket-reducer'
import get_profile_products_in_stock_reducer from './products/profile-products-in-stock/get-stock-products-reducer'
import get_profiles_by_user_name_reducer from './get-profiles-by-user-name/get-profiles-by-user-name-reducers'
import get_profiles_by_company_name_reducer from './get-profiles-by-company-name/get-profiles-by-company-name-reducers'


const root_reducer = combineReducers({
    get_account_firestore: get_account_firestore_reducer,
    show_sidebar: sidebar_reducer,
    register: register_reducer,
    countries_response: countries_reducer,
    login:login_reducer,
    confirm_token:confirm_token_reducer,
    sell_product:sell_product_reducer,
    add_review:add_review_reducer,
    product_info:product_info_reducer,
    price:currency_converter_reducer,
    product_in_basket:exist_product_in_basket_reducer,
    which_account_exist_by_email:which_account_exist_by_email_reducer,
    add_product_basket:add_product_basket_reducer,
    remove_product_basket:remove_product_basket_reducer,
    get_products_by_category:get_products_by_category_reducer,
    filter_products:filter_products_reducer,
    get_profile_by_email:get_profile_by_email_reducer,
    refresh_token : refresh_token_reducer,
    top_liked_products:top_liked_products_reducer,
    top_requested_products:top_requested_products_reducer,
    get_user_by_email:get_user_by_email_reducer,
    get_company_by_email:get_company_by_email_reducer,
    get_products_basket:get_products_basket_reducer,
    get_profile_products_in_stock:get_profile_products_in_stock_reducer,
    get_profiles_by_company_name : get_profiles_by_company_name_reducer,
    get_profiles_by_user_name : get_profiles_by_user_name_reducer

});

export default root_reducer;