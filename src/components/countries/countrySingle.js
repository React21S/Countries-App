import React, { Component } from 'react';
import axios from 'axios';
import number from "easy-number-formatter";


function getCountry(capital) {
    return axios.get(`https://restcountries.com/v2/capital/${capital}`);
  }
  
  function getWeather(capital) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`);
        
    };
  
  
class CountrySingle extends Component {
state={
    country:{},
    weather:{},
    isLoading: true,
}
componentDidMount(){
    Promise.all([
        getCountry(this.props.params.name), 
        getWeather(this.props.params.name)
    ]).then((res) => {
    this.setState ({country:res[0].data[0], weather:res[1].data, isLoading: false,});
    console.log("country", this.state.country)
    console.log("weather", this.state.weather)
  });
 
}

    render() {
        if(this.state.isLoading){
            return <div className="lds-dual-ring"></div>
          }
        
         if (!this.state.isLoading){

        return (
            <div className="CountrySingle">
                <p> 
                    Weather situation now in {" "}
                    <span className="city">{this.props.params.name}</span>
                   is {" "}{this.state.weather.main.temp} °C 
                </p>
               
                <img    src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`} 
                        alt={this.state.weather.weather[0].description}
                />
                <p> Humity is {this.state.weather.main.humidity}%  and 
                cloud is at rate of {this.state.weather.clouds.all}%</p>
               
              
                <div className="country" key = {this.state.country.name} >
            
                    <div className="cardTop">
                    
                        <img src={this.state.country.flags.png} alt="country flag"/>
                        <h2>{this.state.country.name} </h2>
                        <p>{this.state.country.capital}</p>
                    </div>
                    <p>
                     Language(s): {this.state.country.languages.map((lang, i)=>(<span className="lang" key={i}>{(lang.name)}</span>))}
                    </p>
                    <p>
                        Population: <span>{number.formatNumber(this.state.country.population)}</span>
                    </p>
                    <p>
                        Currencies: {this.state.country.currencies.map((cur, i)=>(<span key={i}>{cur.name} - {cur.symbol}</span>))}
                    </p>
                    <p>Region: <span>{this.state.country.region}</span></p>
                    
                    <p>
                        Borders with: {this.state.country.languages.map((border, i)=>(<span className="border" key={i}>{border.name}</span>))}
                    </p>

                </div>         
            </div>
        );
            }
    }
}

export default CountrySingle;