import React from "react";

const Searchbar = ({ Search }) => {
  const SearchHandle = (event) => {
    // console.log(event.target.value);
    Search(event);
  };
  return (
    <div>
      <input type="text" onChange={SearchHandle} />
    </div>
  );
};

export default Searchbar;
