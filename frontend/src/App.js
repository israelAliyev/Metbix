import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React from "react";
import Main from "./components/main/Main";
import Products from "./components/products/Products";


function App() {
  return (
    <div className="App">

      <header>
        <Navbar/>
      </header>

      {/*<Main/>*/}
      <Products/>

        {/*<img className="mt-5" width="1440" src="/images/pro1.png" alt=""/>*/}
        {/*<img className="ms-4 mt-3" width="240" src="/images/pro3.png" alt=""/>*/}
        {/*<img className="" style={{marginLeft:"5rem"}} width="1000" src="/images/pro4.png" alt=""/>*/}

        



        <div className="vbn"/>

        <footer>
        <Footer/>
        </footer>

    </div>
  );
}

export default App;
