import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/custom.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

const Main = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
