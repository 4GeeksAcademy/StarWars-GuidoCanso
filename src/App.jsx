import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlanetDetail from "./pages/PlanetDetail";
import { GlobalProvider } from "./context/GlobalContext";
import CharacterDetail from "./pages/CharacterDetail";
import { router } from "./routes";

const App = () => {
  return (
    <GlobalProvider>
      {/* <BrowserRouter> */}
        {/* <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planets/:id" element={<PlanetDetail />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
          </Routes>
        </Layout> */}
        <RouterProvider router={router}></RouterProvider> 
      {/* </BrowserRouter> */}
    </GlobalProvider>
  );
};

export default App;
