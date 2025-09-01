import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardComponent from "./CardComponent";

const AccordianComponent = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordian 01
        </AccordionSummary>
        <AccordionDetails>
          This is sample test for the accordian 01
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordian 02
        </AccordionSummary>
        <AccordionDetails>
          This is sample test for the accordian 02
          <CardComponent />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordian 03
        </AccordionSummary>
        <AccordionDetails>
          This is sample test for the accordian 03
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default AccordianComponent;
