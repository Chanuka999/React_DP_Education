import React from "react";

const Newbar = ({ Search2 }) => {
  const SearchHandle2 = (event) => {
    //console.log(event.target.value);
    Search2(event);
  };
  return (
    <div>
      <p>This is new bar</p>
      <input type="text" onChange={SearchHandle2} />
    </div>
  );
};

export default Newbar;
