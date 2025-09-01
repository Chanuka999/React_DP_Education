import External from "./normal/External";
import Inline from "./normal/Inline";
import Internal from "./normal/Internal";

const NormalCss = () => {
  return (
    <div>
      <h1>Normal css</h1>
      <div style={{ display: "flex", flexDirection: "colum", gap: "15px" }}>
        <Inline />
        <Internal />
        <External />
      </div>
    </div>
  );
};

export default NormalCss;
