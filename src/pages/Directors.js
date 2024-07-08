import { useEffect, useState } from "react";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(resConverted => setDirectors(resConverted))

  }, [])
  return (
    <>
        {directors.map(director => 
        <main>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </main>
          
          )}
    </>
  );
};

export default Directors;
