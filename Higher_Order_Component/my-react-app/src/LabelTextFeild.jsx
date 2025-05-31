import { Component } from "react";

function LabelTextFeildes(NormalTestFeildlabel, labelText) {
  class FinalTextField extends Component {
    render() {
      return (
        <>
          <div>{labelText}</div>
          <NormalTestFeildlabel />
        </>
      );
    }
  }
  return FinalTextField;
}

export default LabelTextFeildes;
