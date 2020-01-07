import React, { Component } from 'react';
import "./Clock.css";


//state - is what is going on with it at any given time. It's kust information that is kept in key-value pairs. It could be name, time colour. this.state
//props- if also an object, but its coming from a parent. accessed by this.props 


//we have access to state when we use classes. All data within a component is going to be accessed via state. 
class Clock extends Component {
    state = { seconds: null, minutes: null, hours: null };
//by making seconds: null, we are error testing and making sure we having our program running. 
    componentDidMount() {
//we use componentDidmount to make API calls and to set our initial real values of state.
      console.log(this.props.date.getSeconds());
      this.setState({
//we never want to set state directly. this.setState, lets react know you are going to change state, although if this fails we won't get an error. 
        seconds: this.props.date.getSeconds(),
        minutes: this.props.date.getMinutes(),
        hours: this.props.date.getHours(),
      });
    }
    componentDidUpdate() {
//compondentDidUpdate runs everytime a component gets updated. 
      setInterval(
        () =>
          this.setState({
            seconds: new Date().getSeconds(),
            minutes: new Date().getMinutes(),
            hours: new Date().getHours(),
          }),
        1000,
//this function only gets run every one second. All the function is are three objects within the function. 
      );
    }
    render() {
      return (
        <div className="container">
          <h3 className="label">{this.props.timezone}</h3>
          <div
            className="clock-face"
            style={{ backgroundImage: `url(/${this.props.icon})` }}
          >
            <div className="clock">
              <div className="hours-container">
                <div
                  className="hours"
                  style={{
                    transform: `rotateZ(${this.state.hours * 30 +
                      this.minutes / 2}deg)`,
                  }}
                />
              </div>
              <div className="minutes-container">
                <div
                  className="minutes"
                  style={{ transform: `rotateZ(${this.state.minutes * 6}deg)` }}
                />
              </div>
              <div className="seconds-container">
                <div
                  className="seconds"
                  style={{ transform: `rotateZ(${this.state.seconds * 6}deg)` }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Clock;
  
  
  
  
  
  
  
  
  
  
  




//import React from "react";
//import "./Clock.css";

/*

const Clock = (props) => {
    const seconds = props.date.getSeconds();
    const minutes = props.date.getMinutes();
    const hours = props.date.getHours();
    
    return (
        <div className="container">
            <h3 className="label">{props.timezone}</h3>
            <div className="clock-face" style={{ backgroundImage: `url(/${props.icon})` }}>
                <div className="clock">
                    <div className="hours-container">
                        <div className="hours" style={{ transform: `rotateZ(${(hours * 30) + (minutes / 2)}deg)`}}></div>
                    </div>
                    <div className="minutes-container">
                        <div className="minutes" style={{ transform: `rotateZ(${(minutes * 6)}deg)`}}></div>
                    </div>
                    <div className="seconds-container">
                        <div className="seconds" style={{ transform: `rotateZ(${(seconds * 6)}deg)`}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

*/

//props