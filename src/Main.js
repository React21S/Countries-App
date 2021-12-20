import React from "react";
import {Routes, Route, useParams} from "react-router-dom";
import Home from "./components/Home";
import CountriesList from "./components/countries/CountriesList";
import CountrySingle from "./components/countries/CountrySingle";
import About from "./components/About";
import AppF from "./form/App_F"


const RouterWrapper =(props)=>{
    const params = useParams();
    return <CountrySingle params ={params}{...props}/>
}

const Main = () => {
    return (
       <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact  path = "/about"  element={<About/>}/>
            <Route exact  path = "/countries"  element={<CountriesList/>}/>
            <Route exact path = "/countries/:name" element ={<RouterWrapper/>}/>
            <Route exact  path = "/form"  element={<AppF/>}/>
            
       </Routes>
    );
};

export default Main;