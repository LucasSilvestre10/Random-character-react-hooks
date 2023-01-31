/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const RADOM_PARAM = 671;
  const generateRandomNumber = () => Math.floor(Math.random() * RADOM_PARAM);

  const getNewCharacter = () => {
    const id = generateRandomNumber();
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((result) => result.json())
      .then((data) => setCharacter(data))
      .catch((err) => setError(err))
      .finally(setLoading(false));
    console.log(error);
  };

  useEffect(() => {
    getNewCharacter();
  }, []);

  return (
    <body>
      <main>
        <section>
          <p id="initial">PERSONAGENS DE RICK AND MORTY</p>
          {loading && <p>LOADING...</p> }
          {character
            && (
              <div>
                <img src={ character.image } alt="img1" />
                <p>{character.name}</p>
              </div>)}

        </section>
        <button onClick={ getNewCharacter }>Vamos La</button>
      </main>
    </body>
  );
}

export default App;
