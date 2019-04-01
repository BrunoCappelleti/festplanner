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
        <div className="Counter">
          <div className="counter-days">
            <h1>{this.state.days} </h1>
            <h4 className='days'>days</h4>
          </div>
           <div className="counter-hours">
            <h1>{this.state.hours}</h1>
            <h4 className='hours'>hours</h4>
          </div>
          <div className="counter-min">
            <h1>{this.state.minutes}</h1>
            <h4 className='min'>minutes</h4>
          </div>
          <div className="counter-sec">
            <h1>{this.state.seconds}</h1>
            <h4 className='sec'>seconds</h4>
          </div>
        </div>
        )
      }
}

export default Counter
