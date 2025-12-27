import { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age, city } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{city}</p>
      </div>
    );
  }
}

export default Student;
