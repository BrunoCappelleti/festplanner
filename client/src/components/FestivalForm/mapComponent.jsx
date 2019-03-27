import React from 'react';

function Map(){
  const { festivals } = this.props;

  return(
    //needs testing now that the backend has they
    //wireframe src
  <div>
  {festivals.map(festival => (
    <iframe src={festival.festival_map}
    frameborder={0} scrolling={"no"} marginHeight={0}
    marginWidth={0}>
    </iframe>
  ))}
  </div>
)};
export default Map;
