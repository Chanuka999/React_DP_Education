import React from "react";

const Search = ({ onSearch, searchValue }) => {
  const handleSearch = (event) => {
    //console.log(event.target.value);
    onSearch(event);
  };
  return (
    <div>
      <input type="text" onChange={handleSearch} value={searchValue} />
    </div>
  );
};

export default Search;
