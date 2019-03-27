import React from 'react'

function Overview(){
  const { festivals } = this.props;

  return(
    <div>
    {festivals.map(festival => (
      <p>{festival.festival_description} </p>
    ))}
    </div>
  )};
export default Overview;
