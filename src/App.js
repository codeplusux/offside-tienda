import React from "react";
import Header from "./components/Header";
//import Product from "./components/Product";
//import Endorsement from "./components/Endorsement";
//import Contact from "./components/Contact";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="main" fluid>
      <div className="extra">
        <Header />
        {/* <Product />
        <Endorsement />
        <Contact /> */}
      </div>
    </Container>
  );
}

export default App;
