import React from 'react'

function Overview(props){
  const { festival } = props;

  return(
    <div className="Overview">
      <h2 className="overview-title">Overview</h2>
      <div className="festival-description">
        <p className="festival-paragraph-descr">{festival.festival_description}</p>
        <a className="more-informations" href="https://www.lollapalooza.com/">More information</a>
      </div>
      <a className="buy-tickets" href="https://www.lollapalooza.com/tickets"> Buy Tickets </a>

    </div>
  )};
export default Overview;
