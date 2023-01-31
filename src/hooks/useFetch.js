/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useFetch() {
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

  return {
    character,
    loading,
    getNewCharacter,
  };
}
