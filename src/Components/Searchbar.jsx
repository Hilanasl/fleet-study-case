import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ searchedQuery, setSearchedQuery }) => {
  return (
    <div className="input-search">
      <Link to={"/"}>
        <FontAwesomeIcon className="home-icon" icon={faHouse} />
      </Link>
      <input
        type="text"
        placeholder="Search a movie"
        value={searchedQuery}
        onChange={(e) => setSearchedQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
