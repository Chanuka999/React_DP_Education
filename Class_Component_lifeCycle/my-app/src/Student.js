import { Component } from "react";
import Logo from "./Logo";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { year: 0, color: "black", speed: 10 };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    const newYear = new Date().getFullYear() - nextProps.age;
    console.log(newYear);
    if (newYear === prevState.year) {
      return null;
    } else {
      return { year: newYear };
    }
  }

  componentDidMount() {
    console.log("componentDidmount");
    setTimeout(() => {
      this.setState({ color: "red" });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextProps.name.length > 3) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return prevProps.name;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidupdate");
    console.log(snapshot);

    if (this.props.name != this.state.speed) {
      console.log("name is not equal to speed");
    } else {
      console.log("name is equal to speed");
    }
  }
  render() {
    const { name, age } = this.props;

    return (
      <div style={{ backgroundColor: this.state.color }}>
        <Logo animationDuration={this.state.speed} />
        <h3>name - {name}</h3>
        <h3>age - {age}</h3>
        <h3>Year - {this.state.year}</h3>
      </div>
    );
  }
}
export default Student;
