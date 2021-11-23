import React from 'react';
import number from "easy-number-formatter"

const countriesCard = (country) => {

    return (
        <div>
            <div className="country" key = {country.name} >
               <div className="top">
                  <img src={country.flags.png} alt="country flag"/>
                  <h2>{country.name} </h2>
                  <p>{country.capital}</p>
              </div>
                    <p>
                        Language(s): {country.languages.map((lang, i)=>(<span className="lang" key={i}>{(lang.name)}</span>))}
                    </p>
                    <p>
                        Population: <span>{number.formatNumber(country.population)}</span>
                    </p>
                    <p>
                        Currencies: {country.currencies.map((cur, i)=>(<span key={i}>{cur.name} - {cur.symbol}</span>))}
                    </p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>
                        Borders with: {country.borders.map((border, i)=>(<span className="border" key={i}>{border}</span>))}
                    </p>
              </div>
        </div>
    );
};

export default countriesCard;