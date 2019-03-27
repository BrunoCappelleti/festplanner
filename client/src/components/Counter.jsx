import React, { Component } from 'react';
import moment from 'moment';
import { getTime } from '../services/api-helper';
import axios from 'axios';



class Counter extends Component {
  constructor() {
    super();
    this.state = {
      countDown: ''
    }
  }



    async componentDidMount(){

      const date = await getTime(date);
      this.setState({
        countDown: date
      })
      console.log(date);

    setTimeout(() =>{
      this.setState(prevState => {
        ...prevState.countDown
      })
    }, 1000);
  }





      render() {
        return (
          <div></div>
        )
      }
}

export default Counter
