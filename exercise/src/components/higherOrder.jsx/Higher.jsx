import React from "react";
import TextField from "./textField";
import LabelField from "./labelField";
import Button from "./Button";
import ClickButton from "./ClickButton";
import HoverMouse from "./HoverMouse";
import AdvanceButton from "./AdvanceButton";

const NewLabelTextField = LabelField(TextField, "FirstName");
const NewButton = ClickButton(Button);
const NewHoverButton = HoverMouse(Button);
const NewAdvanceButton = AdvanceButton(Button, true, true);

const Higher = () => {
  return (
    <div>
      <TextField />
      <br />
      <NewLabelTextField />
      <br />
      <Button text="normal button" />
      <br />
      <NewButton text="click button" />
      <br />
      <NewHoverButton text="Hover button" />
      <br />
      <NewAdvanceButton text="Advance Button" />
    </div>
  );
};

export default Higher;
