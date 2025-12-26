import React, { useState } from "react";

const Controll = () => {
  const [gender, setGender] = useState("");

  const pronounList = {
    mr: "male",
    ms: "female",
    miss: "female",
  };

  const handleChange = (event) => {
    const checkPronoun = event.target.value;
    setGender(pronounList[checkPronoun] || "");
  };
  return (
    <div>
      <label htmlFor="pronoun">select pronoun</label>
      <br />
      <select key={"pronoun"} onChange={handleChange}>
        <option value="">select your pronoun</option>
        <option value="mr">Mr</option>
        <option value="ms">Ms</option>
        <option value="miss">Miss</option>
      </select>

      <br />
      <input type="text" placeholder="firstName" />
      <input type="text" placeholder="lastName" />

      <div>
        <label>Male</label>
        <input
          type="radio"
          value="male"
          name="gender"
          checked={gender == "male"}
        />
      </div>

      <div>
        <label>FeMale</label>
        <input
          type="radio"
          value="female"
          name="gender"
          checked={gender == "female"}
        />
      </div>
      <p>{gender}</p>
    </div>
  );
};

export default Controll;
