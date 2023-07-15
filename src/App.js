import React from "react";
import NavBar from "./component/Navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home";
import "./index.css";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
