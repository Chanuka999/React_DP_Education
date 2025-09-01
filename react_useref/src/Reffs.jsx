import { useRef, useState } from "react";

const Reffs = () => {
  console.log("ref renderd");

  const [inputState, setInputState] = useState(false);

  const inputref = useRef(null);
  const inputref2 = useRef(null);
  const inputref3 = useRef(null);
  const buttonHandler = () => {
    setInputState((stat) => (stat ? false : true));
  };

  const buttonHandler1 = () => {
    inputref.current.style.backgroundColor = "#00ff00";
    inputref2.current.style.backgroundColor = "";
    inputref3.current.style.backgroundColor = "";
  };

  const buttonHandler2 = () => {
    inputref.current.style.backgroundColor = "";
    inputref2.current.style.backgroundColor = "#00ff00";
    inputref3.current.style.backgroundColor = "";
  };

  const buttonHandler3 = () => {
    inputref.current.style.backgroundColor = "";
    inputref2.current.style.backgroundColor = "";
    inputref3.current.style.backgroundColor = "#00ff00";
  };
  return (
    <div>
      <button onClick={buttonHandler}>Click me</button>
      <input
        type="text"
        style={{ backgroundColor: inputState ? "#00ff00" : "#fff" }}
      />
      <br />
      <input type="text" ref={inputref} />
      <br />
      <button onClick={buttonHandler1}>Text 01</button>
      <br />
      <input type="text" ref={inputref2} />
      <br />
      <button onClick={buttonHandler2}>Text 02</button>
      <br />
      <input type="text" ref={inputref3} />
      <br />
      <button onClick={buttonHandler3}>Text 03</button>
    </div>
  );
};

export default Reffs;
