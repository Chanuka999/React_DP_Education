import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { names: [...state.names, action.name] };
    default:
      return state;
  }
};

const NameList = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, { names: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", name: name });
    setName("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
      <p>{state.names.join(", ")}</p>
    </div>
  );
};

export default NameList;
