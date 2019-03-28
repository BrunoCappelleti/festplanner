import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      countDown: '',
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  }

    async componentDidMount(){
      const { date } = this.props
      const countDownDate = new Date(date).getTime();
      setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        this.setState({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }, 1000);
}

      render() {
        return (
        <div>
          <h1>{this.state.days} </h1>
          <h4>days</h4>
          <h1>{this.state.hours}</h1>
          <h4>hours</h4>
          <h1>{this.state.minutes}</h1>
          <h4>minutes</h4>
          <h1>{this.state.seconds}</h1>
          <h4>seconds</h4>
        </div>
        )
      }
}

export default Counter
