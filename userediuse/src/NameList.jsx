import React, { useReducer, useState } from "react";

const reducer = (nameList, action) => {
  switch (action.type) {
    case "add":
      return { names: [...nameList.names, action.name] };
    default:
      return nameList;
  }
};

const NameList = () => {
  const [name, SetName] = useState("");

  const [nameList, dispatch] = useReducer(reducer, { names: [] });

  const handdleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", name: name });
    SetName("");
  };
  return (
    <div>
      <form action="" onSubmit={handdleSubmit}>
        <input
          type="text"
          onChange={(e) => SetName(e.target.value)}
          value={name}
        />
      </form>
      <p>{nameList.names.join(", ")}</p>
    </div>
  );
};

export default NameList;
