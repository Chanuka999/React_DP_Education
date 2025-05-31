import React, { useState } from "react";

const App = () => {
  // const [username, setUsername] = useState("ab");
  // const [password, setPassword] = useState("asd");
  // const [email, setEmail] = useState("chanuka@123");
  // const [age, setAge] = useState(20);
  // const [gender, setGender] = useState("");
  // const [country, setCountry] = useState("");
  // const [hobbies, setHobbies] = useState([]);

  const [fileData, setFileData] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    country: "",
    hobbies: [],
  });

  console.log(fileData);

  const fileHanddler = (e) => {
    const { name, value, checked, type } = e.target;
    console.log(value);

    if (type === "checkbox") {
      if (checked) {
        if (!fileData[name].includes(value)) {
          setFileData({ ...fileData, [name]: [...fileData[name], value] });
        }
      } else {
        const newList = fileData[name].filter((item) => item !== value);
        setFileData({ ...fileData, [name]: newList });
      }
    } else {
      setFileData({ ...fileData, [name]: value });
    }
  };

  // const changeusername = (e) => {
  //   console.log(e.target.value);
  //   setUsername(e.target.value);
  // };

  // const passwordHanddler = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // };

  // const emailHanddler = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };

  // const ageHanddler = (e) => {
  //   console.log(e.target.value);
  //   setAge(e.target.value);
  // };

  // const genderHanddler = (e) => {
  //   console.log(e.target.value);
  //   setGender(e.target.value);
  // };

  // const countryHanddler = (e) => {
  //   console.log(e.target.value);
  //   setCountry(e.target.value);
  // };

  // const hobbiesHandler = (e) => {
  //   if (e.target.checked) {
  //     console.log(e.target.value);
  //     if (!hobbies.includes(e.target.value)) {
  //       setHobbies([...hobbies, e.target.value]);
  //     }
  //   } else {
  //     const newHobbies = hobbies.filter((hobby) => hobby !== e.target.value);
  //     setHobbies(newHobbies);
  //   }
  // };
  return (
    <div>
      <form>
        <div>
          <label>UserName :</label>
          <input
            type="text"
            value={fileData.username}
            onChange={fileHanddler}
            name="username"
          />
        </div>

        <div>
          <label>Password :</label>
          <input
            type="password"
            value={fileData.password}
            onChange={fileHanddler}
            name="password"
          />
        </div>

        <div>
          <label>E mail :</label>
          <input
            type="email"
            value={fileData.email}
            onChange={fileHanddler}
            name="email"
          />
        </div>

        <div>
          <label>Age :</label>
          <input
            type="number"
            value={fileData.age}
            onChange={fileHanddler}
            name="age"
          />
        </div>

        <div>
          <label>Gender :</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={fileData.gender === "male"}
              onChange={fileHanddler}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={fileData.gender === "female"}
              onChange={fileHanddler}
            />
            Female
          </label>
        </div>

        <div>
          <label>Country :</label>
          <select
            name="country"
            value={fileData.country}
            onChange={fileHanddler}
          >
            <option value="">select your country</option>
            <option value="usa">USA</option>
            <option value="sri lanka">Sri lanka</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        <div>
          <label>Hobbies :</label>
          <br />
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              onChange={fileHanddler}
            />
            reading
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="gaming"
              onChange={fileHanddler}
            />
            gaming{" "}
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="travelling"
              onChange={fileHanddler}
            />
            travelling
          </label>
        </div>
      </form>
    </div>
  );
};

export default App;
