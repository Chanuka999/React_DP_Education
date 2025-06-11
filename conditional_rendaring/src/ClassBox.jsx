const Classbox = ({ isLogged, logout }) => {
  return (
    <div className="box">
      <h3>class box</h3>
      <hr />
      <button
        onClick={() => {
          logout();
        }}
        className={isLogged ? "btn-actived" : "btn-disabled"}
      >
        Logout
      </button>
    </div>
  );
};

export default Classbox;

//api key=ba937063e188d2d1c8277436b13ea409
