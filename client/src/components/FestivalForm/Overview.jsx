import React from 'react'

function Overview(props){
  const { festival } = props;

  return(
    <div>
      <h2>Overview</h2>
      <div className="festival-description">
        <p>{festival.festival_description}</p>
      </div>
    </div>
  )};
export default Overview;
