import Style from "./one.module.css";

const ModuleOne = () => {
  return (
    <div className={Style["External-Box"]}>
      <h3 className={Style["External-text"]}>moduleOne</h3>
      <button className={Style.button}>module one</button>
    </div>
  );
};

export default ModuleOne;
