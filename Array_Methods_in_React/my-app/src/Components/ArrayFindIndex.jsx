const ArrayFindindex = ({ nameList }) => {
  const nameIndex = nameList.findIndex((name) => name.includes("p"));
  return (
    <div>
      <h1>fnd index of name</h1>
      <table border={1} cellPadding={5}>
        {nameList.map((name, index) => (
          <tr bgColor={index === nameIndex ? "blue" : ""}>
            <td key={index}>{index}</td>
            <td key={name}>{name}</td>
          </tr>
        ))}
      </table>
      <hr />
      <p>{nameIndex}</p>
    </div>
  );
};

export default ArrayFindindex;
