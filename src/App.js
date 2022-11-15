import "./App.css";
import AllBeersPage from "./pages/AllBeersPage";
import BeersDetailsPage from "./pages/BeersDetailsPage";
import NewBeersPage from "./pages/NewBeersPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componets/NavBar";
import Container from 'react-bootstrap/Container';

function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <Container>
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
      </Container>
    </div>
  );
}

export default App;
