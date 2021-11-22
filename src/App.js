import React from 'react';
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer"


import { Component } from 'react';

class App extends Component {

  state ={
    data:[],
  };

  componentDidMount(){
    axios.get('https://restcountries.com/v3.1/all').then((res) => {this.setState({data: res.data})
    console.log(this.state.data);
  });
  };

 
      
 
  

  
  render() {

    
    return (
    <div>
      <Header/>

       <div className="countries">
      {
        this.state.data.map
        (country=>
          <div className="country" key = {country.name.common} >
            <img src={country.flags.png} alt="country flag"/>
            <h2>{country.name.common} </h2>
            <p>{country.capital}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Borders with: <span></span></p>
          </div>
        )
      }
      </div> 
      <Footer/>
  
    </div>
    );
  }
}

export default App;

