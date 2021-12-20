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
            <Route path="/" element={<Home/>}/>
            <Route  path = "/about"  element={<About/>}/>
            <Route  path = "/countries"  element={<CountriesList/>}/>
            <Route  path = "/countries/:name" element ={<RouterWrapper/>}/>
            <Route exact strict path = "/form"  element={<AppF/>}/>
            
       </Routes>
    );
};

export default Main;