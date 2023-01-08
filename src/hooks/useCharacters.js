import { useState, useEffect } from "react";

const useCharacters = (url) => { // url es la url de la API
  const [characters, setCharacters] = useState([]); // characters es el estado inicial de la data
  useEffect(() => { // useEffect es un hook que se ejecuta cuando se renderiza el componente
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [url]); // url es la dependencia del useEffect, si cambia se ejecuta de nuevo
  return characters; // retorna la data
};

export default useCharacters;