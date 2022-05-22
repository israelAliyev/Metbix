import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";

import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import Main from "./pages/main/Main";
import Products from "./pages/products/Products";
import ProductInfo from "./pages/product-info/ProductInfo";
import Evaluate from "./pages/evaluate/Evaluate";
import Company from "./pages/profile/company/Company";
import User from "./pages/profile/user/User";
import Register from "./pages/account/Register/Register";
import Login from "./pages/account/Login/Login";
import SellProduct from "./pages/sell-product/SellProduct";
import ProfileSettings from "./pages/profile-settings/ProfileSettings";
import Help from "./pages/help/Help";
import AboutUs from "./pages/about-us/AboutUs";
import Error404 from "./pages/error-404/Error404";
import Finance from "./pages/finance/Finance";
import Chat from "./pages/chat/Chat";
import Profiles from "./pages/profiles/Profiles";
import ConfirmToken from "./pages/confirm-token/ConfirmToken";
import PrivateRoute from "./services/public-private-route/PrivateRoute";
import PublicRoute from "./services/public-private-route/PublicRoute";
import ProfileProducts from "./pages/profile-products/ProfileProducts";
import Basket from "./pages/basket/Basket";

const App = () => {


    return (
        <div className="App">

            <Router>
                <header>
                    <Navbar/>
                </header>


                <Switch>

                    <PublicRoute exact path="/register" component={Register} />
                    <PublicRoute exact path="/login" component={Login} />
                    <Route exact path="/confirm-account" component={ConfirmToken} />

                    <PrivateRoute exact path="/sell-product" component={SellProduct} />
                    <PrivateRoute exact path="/evaluate" component={Evaluate}  />
                    <Route exact path="/product-info" component={ProductInfo} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/" component={Main} />


                    <Route exact path="/company" component={Company} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/profiles" component={Profiles} />
                    <Route exact path="/profile-settings" component={ProfileSettings} />

                    <Route exact path="/profile-products" component={ProfileProducts} />
                    <Route exact path="/basket" component={Basket} />

                    <Route exact path="/help" component={Help} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/finance" component={Finance} />
                    <PrivateRoute exact path="/chat" component={Chat} />

                    <Route component={Error404} />

                </Switch>


                <footer>
                    <Footer/>
                </footer>
            </Router>


        </div>
    );
}

export default App;
