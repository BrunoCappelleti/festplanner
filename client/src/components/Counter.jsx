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
      console.log(this.props.date)
      const { date } =this.props
      // const date = await getTime(date);
      this.setState({
        countDown: date
      })
      console.log(date);
      let countDownDate = new Date(this.props.date).getTime();
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
        const {countDown} =this.state
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
