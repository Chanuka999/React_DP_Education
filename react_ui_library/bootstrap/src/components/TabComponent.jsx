import { Tab, Tabs } from "react-bootstrap";
import CardComponent from "./CardComponent";
import Cards from "./Cards";
import CarousalComponent from "./CarousalComponent";
import TableComponets from "./TableComponents";
const TabComponent = () => {
  return (
    <Tabs>
      <Tab eventKey="home" title="Home">
        Content of Home tab
        <CarousalComponent />
      </Tab>

      <Tab eventKey="profile" title="Profile">
        Content of Profile tab
        <Cards />
      </Tab>

      <Tab eventKey="contact" title="Contact">
        Content of Contact tab
        <TableComponets />
      </Tab>
    </Tabs>
  );
};

export default TabComponent;
