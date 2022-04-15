import React from "react";
import MoviesList from "./MoviesList";

const Homepage = () => {
  return (
    <div className="home-section">
      <div>
        <MoviesList />
      </div>
      <div className="logo-section">
        <h1>Welcome to fleetflix</h1>
      </div>
    </div>
  );
};

export default Homepage;
