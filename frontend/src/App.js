import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React from "react";
import Department from "./components/main/Department/Department";
import Slider from "./components/main/Slider/Slider";
import Brands from "./components/main/Products/Brands";
import TopRequestedProducts from "./components/main/Products/TopRequestedProducts";

function App() {
  return (
    <div className="App">

      <header>
        <Navbar/>
      </header>

        <Slider/>

        <Department/>

        <Brands/>

      <TopRequestedProducts/>

      {/*  <img className="mt-5" width="1440" src="/images/test-ds22.png" alt=""/>*/}
      {/*<img style={{marginLeft:"100px"}} className="mt-4" width="1260" src="/images/test-ds202.png" alt=""/>*/}
      {/*  <img style={{marginLeft:"100px"}}  className="mt-2 " width="720" src="/images/test-ds201.png" alt=""/>*/}

        {/*<img className="mt-5" width="1440" src="/images/test-ds19.png" alt=""/>*/}
        {/*<img className="mt-3" width="1440" src="/images/test-ds12.png" alt=""/>*/}
        {/*<img className="mt-5" width="1440" src="/images/test-ds25.png" alt=""/>*/}
        {/*<img className="" width="1440" src="/images/test-ds24.png" alt=""/>*/}
        {/*<img className="mt-5" width="1440" src="/images/test-ds27.png" alt=""/>*/}
        <img className="mt-5" width="1440" src="/images/test-ds14.png" alt=""/>
        <img className="mt-5" width="1440" src="/images/test-ds14.png" alt=""/>

        <img className="mt-1" width="1440" src="/images/test-ds13.png" alt=""/>

{/*<div className="vbn"/>*/}

        <footer>
        <Footer/>
        </footer>

    </div>
  );
}

export default App;
