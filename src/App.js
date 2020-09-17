import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Endorsement from "./components/Endorsement";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="main">
      <Header />
      <div id="content">
        <div id="first">
          <Product />
        </div>
        <div id="second">
          <Endorsement />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
