import React, { Component } from 'react';
import Clock from "./Clock";
import { stat } from 'fs';

class App extends Component {
    state = { latitude: null, errorMessage: null, value: 1 }
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ latitude: position.coords.latitude });
            },
            error => {
                this.setState({ errorMessage: 'Something went wrong' });
            }
        )

        setInterval(() => {
            this.setState((state, props) => {
                return { value: state.value + 1 };
            })
        }, 1000);
    }

    componentDidUpdate() {
        console.log('updated');
    }

    isItWarm() {
        const { latitude } = this.state
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;

        if (latitude < 0) {
            if (month < 3 || month > 9) {
                return true;
            } else {
                return false;
            }
        } else {
            if (month < 3 || month > 9) {
                return false;
            } else {
                return true;
            }
        }
    }

    getClockIcon() {
        if (this.isItWarm() === true) {
            return 'sun.svg';
        } else {
            return 'snowflake.svg';
        }
    }

    render() {
        const { latitude, errorMessage } = this.state;

        return (
            <div>
                { errorMessage || <Clock 
                    icon={latitude !== null ? this.getClockIcon() : null}
                    timezone={"Sydney/Australia"} 
                    date={new Date()}
                /> }
                { latitude }
            </div>
        );
    }
}

export default App;
