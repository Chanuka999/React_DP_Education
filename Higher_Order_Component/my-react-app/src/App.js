import React from "react";

import TestFeild from "./TestFeild";
import LabelTextFeildes from "./LabelTextFeild";
import Button from "./Button";
import ClickButton from "./ClickButton";
import HoverButton from "./HoverButton";
import AdvancedButton from "./AdvancedButton";

const NewLableTextFeildes = LabelTextFeildes(TestFeild, "first name");
const NewClickrdButton = ClickButton(Button);
const NewHoverButton = HoverButton(Button);
const NewAdvancedButton = AdvancedButton(Button, true, true);

const App = () => {
  return (
    <div>
      <TestFeild />
      <br />
      <NewLableTextFeildes />
      <Button text="normal Button" />
      <NewClickrdButton text="Click me" />
      <NewHoverButton text="Hover me" />
      <NewAdvancedButton text="click me" />
    </div>
  );
};

export default App;
