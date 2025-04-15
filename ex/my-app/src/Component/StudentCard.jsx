import { Component } from "react";
import Student from "./Student";

class StudentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age, town } = this.props;
    return (
      <div>
        <Student name={name} age={age} town={town} />
      </div>
    );
  }
}
export default StudentCard;
