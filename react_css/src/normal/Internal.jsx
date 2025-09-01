const Internal = () => {
  const InternalCss = {
    container: {
      padding: "14px 15px",
      backgroundColor: "#0773f7",
      borderRadius: "5px",
    },
    text: {
      color: "#1c1919",
    },
  };
  return (
    <div style={InternalCss.container}>
      <h3 style={InternalCss.text}>internal css</h3>
    </div>
  );
};

export default Internal;
