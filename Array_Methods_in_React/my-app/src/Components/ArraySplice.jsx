const ArraySplice = ({ nameList }) => {
  var arr1 = [...nameList];
  var arr2 = [...nameList];
  arr1.splice(3, 0, "between michal and charlet");
  arr2.splice(3, 2, "replace charles and hennah");
  return (
    <div>
      <h1>Splice array</h1>
      <table border={1} cellPadding={5}>
        {nameList.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>

      <h1>activity array1 </h1>
      <table border={1} cellPadding={5}>
        {arr1.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>

      <h1>activity array2 </h1>
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

export default ArraySplice;
