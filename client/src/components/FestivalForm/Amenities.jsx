import React from 'react'

function Amenities(){

  return(
    <div className="Amenities">
      <h2 className="amenities-title">Amenities</h2>
      <div className="amenities-content">
        <div className="each-icon-content">
          <img className="icon-amenities" src="https://i.imgur.com/IgOa20X.png" alt="drink-icon"/>
          <p className='x drink-amenitity' alt="drink-icon">Private bars with beer, wine and cocktails</p>
        </div>

        <div className="each-icon-content">
          <img className="icon-amenities" src="https://i.imgur.com/RXMuRbI.png" alt="food-icon"/>
          <p className='x food-amenitity'>Delicious food</p>
        </div>

        <div className="each-icon-content">
          <img className="icon-amenities" src="https://i.imgur.com/YgVNBdT.png" alt="locker-icon" />
          <p className='x lockers-amenitity'>Locker service</p>
        </div>

        <div className="each-icon-content">
          <img className="icon-amenities" src="https://i.imgur.com/r20NEjf.png" alt="wifi-icon" />
          <p className='x wifi-amenitity'>Free Wi-fi</p>
        </div>

        <div className="each-icon-content">
          <img className="icon-amenities" src="https://i.imgur.com/4gLvAgC.png"  alt="restroom-icon"/>
          <p className='x restroom-amenitity'>Premium restroom</p>
        </div>

        <div className="each-icon-content">
          <img className="icon-amenities" src="https://i.imgur.com/o0s4jrj.png" alt="bus-icon" />
          <p className='x bus-amenitity'>Shuttle transportation</p>
        </div>
      </div>
    </div>
  )};
export default Amenities;
