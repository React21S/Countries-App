import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import CountriesList from "./countries/CountriesList";

const Main = () => {
    return (
       <Routes>
            <Route  path = "/"  element={<Home/>}/>
            <Route  path = "/countries"  element={<CountriesList/>}/>
       </Routes>
    );
};

export default Main;