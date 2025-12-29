import { useState } from "react";

const HoverMouse = (WrapperButton) => {
  const FinalButton = (props) => {
    const [count, setCount] = useState(0);

    const HoverTrigger = () => {
      setCount(count + 1);
    };
    return (
      <>
        <WrapperButton HoverTrigger={HoverTrigger} {...props} />
        <h6>{count}</h6>
      </>
    );
  };
  return FinalButton;
};

export default HoverMouse;
