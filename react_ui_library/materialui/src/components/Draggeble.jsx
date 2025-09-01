import { useDraggeble } from "@dnd-kit/core";

const Draggeble = ({ props }) => {
  const { attributes, listners, setNoderef, transform } = useDraggeble({
    id: "draggable",
  });

  const style = transform
    ? {
        transform: `translate3D(${transform.x}px,${transform.y}px,0)`,
      }
    : undefined;
  return (
    <button ref={setNoderef} style={style} {...listners} {...attributes}>
      {props.children}
    </button>
  );
};

export default Draggeble;
