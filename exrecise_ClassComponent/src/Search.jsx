import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch = (event) => {
    //console.log(event.target.value);
    this.props.onSearch(event);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearch}
          value={this.props.searchValue}
        />
      </div>
    );
  }
}

export default Search;
