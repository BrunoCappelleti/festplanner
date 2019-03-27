import React from 'react'

function Overview(){
  const { festivals } = props;

  return(
    <div>
    {festivals.map(festival => (
      <p>{festival.festival_description} </p>
    ))}
  );
}
export default Overview;
