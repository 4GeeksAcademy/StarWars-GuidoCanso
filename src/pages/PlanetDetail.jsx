import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getPlanetById } from "../api/swapi";

const PlanetDetail = () => {
  const { id } = useParams();
  const { data: planet, loading, error } = useFetch(getPlanetById, id);


  if (loading) return <p>Loading ....</p>;
  if (error) return <p>Error loading planet.</p>;

  const { name, climate, population, orbital_period, rotation_period, diameter } = planet.properties;

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Imagen a la izquierda */}
        <div className="col-md-6 text-center">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt={name}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Texto a la derecha */}
        <div className="col-md-6">
          <h1>{name}</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>

      <hr className="my-4" />

      
      <div className="row text-center text-danger fw-bold">
        <div className="col">Name<br /><span className="text-dark fw-normal">{name}</span></div>
        <div className="col">Climate<br /><span className="text-dark fw-normal">{climate}</span></div>
        <div className="col">Population<br /><span className="text-dark fw-normal">{population}</span></div>
        <div className="col">Orbital Period<br /><span className="text-dark fw-normal">{orbital_period}</span></div>
        <div className="col">Rotation Period<br /><span className="text-dark fw-normal">{rotation_period}</span></div>
        <div className="col">Diameter<br /><span className="text-dark fw-normal">{diameter}</span></div>
      </div>
    </div>
  );
};

export default PlanetDetail;
