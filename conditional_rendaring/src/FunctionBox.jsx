const FunctionBox = ({ isLogged }) => {
  //   const checkState = () => {
  //     if (isLogged) {
  //       return <h3>welcome back</h3>;
  //     } else {
  //       return <h3>please login....</h3>;
  //     }
  //   };

  return (
    <div className="box">
      <h3>Function Box</h3>
      <hr />
      {/* {checkState()} */}
      {(() => {
        if (isLogged) {
          return <h3>welcome back</h3>;
        } else {
          return <h3>please login</h3>;
        }
      })()}
    </div>
  );
};

export default FunctionBox;
