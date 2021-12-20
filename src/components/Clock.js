import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = this.getTime(); }


    componentDidMount(){
        setInterval(()=>{
          this.setState(this.getTime());
    },10);
    }
    
    getTime(){
            let now = new Date(); 
            return {
                day: now.getDate(),
                month: now.getUTCMonth() + 1,
            
                year: now.getFullYear(),
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds(),
            };
        }
    render() {
        return (
            <div>
                <p>  UTC +2 Time Zone</p>
                <p>
                
                    {this.state.day} {' - '}
                    {this.state.month} {' - '}
                    {this.state.year} {'  '}
                </p>
                <p>
                ( {this.state.hours} {' : '}
                    {this.state.minutes} {' : '}
                    {this.state.seconds}{' . '}
                    )
                </p>   
            </div>
        );
    }
}

export default Clock;