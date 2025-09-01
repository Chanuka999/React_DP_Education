import { Box } from "@mui/material";
import CardComponent from "./CardComponent";

const Cards = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
      gap={2}
    >
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Box>
  );
};

export default Cards;
