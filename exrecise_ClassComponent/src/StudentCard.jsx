import React, { Component } from "react";
import Student from "./Student";

class StudentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age, city } = this.props;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
          src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-654466-1462630.jpg&fm=jpg"
          alt="student"
          height={50}
          width={50}
        />

        <div
          style={{ display: "flex", alignItems: "center", objectFit: "cover" }}
        >
          <Student name={name} age={age} city={city} />
        </div>
      </div>
    );
  }
}

export default StudentCard;
