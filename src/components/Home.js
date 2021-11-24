import React from 'react';
// import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="home">
            <h1>List of countries</h1>
            <h3>
            This is a list of lists of countries and territories by various criteria. A country or territory is a geographical area, either in the sense of nation (a cultural entity) or state (a political entity)
            <a  href="https://en.wikipedia.org/wiki/Lists_of_countries_and_territories" target="_blank"  rel="noreferrer" ><small> Read more</small></a>

            {/* <Link  to="https://en.wikipedia.org/wiki/Lists_of_countries_and_territories" target="_blank" ><small> Read more</small></Link> */}
        

            </h3>
            <img src="https://source.unsplash.com/yfXhqAW5X0c " alt="World flag"/>
        </div>
    );
};

export default Home;