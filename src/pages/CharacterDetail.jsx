import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getCharacterById } from "../api/swapi";


const CharacterDetail = () => {
    const { id } = useParams();
    const { data: character, loading, error } = useFetch(getCharacterById, id);


    if (loading) return <p>Loading ....</p>;
    if (error) return <p>Error loading planet.</p>;

    const {
        name,
        gender,
        height,
        birth_year,
        eye_color,
        hair_color,
        skin_color,
    } = character.properties;

    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-6 text-center">
                    <img
                        src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${id}.jpg`}
                        alt={name}
                        className="img-fluid"
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                </div>


                <div className="col-md-6">
                    <h1>{name}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                        suscipit velit animi natus nesciunt adipisci tempora similique
                        perspiciatis maiores!
                    </p>
                </div>
            </div>

            <hr className="my-4" />


            <div className="row text-center text-danger fw-bold">
                <div className="col">Name<br /><span className="text-dark fw-normal">{name}</span></div>
                <div className="col">Gender<br /><span className="text-dark fw-normal">{gender}</span></div>
                <div className="col">Birth Year<br /><span className="text-dark fw-normal">{birth_year}</span></div>
                <div className="col">Height<br /><span className="text-dark fw-normal">{height}</span></div>
                <div className="col">Eye Color<br /><span className="text-dark fw-normal">{eye_color}</span></div>
                <div className="col">Hair Color<br /><span className="text-dark fw-normal">{hair_color}</span></div>
                <div className="col">Skin Color<br /><span className="text-dark fw-normal">{skin_color}</span></div>
            </div>
        </div>
    );
};


export default CharacterDetail;
