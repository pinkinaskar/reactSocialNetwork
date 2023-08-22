import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import Signin from "./components/main/Signin";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./shared/PrivateRoutes";
// import Menu from "./components/Menu"


const Approutes = () => {
  return (
    <BrowserRouter>
    {/* <Menu/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
   
      <Route exact path='/home' element={<PrivateRoute/>}>
          <Route exact path='/home' element={<Dashboard/>}/>
          
      </Route>

    </Routes>
  </BrowserRouter>
  );
};

export default Approutes;


