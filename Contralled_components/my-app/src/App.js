import "./App.css";
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  const pronounList = {
    Mr: "male",
    Ms: "female",
    Miss: "female",
  };

  const haddlePronounChange = (event) => {
    const selectPronoun = event.target.value;
    setGender(pronounList[selectPronoun]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="pronoun">Select pronoun</label>
        <select key={"pronoun"} onChange={haddlePronounChange}>
          <option value="">Select your pronoun</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
        </select>

        <br />

        <input type="text" placeholder="first name" />
        <input type="text" placeholder="second name" />

        <div>
          <label>Male</label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={gender === "male"}
          />
        </div>

        <div>
          <label>feMale</label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={gender === "female"}
          />
        </div>
        <p>{gender}</p>
      </header>
    </div>
  );
}

export default App;
