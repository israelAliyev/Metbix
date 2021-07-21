import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React from "react";
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

function App() {
    return (
        <div className="App">

            <header>
                <Navbar/>
            </header>

            {/*<Main/>*/}
            {/*<Evaluate/>*/}
            {/*<Company/>*/}
            {/*<User/>*/}
            {/*<Products/>*/}
            {/*<ProductInfo/>*/}
            {/*<Register/>*/}
            {/*<Login/>*/}
            {/*<SellProduct/>*/}
            {/*<ProfileSettings/>*/}
            {/*<Help/>*/}
            {/*<AboutUs/>*/}
            {/*<Error404/>*/}
            {/*<Finance/>*/}
            {/*<Chat/>*/}

            <footer>
                <Footer/>
            </footer>

        </div>
    );
}

export default App;
