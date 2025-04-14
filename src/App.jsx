import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlanetDetail from "./pages/PlanetDetail";
import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planet/:id" element={<PlanetDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
