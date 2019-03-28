import React, { Component } from 'react';
import Counter from './Counter';
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
        <div className="cointainer">
          <h1>{festival.festival_name}</h1>
          <h3>{festival.festival_location} • {festival.festival_simpleDate}</h3>
          {!this.state.loading && <div>Please hold...</div>}
          {this.state.loading && <Counter
            date={festival.festival_date}
             />}
        </div>
      </div>
    );
  }
}

export default FestivalPage;
