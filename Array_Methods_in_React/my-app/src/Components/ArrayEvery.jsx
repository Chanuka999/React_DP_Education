const ArrayEvery = ({ nameList }) => {
  const letter = "r";
  const everynum = nameList.every((name) => name.includes(letter));
  return (
    <div>
      <h1>check include every value "r"</h1>
      <table border={1} cellPadding={5}>
        {nameList.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
      <p>{everynum ? "yse" : "No"}</p>
    </div>
  );
};

export default ArrayEvery;
