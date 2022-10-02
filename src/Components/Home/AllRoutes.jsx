import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Login from "./login";
 
// import Login from "../Pages/Login";
// import Cart from "../Pages/Cart";
// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return (
    <>
      <Routes>
         <Route  path="" element={<Home />}></Route>
         <Route  path="/login" element={<Login />}></Route>
         {/* <Route path="/login" element={<Login />} /> */}
         {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </>
  )
};

export default AllRoutes;