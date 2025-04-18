import { useEffect } from "react";
import { getPlanets,getCharacters } from "../api/swapi";
import { useFetch } from "../hooks/useFetch";
import Card from "../components/Card";

const Home = () => {
  const { data: planets, loading: loadingPlanets } = useFetch(getPlanets, null);
  const { data: characters, loading: loadingCharacters } = useFetch(getCharacters, null);

  return (
    <>
      <h1>Star Wars Explorer</h1>

      <h2>Planets</h2>
      <div className="row">
        {loadingPlanets ? (
          <p>Loading planets ....</p>
        ) : (
          planets.map((planet, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card type={"planets"}title={planet} uid={index + 1} />
            </div>
          ))
        )}
      </div>
      <h2>Characters</h2>
      <div className="row">
        {loadingCharacters ? (
          <p>Loading Characters ....</p>
        ) : (
          characters.map((character, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card type={"people"} title={character} uid={index + 1} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
