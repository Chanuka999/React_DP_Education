import React from "react";
import Student from "../Components/Student";

const StudentCard = (name, age, town) => {
  return (
    <div>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fstudents&psig=AOvVaw14MiWcJ0ykOaU7ipwKoHKg&ust=1734000776374000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDswMPGn4oDFQAAAAAdAAAAABAH"
        alt={`student_image_${name}`}
        className="student_image"
      />
      <Student name={name} age={age} town={town} />
    </div>
  );
};

export default StudentCard;
