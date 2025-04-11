const ArrayFind = ({ numberList, nameList }) => {
  const max = numberList.find((num) => num > 5);

  const namewith = nameList.find((name) => name.includes("p"));
  return (
    <div>
      <table border={1} cellPadding={5}>
        <tr>
          {numberList.map((num) => (
            <td align="center">{num}</td>
          ))}
        </tr>
      </table>
      <hr />

      <p>{max}</p>
      <h1>name of r</h1>
      <table border={1} cellPadding={5}>
        {nameList.map((name) => (
          <td align="center">{name}</td>
        ))}
      </table>

      <hr />

      <p>{namewith}</p>
    </div>
  );
};

export default ArrayFind;
