import { Component } from "react";
import "./App.css";
import Student from "./Student";
import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "chanuka",
      age: 23,
    };
  }

  onSearch = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    const { name, age } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
          <Search onSearch={this.onSearch} />
          <Student name={name} age={age} />
        </header>
      </div>
    );
  }
}
export default App;
