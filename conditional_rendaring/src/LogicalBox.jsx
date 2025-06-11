const LogicalBox = ({ isLogged }) => {
  return (
    <div className="box">
      <h3>Logical operator</h3>
      <hr />
      {isLogged && <h3>welcome back</h3>}
      {!isLogged && <h3>please login....</h3>}
    </div>
  );
};

export default LogicalBox;
