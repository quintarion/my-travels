import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Trips from './components/Trips'
import Travels from './components/Travels'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Header />
      </header>
      <section>
          <Trips 
          destination="Venezuela"
          country="Caracas"
          photo="https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2015/05/27/rio-le-drole-doiseau-de-caracas.jpg?itok=dPdhK-QZ" 
          distance="7 932,53 km"
          description="Specie expeditioni subinde tenus Gallus specie prope nullus ut est consularem quod diffusa quorum adstantem."
          />
          <Trips 
          destination="Argentine"
          country="Buenos Aires"
          photo="https://cdn.pixabay.com/photo/2015/06/08/15/22/horse-802043__340.jpg" 
          distance="10 936,36 km"
          description="Praedam rapacium momento nobis volatu vastabant non tamen rapiunt dispexerint temporis impetraverint non nec praedam impetraverint dispexerint similes similes aut parvi nobis discursantes rapiunt poterat volatu impetraverint rapiunt celsius ultro."
          />
          <Trips 
          destination="Colombie"
          country="Bogota"
          photo="https://cdn.pixabay.com/photo/2014/09/19/19/13/cocoa-452911__340.jpg" 
          distance="8 559,44km"
          description="Praedam rapacium momento nobis volatu vastabant non tamen rapiunt dispexerint temporis impetraverint non nec praedam impetraverint dispexerint similes similes aut parvi nobis discursantes rapiunt poterat volatu impetraverint rapiunt celsius ultro."
          />
          <Trips 
          destination="Chili"
          country="Santiago"
          photo="https://cdn.pixabay.com/photo/2017/09/11/18/56/puglia-2740055__340.jpg" 
          distance="11 599,57km"
          description="Praedam rapacium momento nobis volatu vastabant non tamen rapiunt dispexerint temporis impetraverint non nec praedam impetraverint dispexerint similes similes aut parvi nobis discursantes rapiunt poterat volatu impetraverint rapiunt celsius ultro."
          />
      </section>
      <section>
        <Travels />
      </section>
      </div>
    )
  }
}

export default App;
