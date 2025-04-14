import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const CardPlanet = ({ planet, uid }) => {
  console.log(planet);

  const { state, dispatch } = useGlobalContext();

  const isFavorite = state.favorites.some((fav) => fav.uid == uid);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: { uid } });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: { uid, name: planet.name } });
    }
  };

  return (
    <div className="card">
      <img
        src="https://placehold.co/400x200"
        className="card-img-top"
        alt={planet.name}
      />
      <div className="card-body">
        <h5 className="card-text">{planet.name}</h5>
      </div>
      <div className="d-flex justify-content-between">
        <Link to={`/planet/${uid}`} className="btn btn-primary">
          Learn More
        </Link>
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={handleFavorite}
        >
          <i className="bi bi-heart-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default CardPlanet;
