import StyleTwo from "./two.module.css";

const ModuleTwo = () => {
  return (
    <div className={StyleTwo["External-Box"]}>
      <h3 className={StyleTwo["External-text"]}>module two</h3>
      <button className={StyleTwo.button}>module button</button>
    </div>
  );
};

export default ModuleTwo;
