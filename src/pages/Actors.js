import { useEffect, useState } from "react";

function Actors() {

  const [actors, setActors] = useState("")

  useEffect(()=>{
    async function fetchActorDetails(){
      const response = await fetch(`http://localhost:4000/actors/`)
      const data = await response.json()
      setActors(data)
    }
    fetchActorDetails()

  }, [])
  return (
    <>
      <main>
        <h1>Actors Page</h1>
        {actors && actors.map(actor => 
          <article>
            <h2>{actor.name}</h2>
            <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
          </article>)}

      </main>
    </>
  );
};

export default Actors;
