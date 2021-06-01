import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/footer/Sidebar";
import React from "react";

function App() {
  return (
    <div className="App">

      <header>
        <Navbar/>
      </header>


      {/*<Sidebar/>*/}

<div className="vbn"></div>

        <footer>
        <Footer/>
        </footer>

    </div>
  );
}

export default App;
