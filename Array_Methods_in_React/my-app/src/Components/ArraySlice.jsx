const ArraySlice = ({ nameList }) => {
  const arr1 = nameList.slice(2, 5);
  const arr2 = nameList.slice(3, nameList.length);
  return (
    <div>
      <h1>Slice the name of Array</h1>
      <h3>Orginal array</h3>

      <table border={1} cellPadding={5}>
        {nameList.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>

      <h3>slice array (index2)</h3>
      <table border={1} cellPadding={5}>
        {arr1.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>

      <h3>slice array (index3)</h3>
      <table border={1} cellPadding={5}>
        {arr2.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ArraySlice;
