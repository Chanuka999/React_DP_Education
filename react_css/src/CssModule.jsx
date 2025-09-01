import ModuleOne from "./module/ModuleOne";
import ModuleTwo from "./module/ModuleTwo";

const CssModule = () => {
  return (
    <div>
      <h1>Css module</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <ModuleOne />
        <ModuleTwo />
      </div>
    </div>
  );
};

export default CssModule;
