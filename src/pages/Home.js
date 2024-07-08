import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"

function Home() {

  const [movies, setMovies] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/movies")
    .then(res => res.json())
    .then(resConverted => setMovies(resConverted))

  }, [])
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map(movie => <MovieCard key = {movie.id}movie = {movie}/>)}
        
      </main>
    </>
  );
};

export default Home;
