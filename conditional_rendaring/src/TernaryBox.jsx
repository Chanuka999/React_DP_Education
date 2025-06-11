const TernaryBox = ({ isLogged }) => {
  return (
    <div className="box">
      <h3>Ternary box</h3>
      <hr />
      {isLogged ? <h3>welcome back</h3> : <h3>please login...</h3>}
    </div>
  );
};

export default TernaryBox;
