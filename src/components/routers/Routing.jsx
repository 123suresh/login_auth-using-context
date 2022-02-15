import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../auth-context/Auth";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "../pages/PrivateRoute";

function Routing() {
  return (
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Auth>
    </BrowserRouter>
  );
}

export default Routing;
