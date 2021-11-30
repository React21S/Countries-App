import React from "react";
import {Routes, Route, useParams} from "react-router-dom";
import Home from "./Home";
import CountriesList from "./countries/CountriesList";
import CountrySingle from "./countries/CountrySingle";
import About from "./About";


const RouterWrapper =(props)=>{
    const params = useParams();
    return <CountrySingle params ={params}{...props}/>
}

const Main = () => {
    return (
       <Routes>
            <Route index element={<Home/>}/>
            <Route  path = "/about"  element={<About/>}/>
            <Route  path = "/countries"  element={<CountriesList/>}/>
            <Route path = "/countries/:name" element ={<RouterWrapper/>}/>
       </Routes>
    );
};

export default Main;