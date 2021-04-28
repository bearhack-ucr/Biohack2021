import React, { Component } from "react";

class Countdown extends Component {
  state = {
    days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
    timeUp: false
  }

  componentDidMount() {
    setInterval(() => {
        let eventDate = +new Date(this.props.date);
        let difference = eventDate - +new Date();
      if (difference < 1) {
        this.setState({ timeUp: true });
      } 
      else {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / (1000)) % 60);
        this.setState({
          hours: hours > 9 ? hours : `0${hours}`,
          minutes: minutes > 9 ? minutes : `0${minutes}`,
          seconds: seconds > 9 ? seconds : `0${seconds}`,
          days
        });
      }
    }, 1000)
  }

  render() {
    const {days, hours, minutes, seconds, timeUp} = this.state;
    const dayString = days != 1 ? 'days' : 'day';
    const hourString = hours != 1 ? 'hours' : 'hour';
    const minuteString = minutes != 1 ? 'minutes' : 'minute';
    const secondString = seconds != 1 ? 'seconds' : 'second';
    return (
      timeUp ? <div className={this.props.timeClass}>Hacking has ended!</div> 
        : <div className={this.props.textClass}>
            <div className={this.props.timeClass}>
              <p className={this.props.numberClass}>{days}</p>
              <p className={this.props.unitClass}>{dayString}</p>
            </div>
            <div className={this.props.timeClass}>
              <p className={this.props.numberClass}>:</p>
            </div>
            <div className={this.props.timeClass}>
              <p className={this.props.numberClass}>{hours}</p>
              <p className={this.props.unitClass}>{hourString}</p>
            </div>
            <div className={this.props.timeClass}>
              <p className={this.props.numberClass}>:</p>
            </div>
            <div className={this.props.timeClass}>
              <p className={this.props.numberClass}>{minutes}</p>
              <p className={this.props.unitClass}>{minuteString}</p>
            </div>
            <div className={this.props.timeClass}>
              <p className={this.props.numberClass}>:</p>
            </div>
            <div className={this.props.timeClass}>
              <p className={this.props.numberClass}>{seconds}</p>
              <p className={this.props.unitClass}>{secondString}</p>
            </div>
          </div>
    );
  }
}
export default Countdown;