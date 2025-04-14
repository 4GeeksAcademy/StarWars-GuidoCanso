import { useGlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  const handleRemove = (item) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: item });
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span>Start Wars</span>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Favorites {state.favorites.length}
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {state.favorites.length === 0 ? (
            <li className="dropdown-item text-muted">No favorites</li>
          ) : (
            state.favorites.map((item) => (
              <li key={item.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                {item.name}
                <button
                  className="btn btn-sm"
                  onClick={() => handleRemove(item)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
