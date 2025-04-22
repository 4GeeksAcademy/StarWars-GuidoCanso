import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";


const Card = ({ title, uid, type }) => {
  console.log(title);
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();

  const isFavorite = state.favorites.some((fav) => fav.uid == uid);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: { uid } });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: { uid, name: title.name } });
    }
  };


  return (
    <div className="card">
      <img
        src="https://placehold.co/400x200"
        className="card-img-top"
        alt={title.name}
      />
      <div className="card-body">
        <h5 className="card-text">{title.name}</h5>
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

export default Card;
