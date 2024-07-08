import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("")

  useEffect(()=>{
    async function fetchMovieDetails(){
      const response = await fetch(`http://localhost:4000/movies/${id}`)
      const data = await response.json()
      setMovie(data)
    }
    fetchMovieDetails()

  }, [id])


  return (
    <>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {movie.genres && movie.genres.map(genre => <span key={genre}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
