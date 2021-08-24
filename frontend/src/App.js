import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Products from "./components/products/Products";
import ProductInfo from "./components/product-info/ProductInfo";
import Evaluate from "./components/evaluate/Evaluate";
import Company from "./components/profile/Company";
import User from "./components/profile/User";
import Register from "./components/account/Register/Register";
import Login from "./components/account/Login/Login";
import SellProduct from "./components/sell-product/SellProduct";
import ProfileSettings from "./components/profile-settings/ProfileSettings";
import Help from "./components/help/Help";
import AboutUs from "./components/about-us/AboutUs";
import Error404 from "./components/error-404/Error404";
import Finance from "./components/finance/Finance";
import Chat from "./components/chat/Chat";
import Profiles from "./components/profiles/Profiles";

function App() {
    return (
        <div className="App">

            <Router>
                <header>
                    <Navbar/>
                </header>


                <Switch>

                    <Route exact path="/" component={Main} />
                    <Route exact path="/evaluate" component={Evaluate} />
                    <Route exact path="/product-info" component={ProductInfo} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/sell-product" component={SellProduct} />
                    <Route exact path="/company" component={Company} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile-settings" component={ProfileSettings} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/finance" component={Finance} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/search-profiles" component={Profiles} />
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
