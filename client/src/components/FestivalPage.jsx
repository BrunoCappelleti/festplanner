import React, { Component } from 'react';
import { Link ,Route } from 'react-router-dom';
import ToDoList from './FestivalForm/ToDoList';

class FestivalPage extends Component {
  constructor() {
    super();
    this.state = {
      //need to pass user on to ToDoList
      user: '',
    }
  }

  async componentDidMount(){
    //need to recieve user form app and mount it to the state on load
  }

  render() {
    return (
      <div className="App">
        <div className="cointainer">
          <h1>Hello</h1>
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default FestivalPage;
