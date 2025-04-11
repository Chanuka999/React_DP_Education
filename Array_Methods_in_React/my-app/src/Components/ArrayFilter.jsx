const ArrayFilter = ({ nameList }) => {
  const FilterList = nameList.filter((name) =>
    name.toLowerCase().startsWith("j")
  );
  return (
    <div>
      <h1>Filter Name["J"]:</h1>
      <ul>
        {FilterList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayFilter;
