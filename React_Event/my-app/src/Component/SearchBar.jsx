import React from "react";

const SearchBar = ({ search }) => {
  const searchHanddle = (event) => {
    // console.log(event.target.value);
    search(event);
  };
  return (
    <div>
      <input type="text" onChange={searchHanddle} />
    </div>
  );
};

export default SearchBar;
