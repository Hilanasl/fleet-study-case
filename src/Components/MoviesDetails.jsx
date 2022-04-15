import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState("");
  const { movie_id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        setMovieInfo(data);
      })
      .catch((e) => console.log(e));
  }, [movie_id]);

  return (
    <>
      <div className="container">
        <div>
          <MoviesList />
        </div>
        {movieInfo ? (
          <div className="info-container">
            <div className="movie-img">
              <img
                className="cover-img"
                src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
                alt={movieInfo.title}
              />
            </div>
            <div className="info-text">
              <div>
                <h2>{movieInfo.title}</h2>
                <p>
                  <b>Score:</b> {movieInfo.vote_average}
                </p>
                <p>
                  <i>{movieInfo.tagline}</i>
                </p>
              </div>
              <div className="overview">
                <p>{movieInfo.overview}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>No info for this movie!</p>
        )}
      </div>
    </>
  );
};

export default MoviesDetails;
