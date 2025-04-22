import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getpeopleById } from "../api/swapi";

const CharacterDetail = () => {
    const { id } = useParams();
    const { data: people, loading, error } = useFetch(getPeopleById, id);


    if (loading) return <p>Loading ....</p>;
    if (error) return <p>Error loading planet.</p>;

    return (
        <div>
            <h1>{people.properties.name}</h1>
        </div>
    );
};

export default CharacterDetail;
