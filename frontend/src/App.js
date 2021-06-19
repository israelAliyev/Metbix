import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React from "react";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">

      <header>
        <Navbar/>
      </header>

   <Main/>

        <footer>
        <Footer/>
        </footer>

    </div>
  );
}

export default App;
