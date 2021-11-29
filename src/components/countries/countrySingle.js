import React, { Component } from 'react';
import axios from 'axios';




function getCountry(capital) {
    return axios.get(`https://restcountries.com/v2/capital/${capital}`);
  }
  
  function getWeather(capital) {
    return axios.get('http://api.weatherstack.com/current', {
        params:{
           access_key: process.env.REACT_APP_API_WEATHER_KEY,
            query:capital
    
        },
    });
    // process.env.REACT_APP_API_WEATHER_KEY
  }
class CountrySingle extends Component {
state={
    country:[],
    weather:[],
}
componentDidMount(){
    Promise.all([
        getCountry(this.props.params.name), 
        getWeather(this.props.params.name)
    ]).then((res) => {
    this.setState ({country:res[0].data[0], weather:res[1].data});
    console.log("country", this.state.country)
    console.log("weather", this.state.weather)
  });
 
}

    render() {

              
        return (
            <div className="CountrySingle">
                {this.props.params.name}
              
                {/* {this.state.country}
                {this.state.weather} */}
         
                
               
            </div>
        );
    }
}

export default CountrySingle;