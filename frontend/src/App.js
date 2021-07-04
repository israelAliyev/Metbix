import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React from "react";
import Main from "./components/main/Main";
import Products from "./components/products/Products";
import ProductInfo from "./components/product-info/ProductInfo";
import Evaluate from "./components/evaluate/Evaluate";
import Company from "./components/profile/Company";
import User from "./components/profile/User";


function App() {
  return (
    <div className="App">

      <header>
        <Navbar/>
      </header>

      {/*<Main/>*/}
      {/*<Products/>*/}
      {/*  <Overview/>*/}
      {/*  <Evaluate/>*/}
      {/*<Company/>*/}

      <User/>
        <footer>
        <Footer/>
        </footer>

    </div>
  );
}

export default App;
