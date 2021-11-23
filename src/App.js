import React from 'react';
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer"
import number from "easy-number-formatter"


import { Component } from 'react';

class App extends Component {

  state ={
    data:[],
    searchInput:"",
    isLoading: true,
 };

  componentDidMount(){
    axios.get('https://restcountries.com/v2/all?fields=name,capital,currencies,population,flags,region,languages,borders').then((res) => {this.setState({data: res.data, isLoading:false})
    console.log(this.state.data);
  });
  };
  
  searchHandler=(event)=>{
    this.setState({searchInput:event.target.value})
    
    console.log(this.state.searchInput);
  };
    

  render() {
   if(this.state.isLoading){
     return <div className="lds-dual-ring"></div>
   }
 
  if (!this.state.isLoading){
    return (
    <div>
      <Header/>
       <div className="countries">
         <div className="search">
         <label><input type="text" name="search" onChange={this.searchHandler} placeholder="Insert the name of the country here"/></label> 
         </div>
      { // Filter start here for each country 
        this.state.data.filter(
          country =>
          {return country.name.toLowerCase().includes
            (this.state.searchInput.toLowerCase())}) 
            // end
          .map
        (country=>
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
        )
      }
      </div> 
    
      <Footer/>
  
    </div>
    );
  }
  }
}


export default App;

