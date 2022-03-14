import React from 'react';
import number from "easy-number-formatter";
import {Link} from "react-router-dom"

const CountriesCard = ({name, capital, languages, population, borders, currencies, flags, region}) => {
    // const{name, capital, languages, population, borders, currencies, flags, region}
    return (
      
       
      
           <div className="country" >
            
            <div className="cardTop">
               <img src={flags.png} alt="country flag"/>
               <h2>{name} </h2>
               <p>{capital}</p>
           </div>
                 <div>
                 <p>
                 {languages.length > 1 ? `Languages` : `Language`}:{" "}
                     Language(s): {languages?.map((lang, i)=>(<span className="lang" key={i}>{(lang.name).join(", ")}</span>))}
                 </p>
                 {/* <p>
                     Population: <span>{number.formatNumber(population)}</span>
                 </p>
                 <p>
                     Currencies: {currencies?.map((cur, i)=>(<span key={i}>{cur.name} - {cur.symbol}</span>))}
                 </p>
                 <p>Region: <span>{region}</span></p>
                 <p>
                     Borders with: {borders?.map((border, i)=>(<span className="border" key={i}>{border}</span>))}
                 </p>

                 <Link to={capital}> Click here to get weather</Link> */}
                 </div>
           </div>
            
    
           
    );
};

export default CountriesCard;