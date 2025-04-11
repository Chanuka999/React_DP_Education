const ArrayNumber = ({ numberList }) => {
  const sum = numberList.reduce((total, num) => total + num, 10);
  return (
    <div>
      <h1>Number List</h1>
      <ul>
        {numberList.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
      <h1>Sum of sumbers</h1>
      <p>{sum}</p>
    </div>
  );
};

export default ArrayNumber;
