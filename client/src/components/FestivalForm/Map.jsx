import React from 'react';
import Iframe from 'react-iframe'

function Map(props){
  const { festival } = props;
  return (
  <div className="Map">
    <h1>Location</h1>
    <Iframe url='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Grant%20Park%2C%20IL+(Lollapalooza)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
          width="450px"
          height="450px"
          display="initial"
          position="relative"
          allowFullScreen/>
    <p className="location-map">Grant Park - Chicago, IL</p>

  </div>
)};

export default Map;
