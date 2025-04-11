const ArraySort = ({ nameList }) => {
  // const sortname = [...nameList].sort((a, b) => a.localeCompare(b));
  const sortname = [...nameList].sort((a, b) => a.length - b.length);
  return (
    <div>
      <h1>Array sort</h1>
      <table border={1} cellPadding={5}>
        {nameList.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>

      <h1>Sorted Array</h1>
      <table border={1} cellPadding={5}>
        {sortname.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ArraySort;
