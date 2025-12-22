import React from "react";

const Search = ({ onSearch }) => {
  const handleSearch = (event) => {
    //console.log(event.target.value);
    onSearch(event);
  };
  return (
    <div>
      <input type="text" onChange={handleSearch} />
    </div>
  );
};

export default Search;
