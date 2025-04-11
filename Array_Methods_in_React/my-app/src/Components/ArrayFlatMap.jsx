const ArrayFlatMap = ({ nameList }) => {
  const arr1 = nameList.map((name) => name.split(""));
  const arr2 = nameList.flatMap((name) => name.split(""));
  return (
    <div>
      <h1>Array Flat Map</h1>

      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(nameList)}</td>
        </tr>
      </table>

      <h1>Array Flat Map 1</h1>

      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(arr1)}</td>
        </tr>
      </table>

      <h1>Array Flat Map 2</h1>

      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(arr2)}</td>
        </tr>
      </table>
    </div>
  );
};
export default ArrayFlatMap;
