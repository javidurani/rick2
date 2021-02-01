import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React from 'react'


function App() {
    const [characters, setCharacters] = React.useState([]);
    React.useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          const newCharacters = res.data.results;

          setCharacters(newCharacters);
        });
    });

    return (
      <div className = "parentdiv">
        {characters.map(c => (
          <div className = "childiv">
            <img src = {c.image} alt = ""></img>
            <p className = "name"><div className = "cName"><strong>Name: {c.name} </strong></div>
              <div className = "cStatus">Status: {c.status}</div>
              <div className = "cLocation">Status: {c.location.name}</div>
              <div className = "cSpecies">Status: {c.species}</div>
            </p>
          </div>
        ))}
      </div>
    );
      
}

export default App;
