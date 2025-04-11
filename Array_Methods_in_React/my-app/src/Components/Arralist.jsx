const Arralist = ({ nameList }) => {
  return (
    <div>
      <h1>Dark TV serius Caracters name</h1>
      <ul>
        {nameList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Arralist;
