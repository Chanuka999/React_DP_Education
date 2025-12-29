import React from "react";

const Button = ({ text, clickTrigger, HoverTrigger }) => {
  const mouseClick = () => {
    if (clickTrigger) {
      clickTrigger();
    }
  };
  const mouseHover = () => {
    if (HoverTrigger) {
      HoverTrigger();
    }
  };
  return (
    <div>
      <button onClick={mouseClick} onMouseOver={mouseHover}>
        {text}
      </button>
    </div>
  );
};

export default Button;
