import React from 'react';
import './Trips.css';

const Trips = ({destination, country, photo, description, distance}) => { //fonction dite "stupide"
  return (
      <div className="App">
        <section className="trip">
          <figure className="picture">
            <img className="images" src={photo} alt={destination}/>
          </figure>
          <div className="description">
              destination: {destination} <br />
              country: {country} <br />
              distance: {distance} <br /> <br />
              {description}
          </div>
        </section>
      </div>
  )
}


export default Trips;
