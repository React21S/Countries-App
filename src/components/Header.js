import React from 'react';
import Nav from './Nav';
import Clock from "./Clock";

const Header = () => {
    return (
        <div>
            <header> 
                <h1>List of Countries </h1>
                <Nav/>
                <Clock/>
            </header>
            
        </div>
    );
};

export default Header;