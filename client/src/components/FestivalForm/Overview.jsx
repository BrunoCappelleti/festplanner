import React from 'react'

function Overview(props){
  const { festival } = props;

  return(
    <div>
      <h2>Overview</h2>
      <p>{festival.festival_description}</p>
    </div>
  )};
export default Overview;
