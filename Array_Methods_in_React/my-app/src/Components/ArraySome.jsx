const ArraySome = ({ nameList }) => {
  const letter = "r";
  const somenum = nameList.some((name) => name.includes(letter));
  return (
    <div>
      <h1>check if any name include "r"</h1>
      <table border={1} cellPadding={5}>
        {nameList.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
      <p>{somenum ? "yes" : "No"}</p>
    </div>
  );
};

export default ArraySome;
