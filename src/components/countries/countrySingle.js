import React, { Component } from 'react';

class CountrySingle extends Component {



    render() {

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
               (this.state.searchInput.toLowerCase())}) }
       </div>        
        return (
            <div>
                
            </div>
        );
    }
}

export default CountrySingle;