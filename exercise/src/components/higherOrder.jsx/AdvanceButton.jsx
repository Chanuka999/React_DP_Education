import { useState } from "react";

const AdvanceButton = (WrapperButton, click = false, hover = false) => {
  const FinalButton = (props) => {
    const [count, setCount] = useState(0);

    const ClickTrigger = () => {
      setCount(count + 1);
    };

    const HoverTrigger = () => {
      setCount(count + 1);
    };
    return (
      <>
        <WrapperButton
          clickTrigger={click ? ClickTrigger : null}
          HoverTrigger={hover ? HoverTrigger : null}
          {...props}
        />
        <h6>{count}</h6>
      </>
    );
  };
  return FinalButton;
};

export default AdvanceButton;
