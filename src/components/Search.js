import React from "react";

function Search({ search, handleSearch }) {
  return (
    <div className="search">
      <input
      className="search input"
        type="text"
        placeholder="Search for recipes!"
        value={search}
        onChange={handleSearch}
      ></input>
    </div>
  );
}

export default Search;
