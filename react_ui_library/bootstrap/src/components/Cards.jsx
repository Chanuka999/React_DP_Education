import { Stack } from "react-bootstrap";
import CardComponent from "./CardComponent";
const Cards = () => {
  return (
    <Stack className="justify-content-center" direction="horizontal" gap={3}>
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Stack>
  );
};

export default Cards;
