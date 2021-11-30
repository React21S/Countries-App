import React from 'react';

const About = () => {
    return (
        <div className="about">
            <h3>
            These are some of the lists of the countries where users can check the country's name, capital, population, region, and countries they share a border. Also, when the user clicks on each country's card under the countries menu bar, it leads to a page where the user can view the present weather of that country.
            <a  href="https://en.wikipedia.org/wiki/Lists_of_countries_and_territories" target="_blank"  rel="noreferrer" ><small> Read more </small></a> {" "}
             [From wikipedia]
            </h3>
            <img src="https://source.unsplash.com/yfXhqAW5X0c " alt="World flag"/>
        </div>
    );
};

export default About;