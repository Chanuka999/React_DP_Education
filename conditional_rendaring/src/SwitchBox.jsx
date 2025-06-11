const SwitchBox = ({ isLogged }) => {
  let content;

  switch (isLogged) {
    case true:
      content = <h3>welcome back</h3>;
      break;
    case false:
      content = <h3>please login</h3>;
      break;
    default:
      content = <h3>somthing value is wrong</h3>;
  }

  return (
    <div className="box">
      <h3>switch box</h3>
      <hr />
      {content}
    </div>
  );
};

export default SwitchBox;
