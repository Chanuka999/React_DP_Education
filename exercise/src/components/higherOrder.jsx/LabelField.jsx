import { Component } from "react";

function LabelField(NormalTextFeild, labelText) {
  class finalLabelField extends Component {
    render() {
      return (
        <>
          <div>{labelText}</div>
          <NormalTextFeild />
        </>
      );
    }
  }
  return finalLabelField;
}

export default LabelField;
