import SassComponent from "./SCSS/SassComponent";
import ScssComponent from "./SCSS/ScssComponent";

const AdvancedCss = () => {
  return (
    <div>
      <p>SASS||SCSS</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <SassComponent />
        <ScssComponent />
      </div>
    </div>
  );
};

export default AdvancedCss;
