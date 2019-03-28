import React, { Component } from 'react';
import Counter from './Counter';
import Overview from './FestivalForm/Overview';
import Amenities from './FestivalForm/Amenities';
import Map from './FestivalForm/Map';
import { getFestival } from '../services/api-helper';

class FestivalPage extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      festival: '',
      loading: false
    }
  }

  async componentDidMount(){
    try {
      const resp = await getFestival()
      console.log(resp);
      this.setState({
        festival: resp,
        loading: true,
      });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    const { festival } = this.state;
    return (
      <div className="App">
        <div className="hero">
          <img src={festival.festival_img} alt=''/>
          <h1>{festival.festival_name}</h1>
          <h3>{festival.festival_location} • {festival.festival_simpleDate}</h3>
          {!this.state.loading && <div>Please hold...</div>}
          {this.state.loading && <Counter
            date={festival.festival_date}
             />}
        </div>
        <div className="main">
        <Overview festival={festival}/>
        <Amenities />
        {!this.state.loading && <div>Please hold...</div>}
        {this.state.loading && <Map
        festival={festival}/>}
        </div>

      </div>
    );
  }
}

export default FestivalPage;
