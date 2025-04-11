const ArrayFlat = ({ nameList }) => {
  const newArray = [
    ...nameList.slice(0, 3),
    [nameList[3], nameList[4], nameList.slice(5, nameList.length)],
  ];

  const arr1 = newArray.flat();
  const arr2 = newArray.flat(2);
  return (
    <div>
      <h1>Array Flat</h1>

      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(newArray)}</td>
        </tr>
      </table>

      <h1>Array Flat 1</h1>

      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(arr1)}</td>
        </tr>
      </table>

      <h1>Array Flat 2</h1>

      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(arr2)}</td>
        </tr>
      </table>
    </div>
  );
};
export default ArrayFlat;
