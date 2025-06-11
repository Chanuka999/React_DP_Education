const IfBox = ({ isLogged }) => {
  if (isLogged) {
    return (
      <div className="box">
        <h3>If Box</h3>
        <hr />
        <h3>Welcome back</h3>
      </div>
    );
  } else {
    return (
      <div className="box">
        <h3>If Box</h3>
        <hr />
        <h3>please Login....</h3>
      </div>
    );
  }
};

export default IfBox;
