import { Link } from 'react-router-dom';
import useEntityDetails from '../hooks/useEntityDetails';
import { useGlobalContext } from '../context/GlobalContext';

const Card = ({ title, uid, type }) => {
  const { state, dispatch } = useGlobalContext();
  const isFavorite = state.favorites.some((fav) => fav.uid === uid);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: { uid } });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: { uid, name: title.name } });
    }
  };

  const { details, loading, error } = useEntityDetails(title.url);

  const renderExtraInfo = () => {
    if (loading) return <p>Loading details...</p>;
    if (error) return <p>Error loading details.</p>;
    if (!details) return null;

    if (type === 'characters') {
      return (
        <>
          <p>Gender: {details.gender}</p>
          <p>Hair Color: {details.hair_color}</p>
          <p>Eye Color: {details.eye_color}</p>
        </>
      );
    } else if (type === 'planets') {
      return (
        <>
          <p>Climate: {details.climate}</p>
          <p>Population: {details.population}</p>
          <p>Diameter: {details.diameter}</p>
        </>
      );
    }
    return null;
  };

  return (
    <div className="card">
      <img
        src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${type}/${uid}.jpg`}
        className="card-img-top"
        alt={title.name}
      />
      <div className="card-body">
        <h5 className="card-title">{title.name}</h5>
        {renderExtraInfo()}
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/${type}/${uid}`} className="btn btn-primary">
            Learn More
          </Link>
          <button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavorite}
          >
            <i className="bi bi-heart-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
