import { useState } from "react";

const HoverButton = (WrapperButton) => {
  const FinalButton = (props) => {
    const [count, setCount] = useState(0);
    const hoverTrigger = () => {
      setCount(count + 1);
    };

    return (
      <>
        <WrapperButton hoverTrigger={hoverTrigger} {...props} count={count} />
        <h6>{count}</h6>
      </>
    );
  };

  return FinalButton;
};

export default HoverButton;
