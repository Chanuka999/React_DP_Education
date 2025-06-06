const ArrayForEach = ({ nameList }) => {
  const newNameList = [];
  nameList.forEach((name, index) => {
    newNameList.push(<li key={index}>{name}</li>);
  });
  return (
    <div>
      <h1>Name List['forEach']</h1>
      <ul>{newNameList}</ul>
    </div>
  );
};

export default ArrayForEach;
