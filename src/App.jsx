/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const { loading, character, getNewCharacter } = useFetch();

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
