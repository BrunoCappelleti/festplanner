import React, { Component } from 'react';
import { Link ,Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import FestivalPage from './components/FestivalPage';

class App extends Component {
  state = {
    focuseTab: {
      all:[]
    }
  }



  render() {
    return (
      <div className="App">
      <FestivalPage />
      </div>
    );
  }
}

export default App;
