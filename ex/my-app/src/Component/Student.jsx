import { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age, town } = this.props;
    return (
      <din>
        <li>{name}</li>
        <li>{age}</li>
        <li>{town}</li>
      </din>
    );
  }
}

export default Student;
