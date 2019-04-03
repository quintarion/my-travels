import React from "react";

const travels = [
  {
    destination :"Venezuela",
    country :"Caracas",
    photo :"https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2015/05/27/rio-le-drole-doiseau-de-caracas.jpg?itok=dPdhK-QZ",
    distance : "7 932,53 km",
    description :"Specie expeditioni subinde tenus Gallus specie prope nullus ut est consularem quod diffusa quorum adstantem.",
   
  },
  {
    destination:"Argentine",
    country:"Buenos Aires",
    photo:"https://cdn.pixabay.com/photo/2015/06/08/15/22/horse-802043__340.jpg",
    distance:"10 936,36 km",
    description:"Praedam rapacium momento nobis volatu vastabant non tamen rapiunt dispexerint temporis impetraverint non nec praedam impetraverint dispexerint similes similes aut parvi nobis discursantes rapiunt poterat volatu impetraverint rapiunt celsius ultro.",
  },
  {
    destination:"Colombie",
    country:"Bogota",
    photo:"https://cdn.pixabay.com/photo/2014/09/19/19/13/cocoa-452911__340.jpg",
    distance:"8 559,44km",
    description:"Praedam rapacium momento nobis volatu vastabant non tamen rapiunt dispexerint temporis impetraverint non nec praedam impetraverint dispexerint similes similes aut parvi nobis discursantes rapiunt poterat volatu impetraverint rapiunt celsius ultro.",
  },
  {
    destination:"Chili",
    country:"Santiago",
    photo:"https://cdn.pixabay.com/photo/2017/09/11/18/56/puglia-2740055__340.jpg",
    distance:"11 599,57km",
    description:"Praedam rapacium momento nobis volatu vastabant non tamen rapiunt dispexerint temporis impetraverint non nec praedam impetraverint dispexerint similes similes aut parvi nobis discursantes rapiunt poterat volatu impetraverint rapiunt celsius ultro.",
  },
  {
    destination:"Argentine",
    country:"Buenos Aires",
    photo:"https://cdn.pixabay.com/photo/2012/07/06/17/11/caminito-51625__340.jpg",
    distance:"11 103,39 km",
    description:"Praedam rapacium momento nobis volatu vastabant non tamen rapiunt dispexerint temporis impetraverint non nec praedam impetraverint dispexerint similes similes aut parvi nobis discursantes rapiunt poterat volatu impetraverint rapiunt celsius ultro.",
  },
];

const Travels = () => (
  <div className="secondPart">
    {travels.map(travel => (
      <p><strong>{travel.destination}</strong><br />
      <img src={travel.photo} alt=""/><br />
      {travel.country}<br />{travel.distance}<br />{travel.description}</p>
    ))}
  </div>
);

export default Travels;