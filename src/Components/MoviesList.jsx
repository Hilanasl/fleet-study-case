import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchedQuery}`
      )
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch((e) => console.log(e));
  }, [searchedQuery]);

  return (
    <>
      <Searchbar
        searchedQuery={searchedQuery}
        setSearchedQuery={setSearchedQuery}
      />
      <div className="list-container">
        {movies &&
          movies.map((movie) => {
            return (
              <div className="item" key={movie.id}>
                <NavLink
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#aae68e" : "#0dd27a",
                  })}
                  className="movie-name"
                  to={`/movies/${movie.id}`}
                >
                  {movie.title}
                </NavLink>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MoviesList;
