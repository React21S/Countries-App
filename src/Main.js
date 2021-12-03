import React from "react";
import {Routes, Route, useParams} from "react-router-dom";
import Home from "./components/Home";
import CountriesList from "./components/countries/CountriesList";
import CountrySingle from "./components/countries/CountrySingle";
import About from "./components/About";
import App_F from "./form/App_F"


const RouterWrapper =(props)=>{
    const params = useParams();
    return <CountrySingle params ={params}{...props}/>
}

const Main = () => {
    return (
       <Routes>
<<<<<<< HEAD:src/components/Main.js
            <Route path = "/" element={<Home/>}/>
=======
            <Route path="/" element={<Home/>}/>
>>>>>>> main:src/Main.js
            <Route  path = "/about"  element={<About/>}/>
            <Route  path = "/countries"  element={<CountriesList/>}/>
            <Route path = "/countries/:name" element ={<RouterWrapper/>}/>
            <Route  path = "/form"  element={<App_F/>}/>
            
       </Routes>
    );
};

export default Main;