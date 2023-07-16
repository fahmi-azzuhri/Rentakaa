import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchCar from "./component/SearchCar/SearchCar";
import Login from "./component/Auth/Login/Login";
import Register from "./component/Auth/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchcar" element={<SearchCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
