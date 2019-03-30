import React from 'react'

function Overview(props){
  const { festival } = props;

  return(
    <div>
      <h2>Overview</h2>
      <div className="festival-description">
        <p>{festival.festival_description}</p>
        <a href="https://www.lollapalooza.com/">More informations</a>
      </div>
    </div>
  )};
export default Overview;
