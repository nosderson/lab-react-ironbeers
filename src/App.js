import "./App.css";
import AllBeersPage from "./pages/AllBeersPage";
import BeersDetailsPage from "./pages/BeersDetailsPage";
import NewBeersPage from "./pages/NewBeersPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Barra from "./components/Barra";

function App() {
 
  return (
    <div className="App">
      <Barra/>
      <div className="container py-5">
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        ></Route>

        <Route
          path="/beers"
          element={<AllBeersPage />}
        ></Route>

        <Route
          path="/random-beer"
          element={<RandomBeersPage />}
        ></Route>

        <Route
          path="/beers/:beerId"
          element={<BeersDetailsPage />}
        />

        <Route
          path="new-beer"
          element={<NewBeersPage />}
        />
      </Routes>
      </div>
    </div>
  );
}

export default App;
