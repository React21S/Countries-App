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
              tenths: parseInt(now.getMilliseconds()/10),
        };
        }
    render() {
        return (
            <div>
              <p>  UTC +2 Time Zone</p>
              {this.state.day} {' - '}
              {this.state.month} {' - '}
              {this.state.year} {'  '}

                ( {this.state.hours} {' : '}
                 {this.state.minutes} {' : '}
                 {this.state.seconds}{' . '}
                 {this.state.tenths})
            </div>
        );
    }
}

export default Clock;