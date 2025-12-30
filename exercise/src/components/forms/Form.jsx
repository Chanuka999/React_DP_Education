import React, { useState } from "react";

const Form = () => {
  // const [username, setUsername] = useState("abc");
  // const [password, setPassword] = useState("***");
  // const [email, setEmail] = useState("chanuka@gmail.com");
  // const [age, setAge] = useState(23);
  // const [gender, setGender] = useState("");
  // const [country, setCountry] = useState("");
  // const [hobbies, setHobbies] = useState([]);

  const [feildData, setFeildDaata] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    country: "",
    hobbies: [],
  });

  const feildHandler = (e) => {
    console.log(e.target.value);

    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        if (!feildData[e.target.name].includes(e.target.value)) {
          setFeildDaata({
            ...feildData,
            [e.target.name]: [...feildData[e.target.name], e.target.value],
          });
        } else {
          const newList = feildData[e.target.name].filter(
            (item) => item !== e.target.value
          );
          setFeildDaata({ ...feildData, [e.target.name]: newList });
        }
      }
    } else {
      setFeildDaata({ ...feildData, [e.target.name]: e.target.value });
    }
  };

  console.log(feildData);

  //   const usernameHandler = (event) => {
  //     console.log(event.target.value);

  //     setUsername(event.target.value);
  //   };

  //   const passwordHandler = (event) => {
  //     console.log(event.target.value);
  //     setPassword(event.target.value);
  //   };

  //   const emailHandler = (event) => {
  //     setEmail(event.target.value);
  //   };

  //   const ageHandler = (event) => {
  //     setAge(event.target.value);
  //   };

  //   const genderHandler = (event) => {
  //     setGender(event.target.value);
  //   };

  //   const countryHandler = (event) => {
  //     console.log(event.target.value);

  //     setCountry(event.target.value);
  //   };

  //   const hobbiesHandler = (event) => {
  //     if (event.target.checked) {
  //       console.log(event.target.value);
  //       if (!hobbies.includes(event.target.value)) {
  //         setHobbies([...hobbies, event.target.value]);
  //       }
  //     } else {
  //       const newHobbies = hobbies.filter((hobby) => hobby != event.target.value);
  //       setHobbies(newHobbies);
  //     }
  //   };

  return (
    <div>
      <h1>Form</h1>
      <div>
        <label>username</label>
        <input
          type="text"
          value={feildData.username}
          onChange={feildHandler}
          name="username"
        />
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          name="password"
          value={feildData.password}
          onChange={feildHandler}
        />
      </div>
      <div>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={feildData.email}
          onChange={feildHandler}
        />
      </div>

      <div>
        <label>age</label>
        <input
          type="number"
          name="age"
          value={feildData.age}
          onChange={feildHandler}
        />
      </div>
      <div>
        <label>Gender</label>
        <label>
          <input
            type="radio"
            name="gender"
            checked={feildData.gender === "male"}
            value="male"
            onChange={feildHandler}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            checked={feildData.gender === "female"}
            value="female"
            onChange={feildHandler}
          />
          Female
        </label>
      </div>
      <div>
        <label>Country</label>
        <select
          name="country"
          value={feildData.country}
          onChange={feildHandler}
        >
          <option value="">select country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="srilanka">Sri Lanka</option>
          <option value="india">India</option>
        </select>
      </div>
      <div>
        <label>hobbies</label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            onChange={feildHandler}
          />
          reading
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="gaming"
            onChange={feildHandler}
          />
          gaming
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="playing"
            onChange={feildHandler}
          />
          playing
        </label>
      </div>
    </div>
  );
};

export default Form;
