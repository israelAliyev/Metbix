import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React from "react";
import ShippingInfo from "./components/main/Slider/ShippingInfo";
import Sidebar from "./components/sidebar/Sidebar";

import Slider from "./components/main/Slider/Slider";

function App() {
  return (
    <div className="App">

      <header>
        <Navbar/>
      </header>

        <Slider/>
        {/*<img className="mt-5" width="1440" src="/images/test-ds19.png" alt=""/>*/}
        <img className="mt-5" width="1440" src="/images/test-ds22.png" alt=""/>
        <img className="mt-2" width="1440" src="/images/test-ds20.png" alt=""/>

      {/*<img className="mt-5" width="1440" src="/images/test-ds19.png" alt=""/>*/}
        {/*<img className="mt-3" width="1440" src="/images/test-ds12.png" alt=""/>*/}
        <img className="mt-5" width="1440" src="/images/test-ds25.png" alt=""/>
        <img className="" width="1440" src="/images/test-ds24.png" alt=""/>
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
