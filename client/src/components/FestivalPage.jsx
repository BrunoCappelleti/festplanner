import React, { Component } from 'react';
import Counter from './FestivalForm/Counter';
import ToDoList from './FestivalForm/ToDoList'
import Overview from './FestivalForm/Overview';
import Amenities from './FestivalForm/Amenities';
import Map from './FestivalForm/Map';
import Nav from './Nav';
import { getFestival } from '../services/api-helper';

class FestivalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      festival: '',
      loading: false
    }
  }

  async componentDidMount(){
    try {
      console.log(this.props.user);
      const resp = await getFestival()
      if(resp) {
        await this.setState({
          user: this.props.user,
          festival: resp,
          loading: true,
        });
      } else {
        console.log(`That festival doesn't exist`);
      }
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    const { festival } = this.state;
    return (
      <div>
      <Nav handleLogout={this.props.handleLogout}/>
      <div className="App FestivalPage">
        <div className="hero">
          <div className="header-festival-page">
            <div className="hero-img-div">
            </div>

            <img className="hero-img" src={festival.festival_img} alt=''/>
            <div className="text-hero-festival-page">
              <h1 className="festival-name">{festival.festival_name}</h1>
              <h3 className="festival-location">{festival.festival_location} • {festival.festival_simpleDate}</h3>
              {!this.state.loading && <div>Please hold...</div>}
              {this.state.loading &&
                <Counter
                  date={festival.festival_date}
                 />}
            </div>
          </div>
        </div>
        <div className="main">
        <div className="Overview-Map">

        <Overview festival={festival}/>
          {!this.state.loading && <div>Please hold...</div>}
          {this.state.loading && <Map
          festival={festival}/>}
        </div>
        <Amenities />

        {this.state.loading &&
          <ToDoList
            user={this.state.user} />}
        </div>

      </div>
      </div>
    );
  }
}

export default FestivalPage;
