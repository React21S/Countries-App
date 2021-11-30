
import axios from "axios";
import React, { Component } from 'react';
import CountriesCard from "./CountriesCard";

class CountriesList extends Component {
   
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
       
           <div className="countries">
             <div className="search">
             <label><input type="text" name="search" onChange={this.searchHandler} placeholder="Insert the name of the country here"/></label>
    
        {/* for searching  */}
          <select  onChange={this.searchHandler}>
            <option>  --- select country ---</option>
            {this.state.data.map(info=>( <option key={info.name} value ={info.name}>{info.name}</option>))}
          </select>
        {/* for searching  */}
             </div>
          
          { 
            // Filter start here for each country 
                this.state.data.filter(
                    country =>
                    {return country.name.toLowerCase().includes
                    (this.state.searchInput.toLowerCase())}) 
            // end
            .map
            (country=> (<CountriesCard {...country} key={country.name}/>)
            )
          }
          </div> 
        </div>
        );
      }
      }
}


export default CountriesList;