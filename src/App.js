import "./App.css";
import { Routes, Route } from "react-router-dom";
import MoviesList from "./Components/MoviesList";
import MoviesDetails from "./Components/MoviesDetails";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/:movie_id" element={<MoviesDetails />} />
      </Routes>
    </div>
  );
}

export default App;
